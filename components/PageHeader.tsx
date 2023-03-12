import Head from "next/head";

export const PageHeader = ({
  pageTitle,
  title,
  children,
}: {
  pageTitle: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <h1 className="mb-3">{title}</h1>
    {children}
  </>
);
