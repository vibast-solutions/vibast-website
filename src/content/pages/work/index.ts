import type { Locale } from "@/i18n/locales";
import type { ShellContent } from "@/content/types";
import { workEn } from "./en";
import { workRo } from "./ro";

export const workContent: Record<Locale, ShellContent> = { en: workEn, ro: workRo };
