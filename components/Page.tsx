import React, { useState } from "react";
import Head from "next/head";
import dashImage from "../public/dash.jpg";
import sabrinaLogo from "../public/ss-photography.png";
import Image from "next/image";

export const Page = ({
  title,
  Header,
  Content,
}: {
  title: string;
  Header: JSX.Element;
  Content: JSX.Element;
}) => {
  const [heroOpacity, setHeroOpacity] = useState(1);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const opacityResult = 1 - (winScroll + -30) / 120;
    const opacity = Math.max(0, Math.min(1, opacityResult));
    setHeroOpacity(opacity);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <Image
          style={{ opacity: heroOpacity }}
          className="fixed top-0 h-64 object-cover object-[0_68%] sm:hidden"
          src={dashImage}
          alt="Sabrina Satti in Santa Cruz"
          priority
        />
        <div className="relative mt-52 h-screen w-screen bg-transparent sm:mt-0 sm:flex">
          <div className="scroll-area overflow-scroll bg-transparent pt-4 sm:w-1/2">
            <div className="mx-auto flex w-[90%] max-w-[350px] flex-col items-center rounded bg-black px-7">
              <div className="mt-4 mb-8 text-center">
                <Image
                  width={75}
                  className="m-auto mb-8"
                  src={sabrinaLogo}
                  alt="Sabrina Satti Dog Photography logo"
                />
                {Header}
              </div>
              <div className="flex w-full items-start justify-center gap-8">
                <div className="flex-auto">{Content}</div>
              </div>
            </div>
          </div>
          <Image
            className="hidden w-1/2 object-cover sm:block"
            src={dashImage}
            alt="Sabrina Satti in Santa Cruz"
          />
        </div>
      </main>
    </>
  );
};
