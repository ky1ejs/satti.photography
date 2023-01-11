import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Customer from "../types/Customer";
import { Input } from "./Input";

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
        <Input
          inputProps={{ placeholder: "Dog's name", ...register("dogsName") }}
        />
        <Input
          inputProps={{ placeholder: "Dog's breed", ...register("dogsBreed") }}
        />
        <Input
          inputProps={{ placeholder: "Dog's age", ...register("dogsAge") }}
        />
        <Input
          inputProps={{
            type: "text",
            placeholder: "Message",
            ...register("message"),
          }}
        />
        {errors.email && <span>This field is required</span>}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
