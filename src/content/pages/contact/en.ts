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
  nextSteps: {
    title: "What happens next",
    items: [
      "We read your message and come back with questions or a first estimate.",
      "If it helps, we set up a short call to understand what you need.",
      "You get a proposal that fits your scope and budget. No obligation.",
    ],
  },
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    startingPointLabel: "Where are you starting from?",
    startingPoints: {
      new: "New project",
      existing: "Existing app",
      hosting: "Hosting or setup",
      unsure: "Not sure",
    },
    captchaRequired: "Please complete the captcha",
    captchaMissing: "Captcha is not configured; the form is temporarily unavailable.",
    sendFailed: "Failed to send message",
    sending: "Sending...",
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out. We'll come back with questions or a first estimate.",
    sendAnother: "Send another message",
  },
};
