import type { Locale } from "@/i18n/locales";
import { contactEn } from "./en";
import { contactRo } from "./ro";
import type { ContactPageContent } from "./types";

export type { ContactFormStrings, ContactPageContent } from "./types";

export const contactContent: Record<Locale, ContactPageContent> = { en: contactEn, ro: contactRo };
