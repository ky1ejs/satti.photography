import { sendEmail } from "@/services/email";
import { ContactDetails } from "@/types/ContactDetails";
import { getNotificationEmails } from "@/services/notification-emails";

export async function POST(request: Request) {
  const customer: ContactDetails = await request.json();
  const notifiyEmails = getNotificationEmails();

  if (!notifiyEmails) {
    return new Response(null, { status: 500 });
  }

  const subject = "New enquiry message";
  const body = `
    From: ${customer.firstName} ${customer.lastName}
    Email: ${customer.email}

    Message:
    ${customer.message}
  `;

  try {
    await Promise.all(
      notifiyEmails.map((e) => sendEmail(e, subject, body, customer.email)),
    );
    await sendEmail(
      customer.email,
      "I'll be in touch soon!",
      "Thanks for your recent enquiry, I'll be in touch soon (usually within a day) :)",
    );
    return new Response(null, { status: 200 });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}
