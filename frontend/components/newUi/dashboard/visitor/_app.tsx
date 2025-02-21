import { useEffect } from "react";
import type { AppProps } from "next/app";
import { logVisitorAndCount } from "../../config/firebaseUtils";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    logVisitorAndCount();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
