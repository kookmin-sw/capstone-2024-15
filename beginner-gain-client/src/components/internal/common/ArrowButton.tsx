import React from 'react';

import Arrow from 'public/assets/svg/arrow.svg';

export interface IButton {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ArrowButton = ({ title, onClick }: IButton) => {
  return (
    <>
      <button
        className={
        `relative group h-14 bg-black text-white rounded-full flex items-center justify-between gap-10 px-5 text-xs font-medium
        ${title === "프로젝트 생성하기" && "hover:gap-20 hover:ease-in hover:duration-150 duration-150"}
        `}
        onClick={onClick || null}
      >
        <span>
          {title}
        </span>
        <Arrow />
      </button>
    </>
  );
}

export default ArrowButton;
