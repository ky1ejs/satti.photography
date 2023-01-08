import Head from "next/head";
import { Input } from "../components/Input";

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
        <form>
          <div className="flex flex-col items-center">
            <Input placeholder="First and last name" />
            <Input placeholder="your@email.com" />
            <Input placeholder="Phone number" />
            <Input placeholder="Dogs name" />
            <Input placeholder="Dogs breed" />
            <Input placeholder="Dogs age" />
            <Input type="text" placeholder="Message" />
            <button className="test">Submit</button>
          </div>
        </form>
      </main>
    </>
  );
}
