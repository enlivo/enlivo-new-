export const resendRecipient = "contact@enlivotechnologies.com";

export function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function fileToAttachment(file: File) {
  return {
    filename: file.name || "attachment",
    content: Buffer.from(await file.arrayBuffer()).toString("base64"),
  };
}

export async function sendResendEmail({
  apiKey,
  from,
  to = [resendRecipient],
  replyTo,
  subject,
  text,
  html,
  attachments,
}: {
  apiKey: string;
  from: string;
  to?: string[];
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Array<{ filename: string; content: string }>;
}) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      text,
      html,
      ...(attachments?.length ? { attachments } : {}),
    }),
  });
}
