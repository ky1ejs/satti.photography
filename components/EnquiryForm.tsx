import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Customer from "../types/Customer";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";

export function EnquiryForm() {
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
      <textarea
        className="input message"
        placeholder="message"
        {...register("message")}
      />
      {errors.email && <span>This field is required</span>}
      <button className="mt-8 w-full rounded bg-primary py-2" type="submit">
        Submit
      </button>
    </form>
  );
}
