import { GlobalStyled } from "../src/styles/global";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
