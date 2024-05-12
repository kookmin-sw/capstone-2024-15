import React from 'react';
import Link from 'next/link';
import router from 'next/router';

import BeginnerGainLogo from 'public/assets/svg/beginnergain-logo-white.svg';
import SmallButton from "@/components/internal/common/SmallButton";
import UserButton from "@/components/internal/common/UserButton";

export interface IHeader {
  isLoggedIn?: boolean;
}

const DarkHeader = ({ isLoggedIn }: IHeader) => {
  return (
    <header className="bg-blue-300 text-purple-100 flex items-center py-8 px-10 justify-between gap-5">
      <Link href={'/'}>
        <BeginnerGainLogo />
      </Link>
      <ul className="w-1/3 flex justify-between min-w-48">
        {/*<li>*/}
        {/*  <Link href={'/'} className="text-xs">*/}
        {/*    MENU*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href={'/'} className="text-xs">*/}
        {/*    MENU*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
      {isLoggedIn ?
        <UserButton color="white" />
        :
        <div className="flex gap-5 w-1/4">
          <SmallButton
            title="로그인"
            color="white"
            isFilled={false}
            onClick={() => router.push("/login")}
          />
          <SmallButton
            title="회원가입"
            color="white"
            isFilled={true}
            onClick={() => router.push("/join")}
          />
        </div>
      }
    </header>
  );
};

export default DarkHeader;
