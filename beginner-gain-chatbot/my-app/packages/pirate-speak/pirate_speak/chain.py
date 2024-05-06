from langchain_community.chat_models import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.prompts.few_shot import FewShotPromptTemplate
from langchain.prompts.prompt import PromptTemplate
from langchain.prompts import ChatPromptTemplate, FewShotChatMessagePromptTemplate
import os
from dotenv import load_dotenv

load_dotenv()
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

# _prompt = ChatPromptTemplate.from_messages(
#     [
#         (
#             "system",
#             # "Translate user input into pirate speak",
#             # "You are an AI Coding Teacher. You must answer in Korean. "
#             """
#             You are a coding teacher who knows a lot about apps and web frameworks.
#             You are a friendly coding teacher who helps users select a technology stack or framework to create a service.
#             You must answer in Korean and use an informal and friendly tone.
#             When users ask questions, you must always answer concisely.
#             User: Next is a css-related library. Which one should I choose among css component, matherial UI, chakra UI, tailwind css, and emotion?
#             Answer: Is your project large? Then I would recommend Material UI. You want something simple? Then I would recommend Chakra UI. Want to implement a customized design? Then I would recommend Tailwind CSS.
#             You should answer appropriately using concise features and questions such as .
#             """
#         ),
#         MessagesPlaceholder("chat_history"),
#         ("human", "{text}"),
#     ]
# )
example_prompt = ChatPromptTemplate.from_messages(
    [
        ("human", "{text}"),
        # ("ai", "{answer}"),
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
# _model = ChatOpenAI()
llm = ChatOpenAI(
    temperature=0,  # 창의성 (0.0 ~ 2.0)
    max_tokens=2048,  # 최대 토큰수
    model_name="gpt-3.5-turbo",  # 모델명
)

chain = final_prompt | llm

