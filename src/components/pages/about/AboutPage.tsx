"use client";

import type { Locale } from "@/i18n/locales";
import { aboutContent } from "@/content/pages/about";
import { PageShell } from "../PageShell";

export function AboutPage({ locale }: { locale: Locale }) {
  return <PageShell routeKey="about" locale={locale} content={aboutContent[locale]} />;
}
