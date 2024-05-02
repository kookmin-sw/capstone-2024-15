import React from 'react';
import { useRouter } from 'next/router'
import Header from '@/components/layout/Header';

export interface IComponentWrapper {
  children: any;
}

const ComponentWrapper = ({ ...other }: IComponentWrapper) => {
  const router = useRouter();
  return (
    <>
      <main>
        {other.children}
      </main>
    </>
  );
}

export default ComponentWrapper;
