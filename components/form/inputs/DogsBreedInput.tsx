import { UseFormReturn, Path, FieldValues } from "react-hook-form";
import { PresenceValidatedInput } from "./PresenceValidatedInput";

export const DogsBreedInput = <T extends FieldValues>({
  form,
  name,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<T, any>;
  name: Path<T>;
}) => (
  <PresenceValidatedInput
    form={form}
    name={name}
    label="Breed(s)*"
    placeholder="I love any and all breeds and mixes!"
    presenceErrorMessage="please provide your dog's breed"
  />
);
