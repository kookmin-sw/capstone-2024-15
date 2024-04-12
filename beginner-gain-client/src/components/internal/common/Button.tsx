import React from 'react';

export interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  return (
    <>
      <button
        className={`border border-black rounded-full max-w-36 min-w-24 ${title === "회원가입" && "bg-black text-white"}`}
        style={{
          width: '11vw',
          height: '36px',
        }}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
