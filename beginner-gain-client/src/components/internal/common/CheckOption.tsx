import React from 'react';

import CheckedBox from "public/assets/svg/checked-box.svg";
import UncheckedBox from "public/assets/svg/unchecked-box.svg";

export interface ICheckBox {
  title: string;
}

const CheckOption = ({ title }: ICheckBox) => {
  return (
    <div>
      <label className="flex gap-5 items-center">
        <CheckedBox />
        <p className="text-white text-sm font-semibold">{title}</p>
      </label>
    </div>
  );
}

export default CheckOption;
