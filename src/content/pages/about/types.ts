import type { ShellContent } from "@/content/types";

/** The About page: who we are, the numbers, how we think, how we work, company details. */
export interface AboutContent extends ShellContent {
  whoWeAre: { title: string; paragraphs: string[] };
  /** Proof row. Only the numbers from the plan's facts. */
  stats: { value: string; label: string }[];
  howWeThink: { title: string; items: { title: string; body: string }[] };
  howWeWork: { title: string; intro: string; items: string[]; note: string };
  /** Labels for the company details block; the values come from `@/content/company`. */
  companyDetails: {
    title: string;
    brandLabel: string;
    legalNameLabel: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
