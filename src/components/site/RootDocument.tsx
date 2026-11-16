import type { ReactNode } from "react";
import type { Viewport } from "next";
import { brand } from "@/brand";
import { manrope } from "@/app/fonts";
import { Providers } from "@/app/providers";
import type { Locale } from "@/i18n/locales";

export const rootViewport: Viewport = {
  themeColor: brand.ink,
};

/**
 * The <html> document shared by the two root layouts, app/(en) and app/(ro).
 * Each language has its own root layout so `<html lang>` is right in the
 * static HTML, without middleware.
 */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={manrope.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
