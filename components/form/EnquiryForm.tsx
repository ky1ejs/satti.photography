"use client";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { SubmitButton } from "../SubmittButton";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { EmailInput } from "./inputs/EmailInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { FormContext } from "../../contexts/FormContext";
import { ErrorDialog } from "../dialog/ErrorDialog";
import { SuccessDialog } from "../dialog/SuccessDialog";
import { ContactDetails } from "../../types/ContactDetails";

export function EnquiryForm() {
  const { contactDetails, setContactDetails } = useContext(FormContext);
  const form = useForm<ContactDetails>({
    defaultValues: { ...contactDetails },
    shouldUseNativeValidation: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    const subscription = watch((value) => {
      setContactDetails({
        firstName: value.firstName ?? "",
        lastName: value.lastName ?? "",
        email: value.email ?? "",
        message: value.message ?? "",
      });
    });
    return () => subscription.unsubscribe();
  }, [watch, setContactDetails]);

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const onSubmit: SubmitHandler<ContactDetails> = (data) => {
    return axios
      .post("/api/contact", data)
      .then(() => setSuccessModalOpen(true))
      .catch(() => setErrorModalOpen(true));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FirstNameInput form={form} name="firstName" />
        <LastNameInput form={form} name="lastName" />
        <EmailInput form={form} name="email" />
        <InputLabel text="Message*" />
        <textarea className="input message" {...register("message")} />
        <SubmitButton loading={isSubmitting} />
      </form>
      <ErrorDialog
        open={errorModalOpen}
        onCloseButtonClicked={() => setErrorModalOpen(false)}
      />
      <SuccessDialog open={successModalOpen} />
    </>
  );
}
