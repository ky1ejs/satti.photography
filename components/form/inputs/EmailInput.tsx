import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { Input } from "./Input";

export const EmailInput = <T extends FieldValues>({
  form: {
    register,
    formState: { errors, isSubmitting },
  },
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <Input
    label="Email address*"
    type="email"
    inputProps={{
      placeholder: "your@email.com",
      ...register(name, {
        required: { value: true, message: "please provide your email" },
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: "please provide a valid email",
        },
      }),
    }}
    disabled={isSubmitting}
    errorMessage={errors[name]?.message as string}
  />
);
