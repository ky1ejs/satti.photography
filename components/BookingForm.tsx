import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Customer from "../types/Customer";
import { DogBreedField } from "./BreedField";
import { Input } from "./Input";

const SectionHeading = (props: { children: React.ReactNode }) => (
  <h2 className="mb-2 w-full">{props.children}</h2>
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
      <div className="mx-auto flex w-[80%] max-w-[350px] flex-col items-center">
        <SectionHeading>You</SectionHeading>
        <Input
          label="First name"
          inputProps={{
            placeholder: "Dog",
            ...register("firstName"),
          }}
        />
        <Input
          label="Last name"
          inputProps={{ placeholder: "Lover", ...register("lastName") }}
        />
        <Input
          label="Email address"
          inputProps={{ placeholder: "your@email.com", ...register("email") }}
        />
        <Input
          label="Phone number"
          inputProps={{
            placeholder: "Phone number",
            ...register("phoneNumber"),
          }}
        />
        <SectionHeading>Your doggo</SectionHeading>
        <Input
          label="Name(s)"
          inputProps={{ placeholder: "Roger", ...register("dogsName") }}
        />
        <DogBreedField />
        <Input
          label="Age"
          inputProps={{
            placeholder: "2 years old",
            ...register("dogsAge"),
          }}
        />
        <SectionHeading>The shoot</SectionHeading>
        <Input
          label="Ideal date(s)"
          inputProps={{
            placeholder: "Click to select",
            ...register("location"),
          }}
        />
        <Input
          label="Location (ideas)"
          inputProps={{
            placeholder: "Central park",
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
