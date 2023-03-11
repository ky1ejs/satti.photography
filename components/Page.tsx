import React from "react";
import { HeroImage } from "./HeroImage";

export const Page = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <main>
        <HeroImage
          className="fixed top-0 h-64 sm:hidden"
          scrollOpacityEnabled
        />
        <div className="relative mt-52 h-screen w-screen bg-transparent sm:mt-0 sm:flex">
          <div className="scroll-area overflow-scroll bg-transparent pt-4 sm:w-1/2">
            <div className="mx-auto mb-36 flex w-[90%] max-w-[400px] flex-col items-center rounded bg-black px-7">
              <div className="mt-4 mb-8">
                <div className="flex w-full items-start justify-center gap-8">
                  <div className="flex-auto">{children}</div>
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
