// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addCustomerToNotion } from "../../services/notion";
import { sendEmail } from "../../services/email";
import { ContactDetails } from "../../types/ContactDetails";

const NEW_CUSTOMER_NOTIFICATION_EMAIL =
  process.env.NEW_CUSTOMER_NOTIFICATION_EMAIL;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const customer: ContactDetails = req.body;

  if (!NEW_CUSTOMER_NOTIFICATION_EMAIL) {
    res.status(500).send();
    return;
  }

  const emailBody = `
    From: ${customer.firstName} ${customer.lastName}

    Message:
    ${customer.message}
  `;
  return sendEmail(
    NEW_CUSTOMER_NOTIFICATION_EMAIL,
    "New enquiry message",
    emailBody
  )
    .then(() =>
      sendEmail(
        customer.email,
        "I'll be in touch soon!",
        "Thanks for your recent enquiry, I'll be in touch soon (usually within a day) :)"
      )
    )
    .then(() => res.status(200).send());
}
