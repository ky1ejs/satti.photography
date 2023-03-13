import React from "react";
import { SubmitButton } from "./SubmittButton";

export const FormFooter = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <>
    <SubmitButton loading={isSubmitting} />
    <p className="mt-3 text-center text-gray-400">
      I typically respond to inquiries within 18 hours.
    </p>
  </>
);
