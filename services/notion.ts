import { Client as NotionClient } from "@notionhq/client";
import Booking from "@/types/Booking";

const NOTION_API_KEY = process.env.NOTION_API_KEY;

const notion = new NotionClient({ auth: NOTION_API_KEY });

export function addBookingToNotion(booking: Booking) {
  console.log(booking.message);
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
              content: `${booking.firstName} ${booking.lastName}`,
            },
          },
        ],
      },
      "First Name": richText(booking.firstName),
      "Last Name": richText(booking.lastName),
      Email: {
        email: booking.email,
      },
      "Dog Name": richText(booking.dogsName),
      "Dog Breed": richText(booking.dogsBreed),
      "Dog Age": richText(booking.dogsAge),
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
        paragraph: richText(booking.message),
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
