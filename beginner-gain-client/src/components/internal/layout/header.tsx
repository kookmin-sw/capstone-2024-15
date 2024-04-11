import Link from 'next/link';

import BeginnerGainLogo from '../../../../public/assets/svg/beginnergain-logo-black.svg';

export interface IHeader {
  isVisible: boolean;
}

const Header = ({ isVisible }: IHeader) => {
  return (
    <header className={`header ${isVisible && 'fixed'}`}>
      <Link href={'/'}>
        <BeginnerGainLogo />
      </Link>
      <ul className="primary-menu">
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
    </header>
  );
};

export default Header;
