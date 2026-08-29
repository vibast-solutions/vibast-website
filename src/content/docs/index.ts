import type { DocPage, DocsUi, Locale } from "./types";
import { mailboxRo } from "./mailbox.ro";
import { mailboxEn } from "./mailbox.en";

export * from "./types";
export * from "./shared";

/** Docs chrome strings per locale. */
export const docsUi: Record<Locale, DocsUi> = {
  ro: {
    docsTitle: "Documentație",
    onThisPage: "Pe această pagină",
    languageLabel: "Limbă",
    backToSite: "Înapoi la site",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    toolsHeading: "Instrumente",
  },
  en: {
    docsTitle: "Documentation",
    onThisPage: "On this page",
    languageLabel: "Language",
    backToSite: "Back to site",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toolsHeading: "Tools",
  },
};

/**
 * All documented tools, per locale. Add future tools as extra entries — the
 * sidebar renders each as a sibling top-level entry with nested sections.
 */
export const docsPages: Record<Locale, DocPage[]> = {
  ro: [mailboxRo],
  en: [mailboxEn],
};

export function getDocPage(locale: Locale, slug: string): DocPage | undefined {
  return docsPages[locale].find((p) => p.slug === slug);
}

/** Locale-aware base path: Romanian is prefix-free, English lives under /en. */
export function docsBasePath(locale: Locale): string {
  return locale === "en" ? "/en/docs" : "/docs";
}

export function docPageHref(locale: Locale, slug: string): string {
  return `${docsBasePath(locale)}/${slug}`;
}

/** The same page in the other language (for the RO/EN switch). */
export function alternateHref(locale: Locale, slug: string): string {
  const other: Locale = locale === "en" ? "ro" : "en";
  return docPageHref(other, slug);
}
