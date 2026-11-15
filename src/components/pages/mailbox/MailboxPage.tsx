"use client";

import type { Locale } from "@/i18n/locales";
import { mailboxContent } from "@/content/pages/mailbox";
import { PageShell } from "../PageShell";

export function MailboxPage({ locale }: { locale: Locale }) {
  return <PageShell routeKey="mailbox" locale={locale} content={mailboxContent[locale]} />;
}
