import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { webDevelopmentEn } from "./en";
import { webDevelopmentRo } from "./ro";

export const webDevelopmentContent: Record<Locale, ServicePageContent> = { en: webDevelopmentEn, ro: webDevelopmentRo };
