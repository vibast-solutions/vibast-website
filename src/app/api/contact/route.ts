import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

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
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!process.env.SENDGRID_FROM_EMAIL || !process.env.CONTACT_EMAIL) {
      console.error("Email addresses not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Email to you (notification)
    const notificationEmail = {
      to: contactEmail,
      from: fromEmail, // Must be verified sender in SendGrid
      replyTo: email,
      subject: `New contact from ${name} via vibast.ro`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Confirmation email to the sender
    const confirmationEmail = {
      to: email,
      from: fromEmail, // Must be verified sender in SendGrid
      subject: "We received your message - VIBAST Labs",
      text: `Hi ${name},\n\nThank you for reaching out to VIBAST Labs. We've received your message and will get back to you as soon as possible.\n\nHere's a copy of your message:\n\n${message}\n\nBest regards,\nVIBAST Labs\nhttps://vibast.ro`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #102a43;">Thanks for reaching out</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="background: #f3f4f6; padding: 16px; border-left: 4px solid #c9a227; margin: 16px 0;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <p>Best regards,<br><strong>VIBAST Labs</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #627d98; font-size: 14px;">
            <a href="https://vibast.ro" style="color: #c9a227;">vibast.ro</a>
          </p>
        </div>
      `,
    };

    // Send both emails
    console.log("Attempting to send emails...");
    const [notificationResponse, confirmationResponse] = await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(confirmationEmail),
    ]);
    console.log("Notification email status:", notificationResponse[0].statusCode);
    console.log("Confirmation email status:", confirmationResponse[0].statusCode);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    // Log SendGrid specific error details
    if (error && typeof error === "object" && "response" in error) {
      const sgError = error as { response?: { body?: unknown } };
      console.error("SendGrid error body:", JSON.stringify(sgError.response?.body, null, 2));
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
