import axios from "axios";
import React, { useState } from "react";
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

const SectionHeading = (props: { children: React.ReactNode }) => (
  <h2 className="mb-2 w-full">{props.children}</h2>
);

export function BookingForm() {
  const form = useForm<Booking>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const [errorModalOpen, setErrorModalOpen] = useState(false);

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
      <Dialog
        title="Something went wrong..."
        open={errorModalOpen}
        Footer={
          <div className="">
            <button
              className="mx-auto block rounded bg-gray-500 px-6 py-2"
              onClick={() => setErrorModalOpen(false)}
            >
              Try again
            </button>
          </div>
        }
      >
        <div className="text-black">Sadly your request could not be made.</div>
      </Dialog>
    </>
  );
}
