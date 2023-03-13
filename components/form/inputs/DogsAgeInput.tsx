import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { PresenceValidatedInput } from "./PresenceValidatedInput";

export const DogsAgeInput = <T extends FieldValues>({
  form,
  name,
}: {
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <PresenceValidatedInput
    form={form}
    name={name}
    label="Age*"
    placeholder="2 years old"
    presenceErrorMessage="please provide your dog's age"
  />
);
