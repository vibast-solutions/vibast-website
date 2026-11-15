import type { Metadata } from "next";
import { OG_LOCALE, otherLocale, type Locale } from "@/i18n/locales";
import { ROUTES, SITE_URL, absoluteUrl, type RouteKey } from "@/i18n/routes";
import type { PageMeta } from "@/content/types";

export const SITE_NAME = "VIBAST Labs";

// The generated social images (src/app/opengraph-image.tsx, twitter-image.tsx).
// A page that sets `openGraph`/`twitter` replaces the inherited objects, file
// images included, so the helper lists them explicitly.
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "VIBAST Labs" };
const TWITTER_IMAGE = { url: "/twitter-image", width: 1200, height: 630, alt: "VIBAST Labs" };
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

/**
 * hreflang map for a page: both languages plus x-default → English. Built from
 * the route table, so every pair is reciprocal by construction.
 */
export function languageAlternates(key: RouteKey): Record<string, string> {
  return {
    en: ROUTES[key].en,
    ro: ROUTES[key].ro,
    "x-default": ROUTES[key].en,
  };
}

/**
 * Metadata for one page in one language. Every page exports the result of this
 * helper, so nothing inherits the layout's canonical, Open Graph or Twitter tags.
 *
 * `absoluteTitle` skips the "| VIBAST Labs" template (the docs titles already
 * carry their own brand suffix).
 */
export function pageMetadata(
  key: RouteKey,
  locale: Locale,
  meta: PageMeta,
  options: { absoluteTitle?: boolean } = {},
): Metadata {
  const path = ROUTES[key][locale];
  const fullTitle = options.absoluteTitle ? meta.title : TITLE_TEMPLATE.replace("%s", meta.title);
  return {
    title: options.absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: languageAlternates(key),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: absoluteUrl(path),
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[otherLocale(locale)]],
      title: fullTitle,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: meta.description,
      images: [TWITTER_IMAGE],
      creator: "@vibastlabs",
    },
  };
}

/** Defaults shared by both root layouts. Pages override title/description/alternates. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: TITLE_TEMPLATE },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
