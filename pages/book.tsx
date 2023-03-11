import React from "react";
import { BookingForm } from "../components/BookingForm";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export default function Book() {
  return (
    <>
      <PageHeader pageTitle="Booking" title="Make a Booking">
        <p>
          If you&#39;d prefer to chat or ask question entail before making a
          booking, you contact me <Link href="/enquire">here</Link>.
        </p>
      </PageHeader>
      <BookingForm />
    </>
  );
}
