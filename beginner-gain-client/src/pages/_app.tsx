import type { AppProps } from "next/app";
import "src/styles/globals.css";
import ComponentWrapper from "@/components/layout/ComponentWrapper";

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <ComponentWrapper>
      <main className={`${ibm.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </ComponentWrapper>
  </>
};

export default App;