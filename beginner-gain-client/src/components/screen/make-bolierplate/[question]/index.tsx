import QuestionScreen from "public/assets/svg/screen.svg";
import PurpleArrow from "public/assets/svg/arrow-purple.svg";
import ChoiceButton from "@/components/internal/make-boilerplate/ChoiceButton";
import ChatbotButton from "@/components/internal/make-boilerplate/ChatbotButton";
import DarkHeader from "@/components/layout/DarkHeader";
import BackArrow from "@/components/internal/common/BackArrow";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import MiniModal from "@/components/internal/modal/MiniModal";
import {useQuery} from "react-query";
import {getQuestion} from "@/server/question";
import {useSetRecoilState} from "recoil";
import {projectDataState} from "@/recoil/projectDataState";
import {QuestionSelected} from "@/types/Project";
import Chat from "@/components/screen/chat";
import Loading from "@/components/internal/common/Loading";
import {IQuestionData, QuestionType} from "@/types/Question";

interface IAnswerButton {
    nextId: number,
    answerId: number,
    questionType: QuestionType | null,
}

const Screen = (props : any) => {
    const [questionData, setQuestionData] = useState<IQuestionData>();
    const setProjectData = useSetRecoilState(projectDataState);

    // 준비중 모달 open 여부
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const router = useRouter();

    const questionId = router.query.question || '1';
    const { data, isLoading } = useQuery({
        queryKey: ['question', questionId],
        queryFn: () => getQuestion({questionId})
    });

    useEffect(()=> {
        if(data?.data) {
            setQuestionData(data.data);
        }
    },[data]);

    // todo: 다음 질문이 준비되어 있지 않은 서비스면 모달 띄우기

    const handleAnswerButtonClick = ({ nextId, answerId, questionType }: IAnswerButton) => {
        if (questionType === null) { // 다음 질문이 없을 경우 준비중 모달 띄우기
            setIsOpenModal(true);
        } else {
            if (questionData) {
                // 현재 질문, 답변 recoil 에 저장
                const questionInfo: QuestionSelected = {
                    question: questionData?.id.toString(),
                    answer: answerId.toString(),
                };
                setProjectData((prev) => ({
                    ...prev,
                    select: [...prev.select, questionInfo]
                }));

                // question type에 따라 경로 이동
                if (questionType === QuestionType.그룹질문) {
                    router.push({
                        pathname: '/make-boilerplate/etc',
                        query: {questionId: nextId},
                    });
                } else {
                    router.push(`/make-boilerplate/${nextId}`);
                }
            }
        }
    }

    return (
        <>
          <DarkHeader isLoggedIn={props.isLoggedIn} />
            {isLoading ?
                <Loading />
                :
                <>
                    <div className="flex flex-col bg-blue-300 h-[calc(100vh-54px-4rem)]">
                        <div className="pt-6 pl-12">
                            <BackArrow/>
                        </div>
                        <div className="h-[50vh] w-fit mx-auto relative mt-[6vh]">
                            <div className="absolute h-[50vh] w-fit p-28 w-full">
                                <div className="flex items-center mb-14">
                                    <p className="text-sm text-purple-200">{questionData?.id}</p>
                                    <PurpleArrow/>
                                    <p className="text-md text-white ml-4">{questionData?.content}</p>
                                </div>
                                <div className="flex flex-col flex-wrap gap-4 h-full">
                                    {questionData?.answers.map((item, index) =>
                                        <ChoiceButton
                                            key={index}
                                            order={String.fromCharCode(index + 65)} //순서를 알파벳으로 표시
                                            name={item.name}
                                            onClick={() =>
                                                handleAnswerButtonClick({
                                                    nextId: item.nextQuestionId,
                                                    answerId: item.id,
                                                    questionType: item.nextQuestionType,
                                                })}
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
                    {
                        isOpenModal &&
                        <MiniModal
                            title="해당 서비스는 준비중입니다"
                            button="확인"
                            handleButtonClick={() => setIsOpenModal(false)}
                            content="추후 버전에서 업데이트 될 예정입니다"/>
                    }
                    <Chat />
                </>}
        </>
    );
};

export default Screen;