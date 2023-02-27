import Head from "next/head";
import { BookingForm } from "../components/BookingForm";
import parkerImage from "../public/parker.jpg";
import Image from "next/image";

const Nav = () => (
  <div className="mb-4 flex">
    <div className="m-auto">
      <div className="mx-8 py-6 text-center">
        <h1>Book a shoot for your dog with Sabrina Satti</h1>
      </div>
    </div>
  </div>
);

export default function Home() {
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
        <Nav />
        <div className="mx-4 mb-10 text-center">
          <p>
            More info is available <a href="https://sabrina.photos">here</a>{" "}
            about what shoots en
            <strong>tail</strong>, such as what to expect, packages etc.
          </p>
          <p>I typically respond to requests with 12-18 hours.</p>
        </div>
        <div className="flex items-start justify-center gap-8">
          <div className="image-container">
            <Image
              className="parker-image fade-in"
              src={parkerImage}
              alt="Sabrina Satti in Santa Cruz"
            />
          </div>
          <div className="fade-in flex-initial">
            <BookingForm />
          </div>
        </div>
        <div className="h-24" />
      </main>
    </>
  );
}
