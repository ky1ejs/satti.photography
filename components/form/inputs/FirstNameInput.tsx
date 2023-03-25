import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { PresenceValidatedInput } from "./PresenceValidatedInput";

export const FirstNameInput = <T extends FieldValues>({
  form,
  name,
}: {
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <PresenceValidatedInput
    form={form}
    name={name}
    label="First name*"
    placeholder="Babara"
    presenceErrorMessage="please provide your first name"
  />
);
