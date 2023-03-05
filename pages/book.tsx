import React, { useState } from "react";
import Head from "next/head";
import { BookingForm } from "../components/BookingForm";
import dashImage from "../public/dash.jpg";
import sabrinaLogo from "../public/ss-photography.png";
import Image from "next/image";

export default function Book() {
  const [heroOpacity, setHeroOpacity] = useState(1);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const opacity = 1 - winScroll / 200;
    setHeroOpacity(opacity);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Head>
        <title>SS - Book Dog Photos</title>
        <meta
          name="description"
          content="Book a photo shoot for your dog with Sabrina Satti"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.jpg" />
      </Head>
      <main>
        <Image
          style={{ opacity: heroOpacity }}
          className="fade-in fixed top-0 h-64 object-cover object-[0_68%] md:hidden"
          src={dashImage}
          alt="Sabrina Satti in Santa Cruz"
        />
        <div className="relative mt-52 h-screen w-screen bg-transparent md:mt-0 md:flex">
          <div className="scroll-area overflow-scroll bg-transparent pt-5 md:w-1/2">
            <div className="mx-auto flex w-[80%] max-w-[350px] flex-col items-center rounded bg-black">
              <div className="text-center">
                <Image
                  width={120}
                  className="m-auto pb-3"
                  src={sabrinaLogo}
                  alt="Sabrina Satti Dog Photography logo"
                />
                <h1 className="mb-3">Make a Booking</h1>
                <p>
                  Blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blah blah blah blah blah
                </p>
              </div>
              <div>
                <div className="flex items-start justify-center gap-8">
                  <div className="fade-in flex-auto">
                    <BookingForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="fade-in hidden w-1/2 object-cover md:block"
            src={dashImage}
            alt="Sabrina Satti in Santa Cruz"
          />
        </div>
      </main>
    </>
  );
}
