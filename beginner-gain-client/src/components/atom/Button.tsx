import React from 'react';

export interface IButton {
  title: string;
}

const Button = ({ title }: IButton) => {
  return (
    <>
      <button
        className="border rounded-full"
        style={{
          width: '11%',
          height: '38px',
        }}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
