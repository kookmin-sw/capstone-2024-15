import React from 'react';

export interface IButton {
  title: string;
}

const SmallButton = ({ title }: IButton) => {
  return (
    <>
      <button
        className={`border border-black rounded-full max-w-48 min-w-24 text-xs ${title === "회원가입" && "bg-black text-white"}`}
        style={{
          width: `${title === "다운로드" ? '192px' : '11vw'}`,
          height: '40px',
        }}
      >
        {title}
      </button>
    </>
  );
}

export default SmallButton;
