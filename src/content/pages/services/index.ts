import type { Locale } from "@/i18n/locales";
import type { ShellContent } from "@/content/types";
import { servicesEn } from "./en";
import { servicesRo } from "./ro";

export const servicesContent: Record<Locale, ShellContent> = { en: servicesEn, ro: servicesRo };
