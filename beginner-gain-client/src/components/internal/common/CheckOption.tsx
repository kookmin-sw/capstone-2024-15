import React from 'react';
import { useState } from 'react';

import CheckedBox from "public/assets/svg/checked-box.svg";
import UncheckedBox from "public/assets/svg/unchecked-box.svg";

export interface ICheckBox {
  title: string;
  isChecked?: boolean;
}

const CheckOption = ({ title }: ICheckBox) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label className="flex gap-5 items-center" onClick={() => setIsChecked(!isChecked)}>
        {isChecked ? <CheckedBox /> : <UncheckedBox />}
        <p className="text-white text-sm font-semibold">{title}</p>
      </label>
    </div>
  );
}

export default CheckOption;
