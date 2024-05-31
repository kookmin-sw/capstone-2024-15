import React from 'react';
import router from 'next/router';

import MainTitle from 'public/assets/svg/beginnergain-logo-big.svg';
import ArrowButton from "@/components/internal/common/ArrowButton";
import Blur from 'public/assets/svg/color-blur.svg';
import MainImage from 'public/assets/svg/main-image.svg';

import useShowMousePointer from "@/hooks/useShowMousePointer";
import Header from "@/components/layout/Header";

const Screen = (props: any) => {
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
          <div className="relative text-lg font-medium my-12 text-gray-400">
              <div className="absolute flex gap-7 left-[17rem] -top-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <strong>초보개발자들의 올바른 첫걸음</strong>을<br/>
            도와주는 서비스!
          </div>
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
