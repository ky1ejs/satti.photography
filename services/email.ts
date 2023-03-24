import axios from "axios";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL;

export function sendEmail(
  recipient: string,
  subject: string,
  message: string
): Promise<void> {
  if (!MAILGUN_API_KEY) throw Error("Mailgun API key is null");
  if (!REPLY_TO_EMAIL) throw Error("Missing reply-to email");

  return axios
    .post(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      new URLSearchParams({
        from: `Sabrina Satti - Dog Photography <sabrina@${MAILGUN_DOMAIN}>`,
        to: recipient,
        subject: subject,
        text: message,
        "h:Reply-To": REPLY_TO_EMAIL,
      }).toString(),
      {
        auth: {
          username: "api",
          password: MAILGUN_API_KEY,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(() => console.log(`email sent to: ${recipient}`));
}
