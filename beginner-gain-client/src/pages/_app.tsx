import type { AppProps } from "next/app";
import "src/styles/globals.css";
import ComponentWrapper from "@/components/layout/ComponentWrapper";
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot} from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(()=> new QueryClient());
  return <>
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
