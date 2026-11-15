import type { Locale } from "@/i18n/locales";
import type { SiteContent } from "../types";
import { siteEn } from "./en";
import { siteRo } from "./ro";

export const siteContent: Record<Locale, SiteContent> = { en: siteEn, ro: siteRo };
