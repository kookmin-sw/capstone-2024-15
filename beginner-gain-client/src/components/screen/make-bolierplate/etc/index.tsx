import {useRouter} from 'next/router';

import DarkHeader from "@/components/layout/DarkHeader";
import BackArrow from "@/components/internal/common/BackArrow";
import SmallButton from "@/components/internal/common/SmallButton";
import Divider from "@/components/internal/common/Divider";
import CheckOption from "@/components/internal/common/CheckOption";
import ChatbotButton from "@/components/internal/make-boilerplate/ChatbotButton";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {projectDataState} from "@/recoil/projectDataState";
import {useMutation, useQuery} from "react-query";
import {IMakeProject, IMakeProjectResponse} from "@/types/Project";
import {makeProject} from "@/server/project";
import {AxiosResponse} from "axios";
import Loading from "@/components/internal/common/Loading";
import Chat from "@/components/screen/chat";
import {downloadUrlState} from "@/recoil/downloadUrlState";
import {getQuestionGroup} from "@/server/question";
import {useEffect, useState} from "react";
import {IQuestionGroupData} from "@/types/Question";

interface ICheckedInfo {
  question: number,
  answer: number,
}

const Screen = (props : any) => {
  const router = useRouter();
  const projectData = useRecoilValue(projectDataState);
  const setDownloadUrl = useSetRecoilState(downloadUrlState);

  const questionId = router.query.questionId || "1";

  const [questionGroupData, setQuestionGroupData] = useState<IQuestionGroupData>();
  const [checkedItems, setCheckedItems] = useState<Record<number, number>>({});

  // 질문 그룹 가져오기
  const { data, isLoading } = useQuery({
    queryKey: ['questionGroup', questionId],
    queryFn: () => getQuestionGroup({questionId}),
  });

  useEffect(()=> {
    if(data?.data) {
      setQuestionGroupData(data.data);
    }
  },[data]);

  // 프로젝트 생성하기
  const makeProjectMutation = useMutation({
    mutationFn: (projectData : IMakeProject) => {
      return makeProject(projectData);
    },
    onError(err) {
      console.log(err);
    },
    onSuccess(data: AxiosResponse) {
      const projectData: IMakeProjectResponse = data.data;
      setDownloadUrl(projectData.filePath);
      router.push("/make-boilerplate/complete");
    },
  });

  const handleCheckItem = ({question, answer} : ICheckedInfo) => {
    // 동일한 checkbox를 한번더 눌렀을 경우 해당 key-value 제거
    if(checkedItems[question] === answer) {
      setCheckedItems((prevItems) => {
        const { [question]: _, ...newItems} = prevItems;
        return newItems;
      });
    } else {
      // 해당 checkbox에 대한 key-value 추가
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [question]: answer
      }));
    }
  };

  const handleSubmitButton = async () => {
    const questionLists = Object.entries(checkedItems).map((item) => {
      return {
        question: item[0].toString(), // question id mapping
        answer: item[1].toString(), // answer id mapping
      }
    });
    const submitData: IMakeProject = {
      ...projectData,
      select: [...projectData.select, ...questionLists],
    }
    makeProjectMutation.mutate(submitData);
  };

  return (
      <>
        <DarkHeader isLoggedIn={props.isLoggedIn} />
        {makeProjectMutation.isLoading ?
            <Loading text={"boilerplate를 생성중입니다"}/>
            :
            isLoading ?
            <Loading />
            :
            <>
              <div className="flex flex-col items-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
                <div className="pt-6 pl-12 self-start">
                  <BackArrow/>
                </div>
                <div className="flex-1 flex flex-col w-9/12 gap-12">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <p className="text-md text-white font-medium">
                        추가할 항목을 선택하세요
                      </p>
                      <div className="w-1/5">
                        <SmallButton
                          title="boilerplate 생성"
                          color="white"
                          isFilled={true}
                          onClick={handleSubmitButton}
                        />
                      </div>
                    </div>
                    <Divider color="gray-200" />
                  </div>
                  <div className="h-3/5 flex flex-col justify-between">
                    {questionGroupData?.questions.map((question, i) => (
                        <div key={i} className="flex flex-col gap-3">
                          <p className="text-md text-white font-medium">
                            {question.content}
                          </p>
                          <div className="flex gap-20">
                            {question?.answers.map((answer, i) => (
                                <CheckOption
                                    key={i}
                                    title={answer.name}
                                    handleCheckBoxClick={() =>
                                        handleCheckItem({
                                          question: question.id,
                                          answer: answer.id,
                                          })
                                      }
                                    isChecked={checkedItems[question.id] === answer.id}/>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="fixed bottom-12 right-12">
                  <ChatbotButton query={'etc'}/>
                </div>
              </div>
            </>
        }
        <Chat/>
      </>
  );
};

export default Screen;