import type { Locale } from "@/i18n/locales";
import type { MailboxContent } from "./types";
import { mailboxEn } from "./en";
import { mailboxRo } from "./ro";

export type { MailboxContent } from "./types";

export const mailboxContent: Record<Locale, MailboxContent> = { en: mailboxEn, ro: mailboxRo };
