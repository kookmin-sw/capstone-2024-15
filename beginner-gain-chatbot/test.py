from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
import openai
import os

load_dotenv()
# print(openai.__version__)
# print(f"[API KEY]\n{os.environ['OPENAI_API_KEY']}")
# llm = ChatOpenAI(openai_api_key="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")
#
# llm.invoke("how can langsmith help with testing?")
# prompt = ChatPromptTemplate.from_messages([
#     ("system", "You are world class technical documentation writer."),
#     ("user", "{input}")
# ])

# llm = ChatOpenAI(
#     temperature=0.1,
#     max_tokens=1024,
#     model_name="gpt-4",
# )

# test_question = "대한민국 수도는 어디인가요?"
# print(f"[답변]: {llm.invoke(test_question)}")

# prompt template
# template = "{country}의 수도는 뭐야?"
# template 완성
# prompt = PromptTemplate.from_template(template=template)
# print(prompt)

# 연결된 체인 객체 생성
# llm_chain = LLMChain(prompt=prompt, llm=llm)
# print(llm_chain.invoke({"country": "대한민국"}))
# print(llm_chain.invoke({"country": "캐나다"}))

# apply() 여러 개의 입력에 대한 처리를 한 번에 수행할 수 있음
# input_list = [{"country": "호주"}, {"country": "중국"}, {"country": "네덜란드"}]
# response = llm_chain.apply(input_list)
# print(response[2]["text"])
# result = llm_chain.apply(input_list)
# for res in result:
#     print(res["text"].strip())

# generate() 는 문자열 대신에 LLMResult 를 반환하는 점을 제외하고는 apply 와 유사.
# input_list = [{"country": "호주"}, {"country": "중국"}, {"country": "네덜란드"}]
# generated_result = llm_chain.generate(input_list)
# # print(generated_result)
# print(generated_result.llm_output)

# 2개 이상의 변수를 적용하여 템플릿을 생성할 수 있음
# 질문 템플릿 형식 정의
# template = "{area1} 와 {area2} 의 시차는 몇시간이야? "
# prompt = PromptTemplate.from_template(template)
# # print(prompt)
# llm_chain = LLMChain(prompt=prompt, llm=llm)
# # print(llm_chain.invoke({"area1": "서울", "area2": "파리"}))
#
# input_list = [
#     {"area1": "파리", "area2": "뉴욕"},
#     {"area1": "서울", "area2": "하와이"},
#     {"area1": "켄버라", "area2": "베이징"}
# ]
# result = llm_chain.apply(input_list)
# for res in result:
#     print(res["text"].strip())

# streaming
# llm = ChatOpenAI(
#     temperature=0,
#     max_tokens=2048,
#     model_name="gpt-4",
#     streaming=True,
#     callbacks=[StreamingStdOutCallbackHandler()],
# )
# question = "대한민국에 대해서 100자내외로 최대한 상세히 알려줘"
# response = llm.invoke(question)

# template = "{country}의 수도는 어디인가요?"
# prompt_template = PromptTemplate.from_template(template)
#
# prompt = prompt_template.format(country="대한민국")
# prompt = prompt_template.format(country="미국")

# model = ChatOpenAI(
#     model="gpt-4",
#     max_tokens=2048,
#     temperature=0.1,
# )
# output = StrOutputParser()

# chain = prompt | model | output_parser
# template = """
# 당신은 친절하게 답변해 주는 친절봇입니다. 사용자의 질문에 [FORMAT] 맞추어 답변해 주세요.
# 답변은 항상 한글로 작성해 주세요.
# 질문:
# {question}에 대하여 설명해 주세요.
#
# FORMAT:
# - 개요:
# - 예시:
# - 출처:
# """
# template = """
# 당신은 영어를 가르치는 10년차 영어 선생님입니다. 상황에 [FORMAT] 에 영어회화를 작성해주세요.
# 상황:
# {question}
#
# FORMAT:
# - 영어 회화:
# - 한글 해석:
# """

# prompt = PromptTemplate.from_template(template)

model = ChatOpenAI(model="gpt-4-turbo-preview")
output_parser = StrOutputParser()
# 사용자 입력은 프롬프트 템플릿으로 전달되고, 그런 다음 프롬프트 템플릿 출력은 모델로 전달되며, 그 다음 모델 출력은 출력 파서로 전달됨.
# chain = prompt | model | output_parser

# print(chain.invoke({"question": "저는 식당에 가서 음식을 주문하고 싶어요. "}))
# print(chain.invoke({"question": "미국에서 피자 주문"}))


prompt = PromptTemplate.from_template("{topic}에 대해 쉽게 설명해주세요. ")
input_ = {"topic": "양자역학"}
prompt.invoke(input_)
print((prompt | model | output_parser).invoke(input_))
