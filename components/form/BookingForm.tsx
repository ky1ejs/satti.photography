import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Booking from "../../types/Booking";
import { EmailInput } from "./inputs/EmailInput";
import { FirstNameInput } from "./inputs/FirstNameInput";
import { LastNameInput } from "./inputs/LastNameInput";
import { FormFooter } from "../FormFooter";
import { InputLabel } from "../InputLabel";
import { DogsAgeInput } from "./inputs/DogsAgeInput";
import { DogsNameInput } from "./inputs/DogsNameInput";
import { DogsBreedInput } from "./inputs/DogsBreedInput";
import { Dialog } from "../Dialog";
import { FormContext } from "../../contexts/FormContext";
import { ErrorDialog } from "../ErrorDialog";

const SectionHeading = (props: { children: React.ReactNode }) => (
  <h2 className="mb-2 w-full">{props.children}</h2>
);

export function BookingForm() {
  const { contactDetails, setContactDetails } = useContext(FormContext);
  const form = useForm<Booking>({ defaultValues: { ...contactDetails } });
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = form;
  const [errorModalOpen, setErrorModalOpen] = useState(false);

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

  const onSubmit: SubmitHandler<Booking> = (data) => {
    return axios.post("/api/book", data).catch(() => setErrorModalOpen(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <SectionHeading>You</SectionHeading>
        <FirstNameInput form={form} name="firstName" />
        <LastNameInput form={form} name="lastName" />
        <EmailInput form={form} name="email" />
        <SectionHeading>Your dog(s)</SectionHeading>
        <DogsNameInput form={form} name="dogsName" />
        <DogsBreedInput form={form} name="dogsBreed" />
        <DogsAgeInput form={form} name="dogsAge" />
        <SectionHeading>Anything else...</SectionHeading>
        <p>Good things to let me know:</p>
        <ul>
          <li>
            Is there anything I should know about your dog(s)? Their needs? Any
            quirks?
          </li>
          <li>
            Do you have any tips on how to make your dog(s) feel comfortable?
          </li>
          <li>
            Do you have any particular requests for the shoot? (e.g. locations,
            ideal dates)
          </li>
        </ul>
        <InputLabel text="Message" />
        <textarea
          className="input message"
          {...register("message")}
          disabled={isSubmitting}
        />
        <FormFooter isSubmitting={isSubmitting} />
      </form>
      <ErrorDialog
        open={errorModalOpen}
        onCloseButtonClicked={() => setErrorModalOpen(false)}
      />
    </>
  );
}
