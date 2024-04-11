import type { AppProps } from "next/app";
import "src/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;