import React from "react";
import { BookingForm } from "../components/form/BookingForm";
import Link from "next/link";
import { PageHeader } from "../components/PageHeader";

export default function Book() {
  return (
    <>
      <PageHeader pageTitle="book-the-shoot" title="Book the Shoot ">
        <p>
          If you have any questions before booking, please contact me{" "}
          <Link href="/enquire">here</Link>.
        </p>
      </PageHeader>
      <BookingForm />
    </>
  );
}
