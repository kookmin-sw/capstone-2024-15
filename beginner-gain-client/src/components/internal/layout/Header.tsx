import React from 'react';
import Link from 'next/link';

import BeginnerGainLogo from 'public/assets/svg/beginnergain-logo-black.svg';
import Button from "src/components/internal/common/Button";

export interface IHeader {
  isVisible: boolean;
}

const Header = ({ isVisible }: IHeader) => {
  return (
    <header className="flex items-center py-8 px-10 justify-between gap-5">
      <Link href={'/'}>
        <BeginnerGainLogo />
      </Link>
      <ul className="w-1/3 flex justify-between min-w-48">
        <li>
          <Link href={'/'}>
            MENU
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            MENU
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            MENU
          </Link>
        </li>
      </ul>
      <ul className="flex gap-5">
        <li>
          <Button title="로그인" />
        </li>
        <li>
          <Button title="회원가입" />
        </li>
      </ul>

    </header>
  );
};

export default Header;
