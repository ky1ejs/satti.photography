import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Contact from "../../types/Contact";
import { Input } from "./inputs/Input";
import { InputLabel } from "../InputLabel";
import { SubmitButton } from "../SubmittButton";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { EmailInput } from "./inputs/EmailInput";
import { LastNameInput } from "./inputs/LastNameInput";

export function EnquiryForm() {
  const form = useForm<Contact>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<Contact> = (data) => {
    return axios.post("/api/contact", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FirstNameInput form={form} name="firstName" />
      <LastNameInput form={form} name="lastName" />
      <EmailInput form={form} name="email" />
      <InputLabel text="Message*" />
      <textarea className="input message" {...register("message")} />
      <SubmitButton />
    </form>
  );
}
