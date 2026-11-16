/** Site languages. English is unprefixed; Romanian lives under /ro. */
export type Locale = "en" | "ro";

export const LOCALES: Locale[] = ["en", "ro"];

export const DEFAULT_LOCALE: Locale = "en";

/** Open Graph locale tags. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", ro: "ro_RO" };

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ro" : "en";
}
