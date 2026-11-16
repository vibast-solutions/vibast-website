import type { Locale } from "./locales";

export const SITE_URL = "https://vibast.ro";

/**
 * Every public page, with its path per language. This table is the single
 * source for the metadata helper (canonical + hreflang), the sitemap, the
 * header nav, the language switcher and the breadcrumbs. RO slugs carry no
 * diacritics. Add a page here first, then create its two `page.tsx` files.
 */
export const ROUTES = {
  home: { en: "/", ro: "/ro" },
  services: { en: "/services", ro: "/ro/servicii" },
  webDevelopment: { en: "/services/web-development", ro: "/ro/servicii/dezvoltare-web" },
  mobileApps: { en: "/services/mobile-apps", ro: "/ro/servicii/aplicatii-mobile" },
  customSoftware: { en: "/services/custom-software", ro: "/ro/servicii/software-personalizat" },
  appModernization: {
    en: "/services/app-modernization",
    ro: "/ro/servicii/preluare-modernizare-aplicatii",
  },
  hostingMaintenance: { en: "/services/hosting-maintenance", ro: "/ro/servicii/hosting-mentenanta" },
  blockchain: { en: "/services/blockchain", ro: "/ro/servicii/blockchain" },
  work: { en: "/work", ro: "/ro/proiecte" },
  about: { en: "/about", ro: "/ro/despre-noi" },
  contact: { en: "/contact", ro: "/ro/contact" },
  mailbox: { en: "/mailbox", ro: "/ro/mailbox" },
  docsMailbox: { en: "/docs/mailbox", ro: "/ro/docs/mailbox" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];

/** The six service pages, in the order they are listed in menus and cards. */
export const SERVICE_KEYS = [
  "webDevelopment",
  "mobileApps",
  "customSoftware",
  "appModernization",
  "hostingMaintenance",
  "blockchain",
] as const satisfies readonly RouteKey[];

/** Breadcrumb parent of each page (home has none; top-level pages sit under home). */
const PARENT: Partial<Record<RouteKey, RouteKey>> = {
  webDevelopment: "services",
  mobileApps: "services",
  customSoftware: "services",
  appModernization: "services",
  hostingMaintenance: "services",
  blockchain: "services",
  docsMailbox: "mailbox",
};

export function routePath(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Page chain from home to `key`, inclusive (home → services → web development). */
export function routeTrail(key: RouteKey): RouteKey[] {
  const trail: RouteKey[] = [];
  let current: RouteKey | undefined = key;
  while (current && current !== "home") {
    trail.unshift(current);
    current = PARENT[current];
  }
  return ["home", ...trail];
}

/** Reverse lookup for the language switcher: which page and language is this path? */
export function matchRoute(pathname: string): { key: RouteKey; locale: Locale } | undefined {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const key of ROUTE_KEYS) {
    for (const locale of ["en", "ro"] as const) {
      if (ROUTES[key][locale] === clean) return { key, locale };
    }
  }
  return undefined;
}

/** Language of a path, from its prefix. */
export function localeOfPath(pathname: string): Locale {
  return pathname === "/ro" || pathname.startsWith("/ro/") ? "ro" : "en";
}
