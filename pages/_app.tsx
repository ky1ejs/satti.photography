import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 1200);
    // setLoaded(true);
  }, [loaded]);
  return (
    <div className={loaded ? "loaded" : ""}>
      <Component {...pageProps} />
    </div>
  );
}
