import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Page } from "../components/Page";
import { FormContextProvider } from "../contexts/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </FormContextProvider>
  );
}
