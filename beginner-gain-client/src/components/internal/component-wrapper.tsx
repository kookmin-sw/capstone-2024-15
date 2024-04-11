// import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

import Header from '../internal/layout/header';
// import useShowHeader from 'src/hooks/useShowHeader';

// import BannerComponent from './common/banner';

export interface IComponentWrapper {
  children: any;
}

const ComponentWrapper = ({ ...other }: IComponentWrapper) => {
  // const { isVisible } = useShowHeader();
  // const bannerElement = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main className="main-container">
        {other.children}
      </main>
    </>
  );
};

export default ComponentWrapper;
