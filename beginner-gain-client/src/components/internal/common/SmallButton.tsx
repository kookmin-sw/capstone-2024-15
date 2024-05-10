import React from 'react';

export interface IButton {
  title: string;
  color?: string;
  isFilled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

const SmallButton = ({ title, color, isFilled, onClick, isDisabled }: IButton) => {
  if (color === "white") {
    return (
      <>
        <button
          className={
          `border border-purple-100 rounded-full max-w-48 min-w-24 text-xs duration-300 disabled:bg-purple-100/20
          ${isFilled ? "bg-purple-100 text-blue-300 hover:bg-purple-200 hover:border-purple-200" : "text-purple-100 hover:bg-white hover:text-blue-300"}`
        }
          style={{
            width: `${title === "다운로드" ? '192px' : '11vw'}`,
            height: '40px',
          }}
          onClick={onClick || void(0)}
          disabled={isDisabled || false}
        >
          {title}
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className={
        `border border-black rounded-full max-w-48 min-w-24 text-xs duration-300 disabled:bg-purple-100/20
        ${isFilled ? "bg-black text-white hover:bg-gray-500 hover:border-gray-500" : "hover:bg-black hover:text-white"}`
      }
        style={{
          width: `${title === "다운로드" ? '192px' : '11vw'}`,
          height: '40px',
        }}
        onClick={onClick || void(0)}
        disabled={isDisabled || false}
      >
        {title}
      </button>
    </>
  );
}

export default SmallButton;
