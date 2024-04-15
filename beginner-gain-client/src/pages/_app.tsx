import type { AppProps } from "next/app";
import "src/styles/globals.css";
import {IBM_Plex_Sans_KR, Inter} from "next/font/google";

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

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    {/*<style jsx global>{`*/}
    {/*  @font-face {*/}
    {/*    font-family: ${inter.style.fontFamily};*/}
    {/*    font-style: normal;*/}
    {/*    unicode-range:U+0041-005A, U+0061-007A, U+0030-0039;*/}
    {/*  }*/}
    {/*  @font-face {*/}
    {/*    font-family: ${ibm.style.fontFamily};*/}
    {/*    font-style: normal;*/}
    {/*    unicode-range:U+AC00-D7A3;*/}
    {/*  }*/}
    {/*  body {*/}
    {/*    font-family: ${inter.style.fontFamily} ${ibm.style.fontFamily};*/}
    {/*  }*/}
    {/*`}</style>*/}
    <main className={`${ibm.className} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  </>
};

export default App;