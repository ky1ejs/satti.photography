"use client"

import React, { createContext, useState, ReactNode } from "react";
import { ContactDetails } from "../types/ContactDetails";

type FormContextState = {
  contactDetails: ContactDetails;
  setContactDetails: (c: ContactDetails) => void;
};
const DEAFULT_CONTACT_DETAILS: ContactDetails = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
const DEFAULT_CONTACT_FORM: FormContextState = {
  contactDetails: DEAFULT_CONTACT_DETAILS,
  setContactDetails: () => null,
};

export const FormContext =
  createContext<FormContextState>(DEFAULT_CONTACT_FORM);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [contactDetails, setContactDetails] = useState<ContactDetails>(
    DEAFULT_CONTACT_DETAILS
  );
  const setContactDetailsCallback = (c: ContactDetails) => setContactDetails(c);

  return (
    <FormContext.Provider
      value={{ contactDetails, setContactDetails: setContactDetailsCallback }}
    >
      {children}
    </FormContext.Provider>
  );
};
