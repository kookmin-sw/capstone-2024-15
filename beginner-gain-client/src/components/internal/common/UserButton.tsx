import React from 'react';
import { useState } from 'react';

import UserIcon from 'public/assets/svg/user-icon.svg';
import DropDown from 'public/assets/svg/dropdown-arrow.svg';
import UserModal from "@/components/internal/common/UserModal";

export interface IUserButton {
  color: string;
}

const UserButton = ({ color }: IUserButton) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex items-center gap-2 mr-2"
        onClick={() => setOpenModal(!openModal)}
      >
        <UserIcon css={{ color: `${color || 'black'}` }}/>
        <DropDown css={{ color: `${color || 'black'}` }}/>
      </div>
      {openModal && <UserModal />}
    </>

  );
}

export default UserButton;
