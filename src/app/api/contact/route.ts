import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Interim implementation: sends the contact notification straight through AWS SES.
// Will be replaced by the shared notifications service (ms-go-notifications) later.
let sesClient: SESv2Client | null = null;
function getSesClient(region: string): SESv2Client {
  if (!sesClient) sesClient = new SESv2Client({ region });
  return sesClient;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  console.log("Contact form API called");

  try {
    const { name, email, message, turnstileToken, website } = await request.json();
    console.log("Received contact form submission from:", email);

    // Honeypot: real users never fill this hidden field. Pretend success so bots don't adapt.
    if (website) {
      console.warn("Honeypot triggered, dropping submission");
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }
    if (String(name).length > 200 || String(message).length > 5000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Verify Cloudflare Turnstile captcha
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not configured");
      return NextResponse.json(
        { error: "Captcha service not configured" },
        { status: 500 }
      );
    }

    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Please complete the captcha" },
        { status: 400 }
      );
    }

    const remoteIp =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      undefined;

    const verifyBody = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });
    if (remoteIp) verifyBody.set("remoteip", remoteIp);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: verifyBody }
    );
    const verifyData = (await verifyRes.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verifyData.success) {
      console.warn("Turnstile verification failed:", verifyData["error-codes"]);
      return NextResponse.json(
        { error: "Captcha verification failed, please try again" },
        { status: 400 }
      );
    }

    // Check for required env vars
    const region = process.env.AWS_REGION;
    const fromEmail = process.env.SES_FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!region || !fromEmail || !contactEmail) {
      console.error("AWS_REGION / SES_FROM_EMAIL / CONTACT_EMAIL not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Notification to us only. No auto-reply to the visitor (abuse vector, and SES sandbox
    // only delivers to verified addresses). Reply-To lets us answer directly.
    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

    console.log("Attempting to send notification email...");
    const result = await getSesClient(region).send(
      new SendEmailCommand({
        FromEmailAddress: `VIBAST Labs Contact <${fromEmail}>`,
        Destination: { ToAddresses: [contactEmail] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `New contact from ${name} via vibast.ro`, Charset: "UTF-8" },
            Body: {
              Text: {
                Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                Charset: "UTF-8",
              },
              Html: {
                Data: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <h3>Message:</h3>
        <p>${safeMessage}</p>`,
                Charset: "UTF-8",
              },
            },
          },
        },
      })
    );
    console.log("Notification email accepted by SES, message id:", result.MessageId);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    if (error && typeof error === "object" && "name" in error) {
      const awsError = error as { name?: string; message?: string; $metadata?: unknown };
      console.error("SES error:", awsError.name, awsError.message, JSON.stringify(awsError.$metadata));
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
