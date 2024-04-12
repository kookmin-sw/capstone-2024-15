import React from 'react';
import Link from 'next/link';

import BeginnerGainLogo from 'public/assets/svg/beginnergain-logo-black.svg';
import Button from "src/components/atom/Button";

export interface IHeader {
  isVisible: boolean;
}

const Header = ({ isVisible }: IHeader) => {
  return (
    <header className="flex">
      <Link href={'/'}>
        <BeginnerGainLogo />
      </Link>
      <ul className="flex">
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
      <Button title="로그인" />
      <Button title="회원가입" />
    </header>
  );
};

export default Header;
