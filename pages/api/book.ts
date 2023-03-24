// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Booking from "../../types/Booking";
import { addCustomerToNotion } from "../../services/notion";
import { sendEmail } from "../../services/email";
import { getNotificationEmails } from "../../services/notification-emails";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const customer: Booking = req.body;
  const notifyEmails = getNotificationEmails();
  return addCustomerToNotion(customer)
    .then(() =>
      Promise.all([
        sendEmail(
          customer.email,
          "I'll be in touch soon!",
          "I usually get back to new requests within 18 hours"
        ),
        notifyEmails
          ? Promise.all(
              notifyEmails.map((e) =>
                sendEmail(
                  e,
                  "New customer!",
                  `${customer.firstName} ${customer.lastName}`
                )
              )
            )
          : Promise.resolve(),
      ])
    )
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
}
