import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Booking from "../types/Customer";
import { Form } from "./Form";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";
import { SubmitButton } from "./SubmittButton";

export function EnquiryForm() {
  const {
    register,
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
      <InputLabel text="Message" />
      <textarea className="input message" {...register("message")} />
      {/* {errors.email && <span>This field is required</span>} */}
      <SubmitButton />
    </Form>
  );
}
