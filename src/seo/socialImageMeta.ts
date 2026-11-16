import type { Locale } from "@/i18n/locales";

/** Social preview card (Open Graph + Twitter), one per language. */
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 };

export const SOCIAL_IMAGE_ALT: Record<Locale, string> = {
  en: "VIBAST Labs: software that fits your business, built, hosted and looked after",
  ro: "VIBAST Labs: software potrivit afacerii tale, construit, găzduit și întreținut",
};

/** Route of each language's generated card (EN: src/app/opengraph-image.tsx, RO: src/app/(ro)/ro/social-card.png/route.tsx). */
export const SOCIAL_IMAGE_PATH: Record<Locale, string> = {
  en: "/opengraph-image",
  ro: "/ro/social-card.png",
};
