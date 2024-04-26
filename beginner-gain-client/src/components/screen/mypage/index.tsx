import React from 'react';

import SmallCard from "@/components/internal/common/SmallCard";
import ArrowButton from "@/components/internal/common/ArrowButton";

const Screen = () => {
  return (
    <>
      <div className="fixed top-40 left-14">
        <p className="text-md font-medium mt-14 mb-9">
          My boilerplate
        </p>
        <ArrowButton title="내 boilerplate 생성하기" />
        <div>
          <SmallCard title="커뮤니티 서비스" />
        </div>
      </div>
    </>
  );
};

export default Screen;
