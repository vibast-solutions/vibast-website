import type { ShellContent } from "@/content/types";

/**
 * "Where are you starting from?" picker values. The form sends the key; the
 * API maps it to an English label for the notification email.
 */
export const STARTING_POINTS = ["new", "existing", "hosting", "unsure"] as const;
export type StartingPoint = (typeof STARTING_POINTS)[number];

/** Every visible string of the contact form, per language. */
export interface ContactFormStrings {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  startingPointLabel: string;
  startingPoints: Record<StartingPoint, string>;
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
  /** Short "what happens next" list shown beside the form. */
  nextSteps: { title: string; items: string[] };
  form: ContactFormStrings;
}
