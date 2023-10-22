"use client";

import React, { useState } from "react";
import { HeroImage } from "./HeroImage";
import Image from "next/image";
import sabrinaLogo from "../public/ss-photography.png";

const PortfolioButton = () => (
  <a href="http://satti.photography" className="mx-3 inline-block text-xs">
    home
  </a>
);

const NavBorder = () => (
  <div className="h-[2px] w-full animate-fade-in-fast bg-gray-dark" />
);

const SCOLL_DIV_ID = "scroll-div";

// This component sets out the height for the components in the nav bar
const NavContainer = () => (
  <div className="flex h-[60px] items-center">
    <PortfolioButton />
  </div>
);

export const Page = ({ children }: { children: React.ReactNode }) => {
  const [fillNav, setFillNav] = useState(false);
  const [fillNavSm, setFillNavSm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  React.useEffect(() => {
    const div = document.getElementById(SCOLL_DIV_ID);
    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const isScrollingDown = winScroll > scrollPosition;
      setFillNav(
        (isScrollingDown && winScroll > 205) ||
          (!isScrollingDown && winScroll > 230),
      );
      setScrollPosition(winScroll);
    };
    const onDivScroll = () => {
      const scroll = div?.scrollTop ?? 0;
      setFillNavSm(scroll > 45);
    };
    div?.addEventListener("scroll", onDivScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      div?.removeEventListener("scroll", onDivScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <main>
        <HeroImage
          // hidden when not small
          className="fixed top-0 h-64 sm:hidden"
          scrollOpacityEnabled
        />
        <div
          className={`fixed top-0 z-10 w-full sm:hidden ${
            fillNav ? "bg-black" : ""
          }`}
        >
          <NavContainer />
          {fillNav && <NavBorder />}
        </div>
        <div className="relative mt-52 h-screen w-screen bg-transparent sm:mt-0 sm:flex">
          <div
            id={SCOLL_DIV_ID}
            className="scroll-area bg-transparent pt-4 sm:w-1/2 sm:overflow-scroll"
          >
            <div className="mx-auto mb-36 flex w-[90%] max-w-[540px] flex-col items-center rounded bg-black px-7 sm:mt-12">
              <div className="mb-8 mt-4">
                <div className="fixed left-0 top-0 hidden w-1/2 bg-black sm:block">
                  <NavContainer />
                  {fillNavSm && <NavBorder />}
                </div>
                <div className="flex w-full items-start justify-center gap-8">
                  <div>
                    <Image
                      width={100}
                      className="sticky top-4 z-20 m-auto mb-8 sm:top-0"
                      src={sabrinaLogo}
                      alt="Sabrina Satti Dog Photography logo"
                    />
                    <div className="flex-auto">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HeroImage className="hidden w-1/2 sm:block" />
        </div>
      </main>
    </>
  );
};
