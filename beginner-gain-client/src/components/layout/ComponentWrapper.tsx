import React from 'react';
import {IBM_Plex_Sans_KR, Inter} from "next/font/google";
import Header from '@/components/layout/Header';

export const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});
export const ibm = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["500","600","700"],
  display: 'swap',
  variable: '--font-ibm',
});

export interface IComponentWrapper {
  children: any;
}

const ComponentWrapper = ({ ...other }: IComponentWrapper) => {
  return (
    <>
      <Header />
      <main className={`${ibm.className} ${inter.variable}`}>
        {other.children}
      </main>
    </>
  );
}

export default ComponentWrapper;
