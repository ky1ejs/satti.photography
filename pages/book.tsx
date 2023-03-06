import React from "react";
import { BookingForm } from "../components/BookingForm";
import { Page } from "../components/Page";
import Link from "next/link";

export default function Book() {
  return (
    <Page
      title="Book"
      Header={
        <>
          <h1 className="mb-3">Make a Booking</h1>
          <p>I typically respond to inquiries within 18 hours.</p>
          <p>
            If you&#39;d prefer to chat or ask question entail before making a
            booking, you contact me <Link href="/enquire">here</Link>.
          </p>
        </>
      }
      Content={<BookingForm />}
    />
  );
}
