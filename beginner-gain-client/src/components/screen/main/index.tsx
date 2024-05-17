import React from 'react';
import router from 'next/router';

import MainTitle from 'public/assets/svg/beginnergain-logo-big.svg';
import ArrowButton from "@/components/internal/common/ArrowButton";
import Blur from 'public/assets/svg/color-blur.svg';
import MainImage from 'public/assets/svg/main-image.svg';

import useShowMousePointer from "@/hooks/useShowMousePointer";
import Header from "@/components/layout/Header";

const Screen = (props) => {
  const { isVisible } = useShowMousePointer();

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn}/>
      <Blur className="fixed right-0 bottom-0 -z-50" />
      <div className={`absolute right-44 bottom-36 w-[36vw] ${isVisible ? "visible" : "invisible"}`}>
        <MainImage width="100%" height="100%"/>
      </div>
      <div className="h-[calc(100vh-54px-4rem)] flex flex-col justify-center">
        <div className="ml-16 mb-10">
          <div className="w-2/5">
            <MainTitle width="100%" height="100%"/>
          </div>
          <p className="text-sm font-medium mt-10 mb-10">
            초보개발자들을 위한<br/>
            보일러플레이트(boilerplate) 생성 서비스
          </p>
          <ArrowButton
            title="프로젝트 생성하기"
            onClick={() => router.push("/make-boilerplate/project-name")}
          />
        </div>
      </div>
    </>
  );
};

export default Screen;
