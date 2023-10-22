import Booking from "@/types/Booking";
import { addBookingToNotion } from "@/services/notion";
import { sendEmail } from "@/services/email";
import { getNotificationEmails } from "@/services/notification-emails";

export async function POST(request: Request) {
  const booking: Booking = await request.json();
  const notifyEmails = getNotificationEmails();
  await addBookingToNotion(booking);
  const notifications = Promise.all([
    sendEmail(
      booking.email,
      "I'll be in touch soon!",
      "I usually get back to new requests within 24 hours",
    ),
    notifyEmails
      ? Promise.all(
          notifyEmails.map((e) =>
            sendEmail(
              e,
              "New customer!",
              `${booking.firstName} ${booking.lastName}`,
            ),
          ),
        )
      : Promise.resolve(),
  ]);

  try {
    await notifications;
    return new Response(null, { status: 200 });
  } catch (e) {
    console.error(`error on booking: ${e}`);
    return new Response(null, { status: 500 });
  }
}
