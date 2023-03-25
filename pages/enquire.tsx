import Link from "next/link";
import React from "react";
import { EnquiryForm } from "../components/form/EnquiryForm";
import { PageHeader } from "../components/PageHeader";

export default function Enquire() {
  return (
    <>
      <PageHeader
        className="mb-12"
        pageTitle="Contact Me - Satti Photohrapy"
        title="Contact Me"
      >
        <p>
          Have any questions for me? You&#39;re in the right place. If you are
          ready to book a shoot, please fill out{" "}
          <Link href="/book">this form</Link>.
        </p>
      </PageHeader>
      <EnquiryForm />
    </>
  );
}
