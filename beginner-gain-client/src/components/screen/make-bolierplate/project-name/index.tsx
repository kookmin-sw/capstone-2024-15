import BackArrow from "../../../../../public/assets/svg/arrow-white.svg";
import BigButton from "@/components/internal/common/BigButton";
import UnderlineInput from "@/components/internal/make-boilerplate/UnderlineInput";
import {useState} from "react";

const Screen = () => {
    const [name, setName] = useState<string>('');
    return (
        <div className="flex flex-col items-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
            <div className="pt-6 pl-12 self-start">
                <BackArrow/>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-16 w-1/3">
                <p className="text-white text-lg font-semibold self-center">프로젝트 명을 입력해주세요</p>
                <UnderlineInput value={name} setValue={setName} />
            </div>
            <div className="w-1/3 mb-[10vh]">
                <BigButton name="다음" color="white" isFilled={true} />
            </div>
        </div>
    );
};

export default Screen;