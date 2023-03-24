export function getNotificationEmails(): string[] | null {
  const emailsCsv = process.env.NOTIFICATION_EMAILS;
  if (!emailsCsv) return null;
  return emailsCsv.split(",");
}
