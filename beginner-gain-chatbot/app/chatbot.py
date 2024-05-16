from __future__ import annotations

from typing import List, Optional

from langchain import hub
from langchain.callbacks.tracers.evaluation import EvaluatorCallbackHandler
from langchain.callbacks.tracers.schemas import Run
from langchain.schema import (
    AIMessage,
    BaseMessage,
    HumanMessage,
    StrOutputParser,
    get_buffer_string,
)
from langchain_community.chat_models import ChatOpenAI
from langchain_core.output_parsers.openai_functions import JsonOutputFunctionsParser
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.runnables import Runnable
from langsmith.evaluation import EvaluationResult, RunEvaluator
from langsmith.schemas import Example

from langchain_community.chat_models import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.prompts.few_shot import FewShotPromptTemplate
from langchain.prompts.prompt import PromptTemplate
from langchain.prompts import ChatPromptTemplate, FewShotChatMessagePromptTemplate
import os
from dotenv import load_dotenv
from langchain.schema.runnable import Runnable
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

load_dotenv()
memory = ConversationBufferMemory()

class ResponseEffectiveness(BaseModel):
    """Score the effectiveness of the AI chat bot response."""

    reasoning: str = Field(
        ...,
        description="Explanation for the score.",
    )
    score: int = Field(
        ...,
        min=0,
        max=5,
        description="Effectiveness of AI's final response.",
    )


def format_messages(input: dict) -> List[BaseMessage]:
    """Format the messages for the evaluator."""
    chat_history = input.get("chat_history") or []
    results = []
    for message in chat_history:
        if message["type"] == "human":
            results.append(HumanMessage.parse_obj(message))
        else:
            results.append(AIMessage.parse_obj(message))
    return results


def format_dialog(input: dict) -> dict:
    """Format messages and convert to a single string."""
    chat_history = format_messages(input)
    formatted_dialog = get_buffer_string(chat_history) + f"\nhuman: {input['text']}"
    return {"dialog": formatted_dialog}


def normalize_score(response: dict) -> dict:
    """Normalize the score to be between 0 and 1."""
    response["score"] = int(response["score"]) / 5
    return response


# To view the prompt in the playground: https://smith.langchain.com/hub/wfh/response-effectiveness
evaluation_prompt = hub.pull("wfh/response-effectiveness")
evaluate_response_effectiveness = (
    format_dialog
    | evaluation_prompt
    # bind_functions formats the schema for the OpenAI function
    # calling endpoint, which returns more reliable structured data.
    | ChatOpenAI(model="gpt-4").bind_functions(
        functions=[ResponseEffectiveness],
        function_call="ResponseEffectiveness",
    )
    # Convert the model's output to a dict
    | JsonOutputFunctionsParser(args_only=True)
    | normalize_score
)


class ResponseEffectivenessEvaluator(RunEvaluator):
    """Evaluate the chat bot based the subsequent user responses."""

    def __init__(self, evaluator_runnable: Runnable) -> None:
        super().__init__()
        self.runnable = evaluator_runnable

    def evaluate_run(
        self, run: Run, example: Optional[Example] = None
    ) -> EvaluationResult:
        # This evaluator grades the AI's PREVIOUS response.
        # If no chat history is present, there isn't anything to evaluate
        # (it's the user's first message)
        if not run.inputs.get("chat_history"):
            return EvaluationResult(
                key="response_effectiveness", comment="No chat history present."
            )
        # This only occurs if the client isn't correctly sending the run IDs
        # of the previous calls.
        elif "last_run_id" not in run.inputs:
            return EvaluationResult(
                key="response_effectiveness", comment="No last run ID present."
            )
        # Call the LLM to evaluate the response
        eval_grade: Optional[dict] = self.runnable.invoke(run.inputs)
        target_run_id = run.inputs["last_run_id"]
        return EvaluationResult(
            **eval_grade,
            key="response_effectiveness",
            target_run_id=target_run_id,  # Requires langsmith >= 0.0.54
        )

def format_chat_history(chain_input: dict) -> dict:
    messages = format_messages(chain_input)

    return {
        "chat_history": messages,
        "text": chain_input.get("text"),
    }

class ChainInput(BaseModel):
    """Input for the chat bot."""

    chat_history: Optional[List[BaseMessage]] = Field(
        description="Previous chat messages."
    )
    text: str = Field(..., description="User's latest query.")
    last_run_id: Optional[str] = Field("", description="Run ID of the last run.")


def get_chain():
    examples = [
        [
            {
                "text": "앱으로 만들까 웹으로 만들까?",
                "answer": """
                    기기를 활용해야 해? 그러면 앱을 추천할게. 단순 정보 제공이 주된 목적이야? 그러면 웹을 추천할게.
        """,
            },
            {
                "text": "자바스크립트와 타입스크립트중에서 어떤 것을 선택할까?",
                "answer": """
                    프로젝트의 규모가 어때? 큰 규모라면 타입스크립트가 유리해. 팀 작업을 많이 해? 여러 사람이 함께 일하면 타입스크립트가 코드 관리에 도움이 돼.
                """,
            },
            {
                "text": "다음은 css관련 라이브러린데  css component, matherial UI, chakra UI, tailwind css, emotion 중에서 어떤 걸 선택해야 할까?",
                "answer": """
                    너의 프로젝트 규모가 커? 그러면 Material UI 를 추천할게. 간단한 걸 원해? 그러면 Chakra UI 를 추천할게. 맞춤화된 디자인을 구현하고 싶어? 그러면 Tailwind CSS 를 추천할게.
                  """,
            },
            {
                "text": "그럼 다음으로 전역관리 라이브러리를 선택해야해. redux, recoil, mobx, context API 중에서 어떤 걸 선택해야할까?",
                "answer": """
                  프로젝트가 대규모이고 복잡한 상태 관리가 필요해? 그러면 redux 를 추천할게.
                  더 세밀한 컴포넌트 수준에서의 상태 관리가 필요해? 그러면 recoil 을 추천할게. 코드가 자동으로 많은 일을 해주길 원해? 그러면 MobX 를 추천할게.
                  간단한 프로젝트야?  그러면 Context API 를 추천할게.
                  """,
            },
        ]
    ]

    example_prompt = ChatPromptTemplate.from_messages(
        [
            ("human", "{text}"),
        ]
    )

    few_shot_prompt = FewShotChatMessagePromptTemplate(
        example_prompt=example_prompt,
        examples=examples,
    )
    final_prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """ You are a coding teacher who knows a lot about apps and web frameworks. You are a friendly coding teacher who helps users select a technology stack or framework to create a service.
                You must answer in Korean and use an informal and friendly tone. When users ask questions, you must always answer concisely.
                User: Next is a css-related library. Which one should I choose among css component, matherial UI, chakra UI, tailwind css, and emotion?
                Answer: Is your project large? Then I would recommend Material UI. You want something simple? Then I would recommend Chakra UI. Want to implement a customized design? Then I would recommend Tailwind CSS.
                You should answer appropriately using concise features and questions such as .
                """,
            ),
            few_shot_prompt,
            ("human", "{text}"),
        ]
    )

    llm = ChatOpenAI(
        temperature=0,  # 창의성 (0.0 ~ 2.0)
        max_tokens=2048,  # 최대 토큰수
        model_name="gpt-4",  # 모델명
        streaming=True,
        callbacks=[StreamingStdOutCallbackHandler()],
    )

    chain = (
        (format_chat_history | final_prompt | llm | StrOutputParser())
            .with_config(
            run_name="ChatBot",
            callbacks=[
                EvaluatorCallbackHandler(
                    evaluators=[
                        ResponseEffectivenessEvaluator(evaluate_response_effectiveness)
                    ]
                )
            ],
        )
    )

    chain = chain.with_types(input_type=ChainInput)
    return chain
