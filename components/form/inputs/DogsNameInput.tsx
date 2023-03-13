import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { PresenceValidatedInput } from "./PresenceValidatedInput";

export const DogsNameInput = <T extends FieldValues>({
  form,
  name,
}: {
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <PresenceValidatedInput
    form={form}
    name={name}
    label="Name(s)*"
    placeholder="Roger"
    presenceErrorMessage="please provide your dog's name"
  />
);
