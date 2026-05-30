export const runtime = "nodejs";

const recipient = "contact@enlivotechnologies.com";
const allowedResumeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const maxResumeSize = 8 * 1024 * 1024;

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildMessage(fields: Record<string, string>) {
  return [
    "New internship application received.",
    "",
    `Full name: ${fields.fullName}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `College / Institution: ${fields.college}`,
    `Internship track: ${fields.track}`,
    "",
    "Short message:",
    fields.message || "Not provided",
  ].join("\n");
}

function buildHtml(fields: Record<string, string>) {
  const rows = [
    ["Full name", fields.fullName],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["College / Institution", fields.college],
    ["Internship track", fields.track],
    ["Short message", fields.message || "Not provided"],
  ];

  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #111827;">
      <h2>New internship application received</h2>
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
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      return Response.json({ error: "Email service not configured." }, { status: 500 });
    }

    const formData = await request.formData();
    const fields = {
      fullName: readField(formData, "fullName"),
      email: readField(formData, "email"),
      phone: readField(formData, "phone"),
      college: readField(formData, "college"),
      track: readField(formData, "track"),
      message: readField(formData, "message"),
    };
    const resume = formData.get("resume");

    if (!fields.fullName || !fields.email || !fields.phone || !fields.college || !fields.track) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return Response.json({ error: "Resume attachment is required." }, { status: 400 });
    }

    const filename = resume.name || "resume";
    const extensionAllowed = /\.(pdf|doc|docx)$/i.test(filename);
    const typeAllowed = !resume.type || allowedResumeTypes.has(resume.type);

    if (!extensionAllowed || !typeAllowed) {
      return Response.json({ error: "Resume must be a PDF or Word document." }, { status: 400 });
    }

    if (resume.size > maxResumeSize) {
      return Response.json({ error: "Resume must be 8MB or smaller." }, { status: 400 });
    }

    const resumeContent = Buffer.from(await resume.arrayBuffer()).toString("base64");
    const emailPayload = {
      from,
      to: [recipient],
      reply_to: fields.email,
      subject: `Internship application: ${fields.fullName} - ${fields.track}`,
      text: buildMessage(fields),
      html: buildHtml(fields),
      attachments: [
        {
          filename,
          content: resumeContent,
        },
      ],
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Internship email submission failed:", detail);
      return Response.json({ error: "Unable to send application right now. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Internship application route failed:", error);
    return Response.json({ error: "Unable to send application right now. Please try again." }, { status: 500 });
  }
}
