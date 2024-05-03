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
        className="bg-black text-white rounded-full w-72 flex items-center justify-between px-5 text-xs font-medium"
        style={{
          height: '48px',
        }}
        onClick={onClick || null}
      >
        {title}
        <Arrow />
      </button>
    </>
  );
}

export default ArrowButton;
