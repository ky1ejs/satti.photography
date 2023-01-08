// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Client as NotionClient } from "@notionhq/client";
import Customer from "../../types/Customer";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  const customer: Customer = req.body;
  console.log(req.body);
  // submit to notion
  //  look up to see if user has already made a page
  // send email to customer
  // send email to sabrina

  return addCustomerToNotion(customer)
    .then(() =>
      Promise.all([
        sendEmail(
          customer.email,
          "I'll be in touch soon!",
          "I usually get back to new requests within 18 hours"
        ),
        process.env.NEW_CUSTOMER_NOTIFICATION_EMAIL
          ? sendEmail(
              process.env.NEW_CUSTOMER_NOTIFICATION_EMAIL,
              "New customer!",
              customer.firstName
            )
          : Promise.resolve(),
      ])
    )
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
}

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

function sendEmail(recipient: string, subject: string, message: string) {
  if (!API_KEY) throw Error("Mailgun API key is null");

  axios
    .post(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      new URLSearchParams({
        from: `Sabrina Satti - Dog Photography <sabrina@${DOMAIN}>`,
        to: recipient,
        subject: subject,
        text: message,
      }).toString(),
      {
        auth: {
          username: "api",
          password: API_KEY,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(() => console.log(`email sent to: ${recipient}`));
}

const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });
function addCustomerToNotion(customer: Customer) {
  return notion.pages.create({
    parent: {
      type: "database_id",
      database_id: "7bcc205562d84ab0ad02b5594d2648d2",
    },
    properties: {
      "Customer Name": {
        title: [
          {
            text: {
              content: `${customer.firstName} ${customer.lastName}`,
            },
          },
        ],
      },
      "First Name": {
        rich_text: [
          {
            text: {
              content: customer.firstName,
            },
          },
        ],
      },
      "Last Name": {
        rich_text: [
          {
            text: {
              content: "A dark green leafy vegetable",
            },
          },
        ],
      },
    },
  });
}
