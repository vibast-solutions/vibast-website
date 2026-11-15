import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/locales";
import { ROUTE_KEYS, ROUTES, absoluteUrl } from "@/i18n/routes";

/**
 * Every page in both languages, each with its hreflang alternates (from the
 * same route table the page metadata uses). The /docs and /ro/docs index
 * URLs are redirects and stay out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTE_KEYS.flatMap((key) => {
    const languages = {
      en: absoluteUrl(ROUTES[key].en),
      ro: absoluteUrl(ROUTES[key].ro),
      "x-default": absoluteUrl(ROUTES[key].en),
    };
    return LOCALES.map((locale) => ({
      url: absoluteUrl(ROUTES[key][locale]),
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
