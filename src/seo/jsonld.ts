import type { Locale } from "@/i18n/locales";
import { ROUTES, SITE_URL, absoluteUrl, routeTrail, type RouteKey } from "@/i18n/routes";
import { siteContent } from "@/content/site";
import { COMPANY, CONTACT_EMAIL, CONTACT_PHONE } from "@/content/company";
import { SITE_NAME } from "./metadata";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** The company itself. Rendered on the home page (both languages). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: absoluteUrl(COMPANY.logo),
    email: CONTACT_EMAIL,
    ...(CONTACT_PHONE ? { telephone: CONTACT_PHONE } : {}),
    vatID: COMPANY.vatID,
    taxID: COMPANY.taxID,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.locality,
      addressRegion: COMPANY.address.region,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      ...(CONTACT_PHONE ? { telephone: CONTACT_PHONE } : {}),
      availableLanguage: ["en", "ro"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "ro"],
    publisher: { "@id": ORG_ID },
  };
}

/** Home → … → page, with the page names in the page's language. */
export function breadcrumbJsonLd(key: RouteKey, locale: Locale) {
  const labels = siteContent[locale].routeLabels;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: routeTrail(key).map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: labels[k],
      item: absoluteUrl(ROUTES[k][locale]),
    })),
  };
}
