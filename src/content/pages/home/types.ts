import type { PageMeta } from "@/content/types";

type ServiceKey =
  | "webDevelopment"
  | "mobileApps"
  | "customSoftware"
  | "appModernization"
  | "hostingMaintenance"
  | "blockchain";

/** A short title + one plain sentence. */
export interface CardCopy {
  title: string;
  body: string;
}

/** Home page copy (plan §5), same shape in both languages. */
export interface HomePageContent {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    emailPrompt: string;
    /** Labels on the hero illustration's three bars (the logo's layers). */
    layers: [string, string, string];
  };
  proof: {
    label: string;
    stats: { value: string; label: string }[];
    /** The fourth proof item ("Clients across the EU"). */
    reach: { value: string; label: string };
  };
  startingPoints: {
    eyebrow: string;
    title: string;
    /** Each card links to a page: new → services hub, stuck → modernization, run → hosting. */
    cards: {
      new: CardCopy & { cta: string };
      stuck: CardCopy & { cta: string };
      run: CardCopy & { cta: string };
    };
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: Record<ServiceKey, CardCopy>;
    more: string;
  };
  range: {
    eyebrow: string;
    title: string;
    items: CardCopy[];
    note: string;
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    steps: CardCopy[];
    payment: string;
  };
  cost: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    items: CardCopy[];
  };
  mailbox: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailPrompt: string;
    phonePrompt: string;
    /** When the phone is answered, shown under the number. */
    phoneHours: string;
    whatsappLabel: string;
  };
}
