import React from 'react';

import UserIcon from 'public/assets/svg/user-icon.svg';
import DropDown from 'public/assets/svg/dropdown-arrow.svg';

const UserButton = () => {
  return (
    <div className="flex items-center gap-2 mr-2">
      <UserIcon />
      <DropDown />
    </div>
  );
}

export default UserButton;
