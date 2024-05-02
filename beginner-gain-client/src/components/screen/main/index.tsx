import React from 'react';

import MainTitle from 'public/assets/svg/beginnergain-logo-big.svg';
import ArrowButton from "@/components/internal/common/ArrowButton";
import Blur from 'public/assets/svg/color-blur.svg';
import MousePointer from 'public/assets/svg/mouse-pointer.svg';

import useShowMousePointer from "@/hooks/useShowMousePointer";

const Screen = () => {
  const { isVisible } = useShowMousePointer();

  return (
    <>
      <Blur className="fixed right-0 bottom-0" />
      <MousePointer className={`fixed right-96 bottom-80 ${isVisible ? "visible" : "invisible"}`} />
      <div className="fixed top-40 left-14">
        <MainTitle />
        <p className="text-md font-medium mt-14 mb-9">
          초보개발자들을 위한<br/>
          보일러플레이트(boilerplate) 생성 서비스
        </p>
        <ArrowButton title="프로젝트 생성하기" />
      </div>
    </>
  );
};

export default Screen;
