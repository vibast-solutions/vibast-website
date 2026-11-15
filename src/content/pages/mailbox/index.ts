import type { Locale } from "@/i18n/locales";
import type { ShellContent } from "@/content/types";
import { mailboxEn } from "./en";
import { mailboxRo } from "./ro";

export const mailboxContent: Record<Locale, ShellContent> = { en: mailboxEn, ro: mailboxRo };
