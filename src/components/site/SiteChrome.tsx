"use client";

import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import type { Locale } from "@/i18n/locales";
import { LanguageBanner } from "./LanguageBanner";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Header + main + footer around every marketing page (docs use their own shell). */
export function SiteChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <Box bg="paper" color="ink" minH="100vh">
      {locale === "en" && <LanguageBanner suggest="ro" />}
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </Box>
  );
}
