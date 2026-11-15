import type { Locale } from "@/i18n/locales";
import type { ShellContent } from "@/content/types";
import { aboutEn } from "./en";
import { aboutRo } from "./ro";

export const aboutContent: Record<Locale, ShellContent> = { en: aboutEn, ro: aboutRo };
