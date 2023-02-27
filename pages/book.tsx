import Head from "next/head";
import { BookingForm } from "../components/BookingForm";
import parkerImage from "../public/parker.jpg";
import Image from "next/image";

export default function Book() {
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
        <div className="relative flex h-screen w-screen">
          <div className="scroll-area w-1/2 overflow-scroll">
            <div>
              <div className="flex items-start justify-center gap-8">
                <div className="fade-in flex-initial">
                  <BookingForm />
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
          <Image
            className="fade-in w-1/2 object-cover object-right-bottom"
            src={parkerImage}
            alt="Sabrina Satti in Santa Cruz"
          />
        </div>
      </main>
    </>
  );
}
