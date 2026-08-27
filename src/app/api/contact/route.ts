import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Interim implementation: sends the contact notification straight through AWS SES.
// Will be replaced by the shared notifications service (ms-go-notifications) later.
let sesClient: SESv2Client | null = null;

// Env values sometimes arrive with surrounding quotes or CR/LF (PM2 ecosystem files, Windows edits).
// Any such character ends up in the SigV4 Authorization header and Node rejects the request with
// "Invalid character in header content [\"authorization\"]". Sanitize defensively.
function cleanEnv(name: string): string | undefined {
  const raw = process.env[name];
  if (raw === undefined) return undefined;
  const v = raw.trim().replace(/^["']|["']$/g, "").trim();
  return v.length ? v : undefined;
}

function getSesClient(region: string): SESv2Client {
  if (!sesClient) {
    const accessKeyId = cleanEnv("AWS_ACCESS_KEY_ID");
    const secretAccessKey = cleanEnv("AWS_SECRET_ACCESS_KEY");
    sesClient = new SESv2Client({
      region,
      // Pass explicit (sanitized) credentials when provided; otherwise fall back to the SDK's
      // default provider chain (instance role, shared config, …).
      ...(accessKeyId && secretAccessKey ? { credentials: { accessKeyId, secretAccessKey } } : {}),
    });
  }
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
    const region = cleanEnv("AWS_REGION");
    const fromEmail = cleanEnv("SES_FROM_EMAIL");
    const contactEmail = cleanEnv("CONTACT_EMAIL");
    if (!region || !fromEmail || !contactEmail) {
      console.error("AWS_REGION / SES_FROM_EMAIL / CONTACT_EMAIL not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");
    const ses = getSesClient(region);

    // 1) Notification to us (must succeed). Reply-To lets us answer directly.
    console.log("Attempting to send notification email...");
    const result = await ses.send(
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

    // 2) Confirmation copy to the visitor (best-effort: a bad visitor address must not fail
    //    the request once we have the notification). Requires SES production access.
    try {
      const confirmation = await ses.send(
        new SendEmailCommand({
          FromEmailAddress: `VIBAST Labs <${fromEmail}>`,
          Destination: { ToAddresses: [email] },
          ReplyToAddresses: [contactEmail],
          Content: {
            Simple: {
              Subject: { Data: "We received your message - VIBAST Labs", Charset: "UTF-8" },
              Body: {
                Text: {
                  Data: `Hi ${name},\n\nThank you for reaching out to VIBAST Labs. We've received your message and will get back to you as soon as possible.\n\nHere's a copy of your message:\n\n${message}\n\nBest regards,\nVIBAST Labs\nhttps://vibast.ro`,
                  Charset: "UTF-8",
                },
                Html: {
                  Data: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #102a43;">Thanks for reaching out</h2>
          <p>Hi ${safeName},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="background: #f3f4f6; padding: 16px; border-left: 4px solid #c9a227; margin: 16px 0;">
            ${safeMessage}
          </blockquote>
          <p>Best regards,<br><strong>VIBAST Labs</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #627d98; font-size: 14px;">
            <a href="https://vibast.ro" style="color: #c9a227;">vibast.ro</a>
          </p>
        </div>`,
                  Charset: "UTF-8",
                },
              },
            },
          },
        })
      );
      console.log("Confirmation email accepted by SES, message id:", confirmation.MessageId);
    } catch (confirmError: unknown) {
      const e = confirmError as { name?: string; message?: string };
      console.warn("Confirmation email failed (ignored):", e?.name, e?.message);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    if (error && typeof error === "object" && "name" in error) {
      const awsError = error as { name?: string; message?: string; $metadata?: unknown };
      console.error("SES error:", awsError.name, awsError.message, JSON.stringify(awsError.$metadata));
      if (String(awsError.message).includes("Invalid character in header content")) {
        const id = process.env.AWS_ACCESS_KEY_ID ?? "";
        console.error(
          "Hint: AWS_ACCESS_KEY_ID or AWS_REGION contains an invalid character (quotes/CR/space).",
          `AWS_ACCESS_KEY_ID length=${id.length} starts=${JSON.stringify(id.slice(0, 4))} ends=${JSON.stringify(id.slice(-2))}`,
          `AWS_REGION=${JSON.stringify(process.env.AWS_REGION)}`
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
