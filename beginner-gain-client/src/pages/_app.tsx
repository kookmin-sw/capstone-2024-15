import type { AppProps } from "next/app";
import "src/styles/globals.css";
import ComponentWrapper from "@/components/layout/ComponentWrapper";
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot, RecoilEnv} from "recoil";
import Head from 'next/head';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(()=> new QueryClient());
  return <>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <RecoilRoot>
          <ComponentWrapper>
            <Component {...pageProps} />
          </ComponentWrapper>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  </>
};

export default App;
