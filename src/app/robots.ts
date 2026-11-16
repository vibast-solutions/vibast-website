import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/routes";

/**
 * Crawl everything except the contact API, and point crawlers at the sitemap.
 * Cloudflare's managed robots.txt (AI-crawler rules) is prepended to this at
 * the edge, so this file only needs the site's own rules.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
