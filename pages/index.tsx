import Head from "next/head";
import { BookingForm } from "../components/BookingForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Dog Photos</title>
        <meta
          name="description"
          content="Book a photo shoot for your dog with Sabrina Satti"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mb-8 flex h-16 text-center">
          <div className="m-auto">
            <h1>Book a shoot for your dog with Sabrina Satti</h1>
          </div>
        </div>
        <BookingForm />
      </main>
    </>
  );
}
