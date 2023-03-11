import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Booking from "../types/Customer";
import { Form } from "./Form";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";
import { SubmitButton } from "./SubmittButton";

const SectionHeading = (props: { children: React.ReactNode }) => (
  <h2 className="mb-2 w-full">{props.children}</h2>
);

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Booking>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Booking> = (data) => {
    if (isSubmitting) return Promise.resolve();
    setIsSubmitting(true);

    return axios.post("/api/book", data).then(() => setIsSubmitting(false));
  };

  return (
    <Form>
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
      <SectionHeading>Your dog</SectionHeading>
      <Input
        label="Name(s)"
        inputProps={{ placeholder: "Roger", ...register("dogsName") }}
      />
      <Input
        label="Breed"
        inputProps={{
          placeholder: "I love any and all breeds",
          ...register("phoneNumber"),
        }}
      />
      <Input
        label="Age"
        inputProps={{
          placeholder: "2 years old",
          ...register("dogsAge"),
        }}
      />
      <SectionHeading>Anything else...</SectionHeading>
      <p>Good things to let me know:</p>
      <ul>
        <li>
          Is there anything I should know about your dog(s)? Their needs? Any
          quirks?{" "}
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
      <textarea className="input message" {...register("message")} />
      {/* {errors.email && <span>This field is required</span>} */}
    </Form>
  );
}
