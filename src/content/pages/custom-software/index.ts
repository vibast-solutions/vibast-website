import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { customSoftwareEn } from "./en";
import { customSoftwareRo } from "./ro";

export const customSoftwareContent: Record<Locale, ServicePageContent> = { en: customSoftwareEn, ro: customSoftwareRo };
