import type { RouteKey } from "@/i18n/routes";

// Shared content shapes. Every page has one content file per language
// (src/content/pages/<page>/en.ts and ro.ts) typed with one of these, so both
// languages stay structurally parallel.

/** What goes into <head>: the template adds " | VIBAST Labs" to the title. */
export interface PageMeta {
  /** ≤ ~45 characters, primary phrase first, no brand (the template adds it). */
  title: string;
  /** One or two sentences: benefit, proof, action. Unique per page and language. */
  description: string;
}

/** A call to action pointing at another page. */
export interface PageCta {
  title: string;
  body: string;
  button: string;
  href: RouteKey;
}

/**
 * Minimal page used while a page is being written: H1, one intro line and a
 * "content coming" note. Phase-2 sessions replace it with a richer shape in
 * their own page's content + component files.
 */
export interface ShellContent {
  meta: PageMeta;
  h1: string;
  intro: string;
  /** "Content coming" note. Remove once the page has real sections. */
  placeholder?: string;
  cta?: PageCta;
}

/**
 * The service page template (plan §6). Every section is optional so a page can
 * be filled in step by step; `ServicePage` renders only the sections present.
 */
export interface ServicePageContent extends ShellContent {
  isThisYou?: { title: string; items: string[] };
  whatYouGet?: { title: string; items: { title: string; body: string }[] };
  howItWorks?: { title: string; steps: { title: string; body: string }[] };
  cost?: { title: string; paragraphs: string[] };
  /** The small, low-key "Technologies we use" line. */
  technologies?: { label: string; items: string[] };
  faq?: { title: string; items: { q: string; a: string }[] };
}

/** Site chrome strings (header, footer, language switcher, breadcrumbs). */
export interface SiteContent {
  /** Short page names, used by the nav, breadcrumbs and footer. */
  routeLabels: Record<RouteKey, string>;
  header: {
    homeAria: string;
    navAria: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  languageSwitch: {
    /** Visible label of the link to the other language, e.g. "Română". */
    label: string;
    /** Accessible name, e.g. "Citește pagina în română". */
    aria: string;
  };
  /**
   * Banner offering this language to visitors browsing the other one (shown on
   * English pages to visitors from Romania or with a Romanian browser), written
   * in this language.
   */
  languageBanner: {
    text: string;
    cta: string;
    dismiss: string;
  };
  footer: {
    tagline: string;
    columns: { company: string; services: string; docs: string; contact: string };
    docsLinks: { label: string; href: string }[];
    phoneLabel: string;
    emailLabel: string;
    address: string;
    /** Labels for the company IDs, keyed like COMPANY.ids. */
    idLabels: Record<CompanyIdKey, string>;
  };
  /** Shown in the "content coming" box on pages that are still shells. */
  placeholderTitle: string;
}

export type CompanyIdKey = "vat" | "reg" | "euid" | "cui" | "duns";
