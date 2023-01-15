import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Customer from "../types/Customer";
import { Input } from "./Input";

const SectionHeading = (props: { children: React.ReactNode }) => (
  <h2 className="w-full">{props.children}</h2>
);

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Customer> = (data) => {
    if (isSubmitting) return Promise.resolve();
    setIsSubmitting(true);

    return axios.post("/api/book", data).then(() => setIsSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex max-w-xs flex-col items-center">
        <SectionHeading>You</SectionHeading>
        <div className="flex w-full justify-evenly gap-4">
          <Input
            inputProps={{
              placeholder: "First name",
              ...register("firstName"),
            }}
          />
          <Input
            inputProps={{ placeholder: "Last name", ...register("lastName") }}
          />
        </div>
        <Input
          inputProps={{ placeholder: "your@email.com", ...register("email") }}
        />
        <Input
          inputProps={{
            placeholder: "Phone number",
            ...register("phoneNumber"),
          }}
        />
        <SectionHeading>Your doggo</SectionHeading>
        <Input
          inputProps={{ placeholder: "Dog's name", ...register("dogsName") }}
        />
        <Input
          inputProps={{ placeholder: "Dog's breed", ...register("dogsBreed") }}
        />
        <Input
          inputProps={{ placeholder: "Dog's age", ...register("dogsAge") }}
        />
        <SectionHeading>The shoot</SectionHeading>
        <Input
          inputProps={{ placeholder: "Ideal date", ...register("location") }}
        />
        <Input
          inputProps={{
            placeholder: "Location (ideas)",
            ...register("shootDate"),
          }}
        />
        <SectionHeading>Anything else...</SectionHeading>
        <textarea
          className="input message"
          placeholder="message"
          {...register("message")}
        />
        {errors.email && <span>This field is required</span>}
        <button className="mt-8 w-full rounded bg-primary py-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
