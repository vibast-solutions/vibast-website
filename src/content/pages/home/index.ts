import type { Locale } from "@/i18n/locales";
import { homeEn } from "./en";
import { homeRo } from "./ro";
import type { HomePageContent } from "./types";

export type { CardCopy, HomePageContent } from "./types";

export const homeContent: Record<Locale, HomePageContent> = { en: homeEn, ro: homeRo };
