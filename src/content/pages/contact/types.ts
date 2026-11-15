import type { ShellContent } from "@/content/types";

/** Every visible string of the contact form, per language. */
export interface ContactFormStrings {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  captchaRequired: string;
  captchaMissing: string;
  sendFailed: string;
  sending: string;
  submit: string;
  successTitle: string;
  successBody: string;
  sendAnother: string;
}

export interface ContactPageContent extends ShellContent {
  emailPrompt: string;
  phonePrompt: string;
  form: ContactFormStrings;
}
