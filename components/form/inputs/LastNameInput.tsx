import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { PresenceValidatedInput } from "./PresenceValidatedInput";

export const LastNameInput = <T extends FieldValues>({
  form,
  name,
}: {
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <PresenceValidatedInput
    form={form}
    name={name}
    label="Last name*"
    placeholder="Lover"
    presenceErrorMessage="please provide your last name"
  />
);
