import React from "react";
import { BookingForm } from "../../components/form/BookingForm";
import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Shoot - Satti Photography",
  description: "Book a photo shoot for your dog(s) with Satti Photography",
};

export default function Book() {
  return (
    <>
      <PageHeader
        pageTitle="Book Shoot - Satti Photography"
        title="Book the Shoot"
      >
        <p>
          If you have any questions before booking, please contact me{" "}
          <Link href="/contact">here</Link>.
        </p>
      </PageHeader>
      <BookingForm />
    </>
  );
}
