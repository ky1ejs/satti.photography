import React from "react";

export const Input = (props: {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) => (
  <input
    className="mb-4 h-8 w-full rounded p-2 text-gray-dark"
    {...props.inputProps}
  />
);
