// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Booking from "../../types/Booking";
import { addCustomerToNotion } from "../../services/notion";
import { sendEmail } from "../../services/email";

const NEW_CUSTOMER_NOTIFICATION_EMAIL =
  process.env.NEW_CUSTOMER_NOTIFICATION_EMAIL;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const customer: Booking = req.body;
  return addCustomerToNotion(customer)
    .then(() =>
      Promise.all([
        sendEmail(
          customer.email,
          "I'll be in touch soon!",
          "I usually get back to new requests within 18 hours"
        ),
        NEW_CUSTOMER_NOTIFICATION_EMAIL
          ? sendEmail(
              NEW_CUSTOMER_NOTIFICATION_EMAIL,
              "New customer!",
              customer.firstName
            )
          : Promise.resolve(),
      ])
    )
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
}
