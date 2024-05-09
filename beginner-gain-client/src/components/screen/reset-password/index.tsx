import { useState } from "react";

import Input from "@/components/internal/common/Input";
import BigButton from "@/components/internal/common/BigButton";
import Header from "@/components/layout/Header";
import useShowIllust from "@/hooks/useShowIllust";
import EmailModal from "@/components/internal/modal/EmailModal";

const Screen = () => {
  const { isVisible } = useShowIllust();
  const [email, setEmail] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col static">
      <Header />
      <div className="flex px-[10vw] h-[calc(100vh-54px-4rem)] items-center justify-center">
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
            <div className="text-xs font-medium">
              <BigButton
                name="이메일 보내기"
                color={'purple'}
                isFilled={true}
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
          <div className={`w-4/12 ml-[14vw]`}>
            <img src="https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/rocket-illust.svg" />
          </div>
        </div>
      </div>
      {openModal &&
        <EmailModal email={"jeong4530@gmail.com"} closeModal={() => setOpenModal(false)} />
      }
    </div>
  );
};

export default Screen;