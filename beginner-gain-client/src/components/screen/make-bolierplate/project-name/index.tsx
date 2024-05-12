import BigButton from "@/components/internal/common/BigButton";
import UnderlineInput from "@/components/internal/make-boilerplate/UnderlineInput";
import {useState} from "react";
import DarkHeader from "@/components/layout/DarkHeader";
import {useRouter} from "next/router";
import BackArrow from "@/components/internal/common/BackArrow";
import {useSetRecoilState} from "recoil";
import {projectDataState} from "@/recoil/projectDataState";

const Screen = (props) => {
    const [name, setName] = useState<string>('');
    const setProjectData = useSetRecoilState(projectDataState);

    const router = useRouter();
    const handleNextButtonClick = () => {
        // 프로젝트명 recoil 에 저장
        if(name) {
            setProjectData((prev) => ({
                ...prev,
                name,
            }));
        }
        // 무조건 id가 1인 질문으로 넘어가도록
        router.push('/make-boilerplate/1');
    }

    return (
      <>
        <DarkHeader isLoggedIn={props.isLoggedIn} />
        <div className="flex flex-col items-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
          <div className="pt-6 pl-12 self-start">
            <BackArrow/>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-16 w-1/3">
            <p className="text-white text-lg font-semibold self-center">프로젝트 명을 입력해주세요</p>
            <UnderlineInput value={name} setValue={setName} />
          </div>
          <div className="w-1/3 mb-[10vh]">
            <BigButton
                name="다음"
                color="white"
                isFilled={true}
                onClick={handleNextButtonClick}
                isDisabled={!name}/>
          </div>
        </div>
      </>
    );
};

export default Screen;