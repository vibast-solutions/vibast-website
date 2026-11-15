import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { hostingMaintenanceEn } from "./en";
import { hostingMaintenanceRo } from "./ro";

export const hostingMaintenanceContent: Record<Locale, ServicePageContent> = { en: hostingMaintenanceEn, ro: hostingMaintenanceRo };
