import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { appModernizationEn } from "./en";
import { appModernizationRo } from "./ro";

export const appModernizationContent: Record<Locale, ServicePageContent> = { en: appModernizationEn, ro: appModernizationRo };
