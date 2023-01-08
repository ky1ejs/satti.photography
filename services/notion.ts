import { Client as NotionClient } from "@notionhq/client";
import Customer from "../types/Customer";

const NOTION_API_KEY = process.env.NOTION_API_KEY;

const notion = new NotionClient({ auth: NOTION_API_KEY });

export function addCustomerToNotion(customer: Customer) {
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
              content: customer.lastName,
            },
          },
        ],
      },
    },
  });
}
