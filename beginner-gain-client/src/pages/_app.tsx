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
    <Head>
      <title>BeginnerGain</title>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.beginergain.com/"/>
      <meta property="og:title" content="BeginnerGain"/>
      <meta property="og:image" content='https://www.beginergain.com/ogImage.png'/>
      <meta property="og:description" content="초보개발자의 올바른 첫걸음을 도와주는 서비스"/>
      <meta property="og:site_name" content="BeginnerGain"/>
    </Head>
    <link rel="icon" href="/favicon.ico" sizes="any"/>
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
