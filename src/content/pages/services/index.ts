import type { Locale } from "@/i18n/locales";
import type { ServicesHubContent } from "./types";
import { servicesEn } from "./en";
import { servicesRo } from "./ro";

export const servicesContent: Record<Locale, ServicesHubContent> = { en: servicesEn, ro: servicesRo };
