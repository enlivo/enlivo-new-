export const runtime = "nodejs";

import { Resend } from "resend";
import { escapeHtml, readField } from "@/app/lib/email";

const isDev = process.env.NODE_ENV !== "production";
const toRecipient = process.env.RESEND_TO_EMAIL || "onboarding@resend.dev";

function buildMessage(fields: Record<string, string>) {
  return [
    "New Enlivo business inquiry received.",
    "",
    `Full name: ${fields.fullName}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Inquiry type: ${fields.inquiryType}`,
    `Selected project intent: ${fields.selectedProjectIntent || "Not provided"}`,
    "",
    "Message:",
    fields.message || "Not provided",
  ].join("\n");
}

function buildHtml(fields: Record<string, string>) {
  const rows = [
    ["Full name", fields.fullName],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Inquiry type", fields.inquiryType],
    ["Selected project intent", fields.selectedProjectIntent || "Not provided"],
    ["Message", fields.message || "Not provided"],
  ];

  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #111827;">
      <h2>New Enlivo business inquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight: 700; color: #4b5563;">${escapeHtml(label)}</td>
                <td>${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL || "Enlivo <onboarding@resend.dev>";

    if (!apiKey || !from) {
      return Response.json({ error: "Email service not configured." }, { status: 500 });
    }

    const formData = await request.formData();
    const fields = {
      fullName: readField(formData, "fullName"),
      email: readField(formData, "email"),
      phone: readField(formData, "phone"),
      inquiryType: readField(formData, "inquiryType"),
      message: readField(formData, "message"),
      selectedProjectIntent: readField(formData, "selectedProjectIntent"),
    };

    if (!fields.fullName || !fields.email || !fields.phone || !fields.inquiryType || !fields.message) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [toRecipient],
      replyTo: fields.email,
      subject: "New Enlivo Business Inquiry",
      text: buildMessage(fields),
      html: buildHtml(fields),
    });

    if (error) {
      console.error("Contact email submission failed:", error);
      const detail = typeof error === "object" && error && "message" in error ? String((error as { message?: string }).message || error) : String(error);
      return Response.json(
        {
          error: isDev ? detail : "Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact submission route failed:", error);
    const detail = error instanceof Error ? error.message : String(error);
    return Response.json(
      { error: isDev ? detail : "Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us." },
      { status: 500 }
    );
  }
}
