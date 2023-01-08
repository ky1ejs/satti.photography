import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className="mb-4 h-8 w-72 rounded p-2 text-gray-dark" {...props} />
);
