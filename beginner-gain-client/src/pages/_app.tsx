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
    <main className={`${ibm.className} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  </>
};

export default App;