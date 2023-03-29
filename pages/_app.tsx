import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Page } from "../components/Page";
import { FormContextProvider } from "../contexts/FormContext";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://41d42f09dd3e4feda0eba4ee2063b892@o4504922846789632.ingest.sentry.io/4504922854522880",
  integrations: [new BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </FormContextProvider>
  );
}
