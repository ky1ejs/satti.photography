import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dogsName: string;
  dogsBreed: string;
  dogsAge: string;
  message: string;
};

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto flex w-96 flex-col items-center">
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
          inputProps={{ placeholder: "Dogs name", ...register("dogsName") }}
        />
        <Input
          inputProps={{ placeholder: "Dogs breed", ...register("dogsBreed") }}
        />
        <Input
          inputProps={{ placeholder: "Dogs age", ...register("dogsAge") }}
        />
        <Input
          inputProps={{
            type: "text",
            placeholder: "Message",
            ...register("message"),
          }}
        />
        {errors.email && <span>This field is required</span>}
        <button>Submit</button>
      </div>
    </form>
  );
}
