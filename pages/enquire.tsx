import Link from "next/link";
import React from "react";
import { EnquiryForm } from "../components/EnquiryForm";
import { Page } from "../components/Page";

export default function Enquire() {
  return (
    <Page
      title="Book"
      Header={
        <>
          <h1 className="mb-3">Enquire</h1>
          <p>
            Want to question before you book? You&#39;re in the right place.
          </p>
          <p>
            If you&#39;re ready to book, please fill out{" "}
            <Link href="/book">this form</Link>.
          </p>
          <p>I typically respond to inquirieswithin 18 hours.</p>
        </>
      }
      Content={<EnquiryForm />}
    />
  );
}
