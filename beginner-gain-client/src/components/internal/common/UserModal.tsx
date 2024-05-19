import React from 'react';
import router from 'next/router';
import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "src/recoil/userState";
import { deleteCookie } from "cookies-next";

import UserImage from 'public/assets/svg/user-default-image.svg';
import FolderIcon from 'public/assets/svg/folder-icon.svg';
import LogoutIcon from 'public/assets/svg/logout-icon.svg';

export interface IUserModal {
  color: string;
}

const UserModal = () => {
  const userInfo = useRecoilValue(userState);
  const [user, setUser] = useRecoilState(userState);

  if (!userInfo) return;

  const logOut = () => {
    deleteCookie('accessId');
    setUser({
      id: '',
      email: '',
      name: '',
    });
    window.location.href = '/login';
  }

  return (
    <UserBox>
      <div className="flex flex-col h-2/3 justify-center items-center border-b border-gray-200 text-xxs">
        <UserImage className="mb-2" />
        <p>{userInfo.name}</p>
        <p>{userInfo.email}</p>
      </div>
      <div className="flex flex-col h-1/3 text-xxs">
        <button
          className="flex p-5 h-1/2 items-center gap-2 hover:bg-gray-100 hover:bg-opacity-60"
          onClick={() => router.push("/my-boilerplate")}
        >
          <FolderIcon />
          <p>my boilerplate</p>
        </button>
        <button
          className="flex p-5 h-1/2 items-center gap-2 hover:bg-gray-100 hover:bg-opacity-60"
          onClick={() => logOut()}
        >
          <LogoutIcon />
          <p>Log out</p>
        </button>
      </div>
    </UserBox>
  );
}

const UserBox = styled.div`
  position: fixed;
  top: 102px;
  right: 30px;
  width: 242px;
  height: 295px;
  background-color: rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 18px -6px rgba(24, 39, 75, 0.12);
  border-radius: 10px;
  color: #505050;
  z-index: 2;
`

export default UserModal;
