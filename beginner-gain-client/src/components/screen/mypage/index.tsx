import React from 'react';

import SmallCard from "@/components/internal/common/SmallCard";
import ArrowButton from "@/components/internal/common/ArrowButton";
import Divider from "@/components/internal/common/Divider";
import Header from "@/components/layout/Header";

const Screen = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col">
        <div className="px-20 flex flex-col">
          <p className="mt-5 text-sm font-medium text-gray-400">
            My Boilerplate
          </p>
          <Divider />
          <div className="self-end">
            <ArrowButton title="내 boilerplate 생성하기" />
          </div>
          <div
            className="mt-14 grid gap-10"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
            }}
          >
            {/*API 바인딩 시 map 함수로 수정할 예정입니다~*/}
            <SmallCard title="커뮤니티 서비스1" />
            <SmallCard title="커뮤니티 서비스2" />
            <SmallCard title="커뮤니티 서비스3" />
            <SmallCard title="커뮤니티 서비스4" />
            <SmallCard title="커뮤니티 서비스5" />
            <SmallCard title="커뮤니티 서비스6" />
            <SmallCard title="커뮤니티 서비스7" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Screen;
