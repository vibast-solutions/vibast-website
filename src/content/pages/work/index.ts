import type { Locale } from "@/i18n/locales";
import type { WorkContent } from "./types";
import { workEn } from "./en";
import { workRo } from "./ro";

export type { WorkContent, WorkEntry, WorkLink, WorkSection } from "./types";

export const workContent: Record<Locale, WorkContent> = { en: workEn, ro: workRo };
