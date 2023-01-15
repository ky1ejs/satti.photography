import React from "react";

export const Input = (props: {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) => <input className="input h-10" {...props.inputProps} />;
