import React from 'react';

import CheckedBox from "public/assets/svg/checked-box.svg";
import UncheckedBox from "public/assets/svg/unchecked-box.svg";

export interface ICheckBox {
  title: string;
  handleCheckBoxClick: React.MouseEventHandler<HTMLLabelElement>;
  isChecked?: boolean;
}

const CheckOption = ({ title, isChecked, handleCheckBoxClick }: ICheckBox) => {
  return (
    <>
      <label className="flex gap-5 items-center" onClick={handleCheckBoxClick}>
        {isChecked ? <CheckedBox /> : <UncheckedBox />}
        <p className="text-white text-sm font-semibold">{title}</p>
      </label>
    </>
  );
}

export default CheckOption;
