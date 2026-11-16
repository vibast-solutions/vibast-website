import type { Locale } from "@/i18n/locales";
import type { ServicePageContent } from "@/content/types";
import { blockchainEn } from "./en";
import { blockchainRo } from "./ro";

export const blockchainContent: Record<Locale, ServicePageContent> = { en: blockchainEn, ro: blockchainRo };
