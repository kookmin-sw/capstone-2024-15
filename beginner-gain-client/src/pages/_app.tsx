import type { AppProps } from "next/app";
import "src/styles/globals.css";
import ComponentWrapper from "@/components/layout/ComponentWrapper";

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
    <ComponentWrapper>
      <Component {...pageProps} />
    </ComponentWrapper>
  </>
};

export default App;