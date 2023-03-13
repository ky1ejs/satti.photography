import Head from "next/head";

export const PageHeader = ({
  className,
  pageTitle,
  title,
  children,
}: {
  className?: string;
  pageTitle: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className={className}>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <h1 className="mb-3">{title}</h1>
    {children}
  </div>
);
