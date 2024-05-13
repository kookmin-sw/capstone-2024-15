import React, { useState } from "react";
import { useMutation } from "react-query";

import Input from "@/components/internal/common/Input";
import BigButton from "@/components/internal/common/BigButton";
import Header from "@/components/layout/Header";
import EmailModal from "@/components/internal/modal/EmailModal";
import MiniModal from "@/components/internal/modal/MiniModal";

import { emailValid, initPassword } from "@/server/user";
import { AxiosResponse } from "axios";
import {emailCheck} from "@/assets/utils";

const Screen = () => {
  const [email, setEmail] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openMiniModal, setOpenMiniModal] = useState<boolean>(false);
  const [isRightEmail, setIsRightEmail] = useState<boolean>(true);

  const isButtonActive = Boolean(email);

  const emailValidMutation = useMutation({
    mutationFn: (email : string) => {
      return emailValid(email);
    },
    onSuccess(data : AxiosResponse) {
      const result = data.data.isAvailable;
      setIsRightEmail(!result);
    },
    onError(err) {
    },
  });

  const initPasswordMutation = useMutation({
    mutationFn: (email: string) => {
      return initPassword(email);
    },
    onError(err) {
      setOpenMiniModal(true);
    },
    onSuccess(data: AxiosResponse) {
      setOpenModal(true);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    emailValidMutation.mutate(e.target.value);
  };

  const handleClickSendButton = async () => {
    initPasswordMutation.mutate(email);
  };

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
                handleInputChange={handleInputChange}
              />
              {!isRightEmail &&
                <p className="text-xxs text-red-600 mt-1">
                  회원 가입 시 사용한 이메일을 입력하세요.
                </p>
              }
            </div>
            <div className="text-xs font-medium">
              <BigButton
                name="이메일 보내기"
                color={'purple'}
                isFilled={true}
                isDisabled={!isButtonActive}
                onClick={() => handleClickSendButton()}
              />
            </div>
          </div>
          <div className={`w-4/12 ml-[14vw]`}>
            <img src="https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/rocket-illust.svg" alt="rocket-illust"/>
          </div>
        </div>
      </div>
      {openModal &&
        <EmailModal
          email={email}
          closeModal={() => setOpenModal(false)}
        />
      }
      {openMiniModal &&
        <MiniModal
          title="이메일 전송에 실패했습니다."
          content="이메일을 확인한 뒤, 다시 시도해 주세요."
          button="확인"
          handleButtonClick={() => setOpenMiniModal(false)}
        />
      }
    </div>
  );
};

export default Screen;