import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const SITE_DESC = "Book a photo shoot for your dog with Sabrina Satti";
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={SITE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Satti Dog Photography in NY" />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:url" content="https://book.satti.photography/book" />
        <meta property="og:image" content="/dash.jpg" />
        <link rel="shortcut icon" href="/favicon.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
