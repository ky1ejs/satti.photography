import { Client as NotionClient } from "@notionhq/client";
import Booking from "../types/Booking";

const NOTION_API_KEY = process.env.NOTION_API_KEY;

const notion = new NotionClient({ auth: NOTION_API_KEY });

export function addCustomerToNotion(customer: Booking) {
  console.log(customer.message);
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
      "First Name": richText(customer.firstName),
      "Last Name": richText(customer.lastName),
      Email: {
        email: customer.email,
      },
      "Dog Name": richText(customer.dogsName),
      "Dog Breed": richText(customer.dogsBreed),
      "Dog Age": richText(customer.dogsAge),
    },
    children: [
      {
        object: "block",
        heading_2: {
          rich_text: [
            {
              text: {
                content: "Message from customer form",
              },
            },
          ],
        },
      },
      {
        object: "block",
        paragraph: richText(customer.message),
      },
    ],
  });

  function richText(value: string) {
    return {
      rich_text: [
        {
          text: {
            content: value,
          },
        },
      ],
    };
  }
}
