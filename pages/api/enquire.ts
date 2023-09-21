// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addCustomerToNotion } from "../../services/notion";
import { sendEmail } from "../../services/email";
import { ContactDetails } from "../../types/ContactDetails";
import { getNotificationEmails } from "../../services/notification-emails";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const customer: ContactDetails = req.body;

  const notifiyEmails = getNotificationEmails();

  if (!notifiyEmails) {
    res.status(500).send();
    return;
  }

  const subject = "New enquiry message";
  const body = `
    From: ${customer.firstName} ${customer.lastName}

    Message:
    ${customer.message}
  `;

  return Promise.all(
    notifiyEmails.map((e) => sendEmail(e, subject, body, customer.email))
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
