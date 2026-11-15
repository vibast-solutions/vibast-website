"use client";

import type { Locale } from "@/i18n/locales";
import { servicesContent } from "@/content/pages/services";
import { PageShell } from "../PageShell";

export function ServicesHubPage({ locale }: { locale: Locale }) {
  return <PageShell routeKey="services" locale={locale} content={servicesContent[locale]} />;
}
