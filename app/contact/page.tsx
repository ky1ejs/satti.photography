import Link from "next/link";
import React from "react";
import { EnquiryForm } from "@/components/form/EnquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Shoot - Satti Photography",
  description:
    "Contact Satti Photography for any questions you may have about booking a shoot for your dog(s)",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        className="mb-12"
        pageTitle="Contact Me - Satti Photography"
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
