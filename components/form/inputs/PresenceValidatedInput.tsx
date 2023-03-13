import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { Input } from "./Input";

export const PresenceValidatedInput = <T extends FieldValues>({
  form: {
    register,
    formState: { errors, isSubmitting },
  },
  name,
  label,
  placeholder,
  presenceErrorMessage,
}: {
  form: UseFormReturn<T, any>;
  name: Path<T>;
  label: string;
  placeholder: string;
  presenceErrorMessage: string;
}) => (
  <Input
    label={label}
    inputProps={{
      placeholder: placeholder,
      ...register(name, {
        required: { value: true, message: presenceErrorMessage },
      }),
    }}
    errorMessage={errors[name]?.message as string}
    disabled={isSubmitting}
  />
);
