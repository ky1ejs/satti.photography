import Link from "next/link";
import React from "react";
import { EnquiryForm } from "../components/form/EnquiryForm";
import { PageHeader } from "../components/PageHeader";

export default function Enquire() {
  return (
    <>
      <PageHeader className="mb-12" pageTitle="Enquire" title="Enquire">
        <p>Want to question before you book? You&#39;re in the right place.</p>
        <p>
          If you&#39;re ready to book, please fill out{" "}
          <Link href="/book">this form</Link>.
        </p>
      </PageHeader>
      <EnquiryForm />
    </>
  );
}
