import React from 'react';
import router from 'next/router';
import styled from "styled-components";

import EmailIcon from 'public/assets/svg/email-complete-icon.svg';
import Divider from "@/components/internal/common/Divider";
import BigButton from "@/components/internal/common/BigButton";
import XIcon from 'public/assets/svg/x-icon.svg';

export interface IEmailModal {
  email: string;
  closeModal: React.MouseEventHandler<HTMLDivElement>;
}

const EmailModel = ({ email, closeModal }: IEmailModal) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <div
      className="flex absolute h-screen w-screen items-center justify-center"
      onClick={closeModal}
    >
      <ModalBox onClick={handleModalClick}>
        <div
          className="absolute top-8 right-8 rounded-full p-1 hover:bg-gray-100"
          onClick={closeModal}
        >
          <XIcon />
        </div>
        <EmailIcon />
        <h3 className="text-md font-bold">메일이 전송되었습니다!</h3>
        <p className="text-sm font-medium">
          <span className="text-purple-400 pr-2">{email}</span>
          로 임시비밀번호를 전송했습니다.<br/>
          메일로 받으신 임시비밀번호를 이용하여 로그인 하신 후<br/>
          비밀번호를 변경해주세요.
        </p>
        <div className="w-11/12">
          <Divider color="gray-200" />
        </div>
        <div className="w-1/2 text-xs font-medium">
          <BigButton
            name="로그인 하러 가기"
            color="purple"
            isFilled={true}
            onClick={() => router.push("/login")}
          />
        </div>
      </ModalBox>
    </div>
  );
};

const ModalBox = styled.div`
  position: relative;
  width: 66%;
  height: 66%;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`

export default EmailModel;
