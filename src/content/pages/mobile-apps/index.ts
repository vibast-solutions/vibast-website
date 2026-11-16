import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { mobileAppsEn } from "./en";
import { mobileAppsRo } from "./ro";

export const mobileAppsContent: Record<Locale, ServicePageContent> = { en: mobileAppsEn, ro: mobileAppsRo };
