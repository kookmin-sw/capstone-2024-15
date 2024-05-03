import QuestionScreen from "public/assets/svg/screen.svg";
import PurpleArrow from "public/assets/svg/arrow-purple.svg";
import ChoiceButton from "@/components/internal/make-boilerplate/ChoiceButton";
import ChatbotButton from "@/components/internal/make-boilerplate/ChatbotButton";
import DarkHeader from "@/components/layout/DarkHeader";
import BackArrow from "@/components/internal/common/BackArrow";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface IAnswerData {
    name: string,
    nextQuestion: number,
}

interface IQuestionData {
    id: number,
    title: string,
    select: IAnswerData[],
}

const data : IQuestionData[] = [
    {
        id: 1,
        title: '어떤 종류의 프로젝트인가요?',
        select: [
            {
                name: '웹',
                nextQuestion: 2,
            },
            {
                name: '앱',
                nextQuestion: 3,
            },
        ]
    },
    {
        id: 2,
        title: '사용할 언어를 선택해주세요',
        select: [
            {
                name: 'javascript',
                nextQuestion: 4,
            },
            {
                name: 'typescript',
                nextQuestion: 4,
            },
        ]
    },
    {
        id: 4,
        title: '사용할 프레임워크를 선택해주세요',
        select: [
            {
                name: 'React.js',
                nextQuestion: 5,
            },
            {
                name: 'Vue.js',
                nextQuestion: 6,
            },
        ]
    },
];

const Screen = () => {
    const [questionData, setQuestionData] = useState<IQuestionData>();

    const router = useRouter();

    useEffect(()=> {
        const fetchQuestionData = () => {
            const filteredData = data.filter((item) => item.id === Number(router.query.question));
            if(filteredData.length > 0) setQuestionData(filteredData[0]);
        }

        fetchQuestionData();
    },[router.query.question])

    const handleAnswerButtonClick = (nextId : number) => {
        router.push(`/make-boilerplate/${nextId}`);
    }

    return (
        <>
          <DarkHeader />
          <div className="flex flex-col bg-blue-300 h-[calc(100vh-54px-4rem)]">
              <div className="pt-6 pl-12">
                  <BackArrow/>
              </div>
              <div className="h-[50vh] w-fit mx-auto relative mt-[6vh]">
                  <div className="absolute h-[50vh] w-fit p-28 w-full">
                      <div className="flex items-center mb-14">
                          <p className="text-sm text-purple-200">{questionData?.id}</p>
                          <PurpleArrow/>
                          <p className="text-md text-white ml-4">{questionData?.title}</p>
                      </div>
                      <div className="flex flex-col flex-wrap gap-4 h-full">
                          {questionData?.select.map((item, index)=>
                              <ChoiceButton
                                  key={index}
                                  order={String.fromCharCode(index + 65)} //순서를 알파벳으로 표시
                                  name={item.name}
                                  onClick={() => handleAnswerButtonClick(item.nextQuestion)}
                              />
                          )}
                      </div>
                  </div>
                  <QuestionScreen width={"100%"} height={"100%"}/>
              </div>
              <div className="flex items-center self-end flex-1 pr-14">
                  <ChatbotButton query={router.query.question || '1'}/>
              </div>
          </div>
        </>
    );
};

export default Screen;