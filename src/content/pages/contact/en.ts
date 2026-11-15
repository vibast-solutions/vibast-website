import type { ContactPageContent } from "./types";

export const contactEn: ContactPageContent = {
  meta: {
    title: "Contact Us: Get a Project Estimate",
    description:
      "Tell us what you need and where you're starting from. We'll come back with questions or a first estimate. No obligation.",
  },
  h1: "Get a project estimate",
  intro: "Tell us what you need and where you're starting from. We'll come back with questions or a first estimate.",
  emailPrompt: "Or email us directly",
  phonePrompt: "Or call us",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    captchaRequired: "Please complete the captcha",
    captchaMissing: "Captcha is not configured; the form is temporarily unavailable.",
    sendFailed: "Failed to send message",
    sending: "Sending...",
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out. We'll get back to you as soon as possible.",
    sendAnother: "Send another message",
  },
};
