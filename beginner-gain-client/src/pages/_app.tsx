import type { AppProps } from "next/app";
import "src/styles/globals.css";
import ComponentWrapper from "@/components/layout/ComponentWrapper";

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <ComponentWrapper>
      <Component {...pageProps} />
    </ComponentWrapper>
  </>
};

export default App;
