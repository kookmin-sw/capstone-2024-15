import MainImage from "public/assets/svg/rocket-illust.svg";
import Input from "@/components/internal/common/Input";
import BigButton from "@/components/internal/common/BigButton";
import { useState } from "react";
import Header from "@/components/layout/Header";
import useShowIllust from "@/hooks/useShowIllust";

const Screen = () => {
  const [email, setEmail] = useState<string>('');
  const { isVisible } = useShowIllust();

  return (
    <>
      <Header />
      <div className="flex px-[10vw] h-[calc(100vh-54px-4rem)] items-center">
        <div className="flex w-full pb-20">
          <div className="flex-1 flex flex-col pr-20 justify-center">
            <h2 className="font-en text-lg font-semibold mb-[12vh]">
              Reset Password
            </h2>
            <div className="mb-8">
              <Input
                placeholder={"이메일을 입력하세요"}
                value={email}
                setValue={setEmail}
              />
            </div>
            <BigButton
              name="이메일 보내기"
              color={'purple'}
              isFilled={true}
            />
          </div>
          <div className={`w-4/12 ml-[14vw]`}>
            <MainImage className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;