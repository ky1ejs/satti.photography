import axios from "axios";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Booking from "../types/Customer";
import { SubmitButton } from "./SubmittButton";

export function Form<T extends FieldValues>({
  children,
}: {
  children: JSX.Element[];
}) {
  const { handleSubmit } = useForm<T>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<T> = (data) => {
    if (isSubmitting) return Promise.resolve();
    setIsSubmitting(true);

    return axios.post("/api/book", data).then(() => setIsSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
      <SubmitButton />
      <p className="mt-3 text-center text-gray-400">
        I typically respond to inquiries within 18 hours.
      </p>
    </form>
  );
}
