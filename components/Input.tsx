import React, { RefObject } from "react";

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
    <div className="mb-1 w-full text-xs text-stone-500">{props.label}</div>
    <input ref={props.inputRef} className="input" {...props.inputProps} />
  </>
);
