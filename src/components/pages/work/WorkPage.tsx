"use client";

import type { Locale } from "@/i18n/locales";
import { workContent } from "@/content/pages/work";
import { PageShell } from "../PageShell";

export function WorkPage({ locale }: { locale: Locale }) {
  return <PageShell routeKey="work" locale={locale} content={workContent[locale]} />;
}
