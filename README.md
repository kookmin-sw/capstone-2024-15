# 비기너게인(BeginnerGain) : 초보개발자들을 위한 보일러플레이트(boilerplate) 코드 생성 서비스
<img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/8544ff16-a1dc-43f5-bd69-44949c60b83c" width="800" height="550">


## 1. 프로젝트 소개🧐
### 1) Abstract
비기너게인(BeginnerGain)은 몇번의 클릭만으로 개발자들이 프로젝트의 기본 구조를 세팅할 수 있는 환경을 제공합니다. 특정 프레임워크에 대한 지식이 없는 초보 개발자들의 입장을 고려하여 간편하고 직관적인 UI와 플로우로 이루어져 있으며, 인공지능을 이용한 대화형 챗봇을 통해 사용자의 선택을 돕습니다.


BeginnerGain provides an environment where developers can set up the basic structure of a project with just a few clicks. It features a simple and intuitive UI and flow, taking into account the perspective of novice developers who may not have specific framework knowledge. Additionally, it assists users through an interactive chatbot powered by artificial intelligence.

### 2) 프로젝트 개발 배경
학과 동아리에서 프로젝트를 하면서 개발 경험이 많지 않은 팀원들은 처음 쓰는 프레임워크나 언어로 프로젝트를 진행하는 것에 어려움이 있다는 것을 느꼈습니다. 챗지피티를 이용하거나 구글 서치를 통해 많은 정보를 얻을 수는 있지만 초보 개발자의 경우 그 정보가 올바른 정보인지 구분하기 쉽지 않습니다. 특히 기본적인 프로젝트 구조를 세팅할 때 어떤 방식을 이용해야 하는지 헤매는 경우가 많았습니다. 따라서 저희는 초보개발자들의 이러한 어려움에 집중하여 특정 언어나 프레임워크를 처음 접하는 개발자도 효율적이고 올바르게 프로젝트 구조를 세팅할 수 있도록 돕는 서비스를 개발하고자 합니다.

### 3) 프로젝트 목적 
초보 개발자들이 프로젝트를 시작할 때, 자신이 원하는 기술 스택으로 프로젝트를 셋팅하는 데에 어려움을 느낍니다. 그래서 저희는 이러한 문제점을 해결하기 위해 AI 챗봇을 도입하여 사용자들의 선택지를 좁혀가며 프로젝트 구조를 셋팅할 수 있도록 돕는 것을 서비스 개발을 목적으로 하였습니다.

### 4) 핵심 기능
1. 보일러플레이트 제공
2. 기술 스택 추천 챗봇 ‘비기닝’

### 5) 기대효과 
새로운 프로젝트를 시작할 때 코딩 기초를 공부하고 처음 개발을 하는 초보 개발자들을 위해 기본적인 프로젝트 구조를 제공해주고, 자주 사용하는 보일러플레이트 코드를 미리 구현하고 설명과 함께 제공해줌으로써 초보 개발자들의 개발 시간 단축에 도움을 주고, 개발 중 일관성을 유지하고, 코드의 가독성을 높이고 유지관리를 수월하게 할 수 있도록 도울 수 있습니다.

## 2. 기술 스택🛠️
### Frontend 
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=oracle&logoColor=white">
### Backend
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=java&logoColor=white"> ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)


### AI 
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)


## 3. 시스템 아키텍처💡
<img width="800" alt="image" src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/dab6d59e-9f47-4e3b-904e-9d1c0727cba6">



## 4. 소개 영상📀
https://github.com/kookmin-sw/capstone-2024-15/assets/66466139/3ec68729-0f37-43a9-a992-8e8ddc1bc2b5



## 5. 사용법💻

**BeginnerGain 서비스 URL** : https://www.beginergain.com/

### 1) 접속 방법
- 화면 우측 상단의 [회원가입] 버튼을 클릭한다.
- 필수정보인 ‘사용자 이메일', ‘비밀번호’, ‘사용자 이름’을 입력하고 하단의 [회원가입]버튼을 클릭하여 회원가입한다.
- 가입한 이메일, 비밀번호를 입력하여 로그인한다.

### 2) 보일러플레이트 생성
- 시작 페이지 좌측 하단의 ‘프로젝트 생성하기' 버튼을 클릭한다.
- 프로젝트 이름을 입력하고 개발 목적을 묻는 질문에 응답하며 보일러 플레이트를 생성한다. 어떤 응답을 선택해야할 지 어려운 경우에는 우측 하단의 ‘챗봇과 질문하기'를 활용하여 챗봇에게 질문을 하며 도움을 받는다.
- 생성된 보일러 플레이트를 ‘my boilerplate’에서 다운로드 받아서 사용한다.

**GPT store 비기닝  URL** : https://chatgpt.com/g/g-vRGIlYFpU-bigining


## 6. 팀 소개🧑‍🧑‍🧒‍🧒
<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/heegu123">
              <img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/0d4f222f-7ee1-4282-9e24-97b4c5889406" width="100">
              <br />
              <b>강희구</b>
            </a> 
            <br/>
              ****3023
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/sunwoopia">
              <img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/2ea3f4dd-b953-478d-a05b-02315a9ac238" width="100">
              <br />
              <b>김선우</b>
            </a> 
                       <br/>
              ****1594
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/JisuuungKim">
              <img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/e482f7a4-87d7-4aaa-9a71-2f8d7067cf5f" width="100">
              <br />
              <b>김지성</b>
            </a>
                       <br/>
              ****3050
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/gyeongseoMin">
              <img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/c89cb99c-ed1e-4a8d-829c-f884e6868f02" width="100">
              <br />
              <b>민경서</b>
            </a>
                       <br/>
              ****3060
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/i-soj-ng">
              <img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/a4ae609c-411f-4f52-923a-914f10bebf0b" width="100">
              <br />
              <b>이소정</b>
            </a> 
                       <br/>
              ****3117
        </td>
    </tr>
    <tr align="center">
        <td>
            Backend
        </td>
        <td>
            Backend
        </td>
        <td>
            Frontend, Design
        </td>
                <td>
            Prompt Engineering
        </td>
                <td>
            Frontend
        </td>
    </tr>
</table>

## 7. 포스터📸
<img src="https://github.com/kookmin-sw/capstone-2024-15/assets/67200721/aff3d1e3-eed1-4f41-aa77-f7125d4b4044" width="520" height="700">

## 8. 소개 자료📎
<a href="https://drive.google.com/file/d/1Pauf7xWhJ0fevqsi5CrV66KH-04LEPWV/view?usp=sharing">
    중간 발표
</a>
<br>
<a href="https://docs.google.com/document/d/1pM792SXwyjEXKYPLDwY84HtbtAfX9-4n/edit?usp=sharing&ouid=105251384589105234538&rtpof=true&sd=true
">
    중간 보고서
</a>
<br>
<a href="https://drive.google.com/file/d/11OpLOFTizhXKs3u9HXxhUOYDIHf6LZ6u/view?usp=drive_link">
    최종 발표 자료
</a>
<br>
<a href="https://docs.google.com/document/d/14DPvr-uR6SugBjG2VXJs2A5kTcS7bqJM2HpDkIozWek/edit?usp=sharing">
    수행 결과 보고서
</a>
<br>
