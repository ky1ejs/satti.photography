import React, { HTMLInputTypeAttribute, RefObject } from "react";
import { InputLabel } from "../../InputLabel";

interface InputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  inputRef?: RefObject<HTMLInputElement>;
  errorMessage?: string;
  disabled?: boolean;
}

export const Input = ({
  label,
  type,
  inputProps,
  inputRef,
  errorMessage,
  disabled,
}: {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
} & InputProps) => (
  <div className="mb-3">
    <InputLabel text={label} />
    <input
      ref={inputRef}
      className="input"
      {...inputProps}
      type={type}
      disabled={disabled}
    />
    {errorMessage && (
      <span className="mt-1 block pl-2 text-red-300">{errorMessage}</span>
    )}
  </div>
);
