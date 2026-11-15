import type { Locale } from "@/i18n/locales";
import type { AboutContent } from "./types";
import { aboutEn } from "./en";
import { aboutRo } from "./ro";

export type { AboutContent } from "./types";

export const aboutContent: Record<Locale, AboutContent> = { en: aboutEn, ro: aboutRo };
