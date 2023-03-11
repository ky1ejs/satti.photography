import Head from "next/head";
import Image from "next/image";
import sabrinaLogo from "../public/ss-photography.png";

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
    <Image
      width={75}
      className="m-auto mb-8"
      src={sabrinaLogo}
      alt="Sabrina Satti Dog Photography logo"
    />
    <h1 className="mb-3">{title}</h1>
    {children}
  </>
);
