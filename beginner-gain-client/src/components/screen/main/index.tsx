import React from 'react';
import Header from '@/components/internal/layout/Header';

const Screen = () => {
  return (
    <>
      <Header isVisible={true}/>
      <h1 className="text-red-500 underline">
        메인페이지
      </h1>
    </>
  );
};

export default Screen;
