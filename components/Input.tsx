import React, { RefObject } from "react";
import { InputLabel } from "./InputLabel";

interface InputProps {
  label: string;
  inputRef?: RefObject<HTMLInputElement>;
}

export const Input = (
  props: {
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  } & InputProps
) => (
  <>
    <InputLabel text={props.label} />
    <input ref={props.inputRef} className="input" {...props.inputProps} />
  </>
);
