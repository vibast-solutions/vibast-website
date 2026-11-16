import type { Locale } from "./locales";

/**
 * The language a visitor picked explicitly (language switcher or the language
 * banner), kept in localStorage. Once set, the banner never shows again.
 * Storage can be unavailable (private mode, blocked site data), so every access
 * is guarded and a failure just means "no choice recorded".
 */
const KEY = "vibast-locale-choice";

export function loadLocaleChoice(): Locale | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "en" || value === "ro" ? value : null;
  } catch {
    return null;
  }
}

export function saveLocaleChoice(locale: Locale): void {
  try {
    window.localStorage.setItem(KEY, locale);
  } catch {
    // Storage unavailable: the banner may show again on the next visit.
  }
}
