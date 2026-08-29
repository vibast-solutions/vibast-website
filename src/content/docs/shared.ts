// Locale-independent data shared by both language variants of the MailBox docs.
// Numbers and technical values live here once so RO and EN can never drift apart.

import type { Locale } from "./types";

export const PANEL_URL = "https://mailbox.vibast.ro";
export const PANEL_HOST = "mailbox.vibast.ro";
export const CONTACT_EMAIL = "stefan@vibast.ro";
/** Contact form anchor on the marketing home page. */
export const CONTACT_ANCHOR = "/#cta";

/** Sentinel used by tier limits that are unlimited (localized at render time). */
export const UNLIMITED = "∞_UNLIMITED";

export interface Tier {
  id: string;
  /** EUR per year. */
  price: number;
  storage: string;
  domains: string;
  mailboxes: string;
  forwarders: string;
  pointers: string;
  featured?: boolean;
  /** Custom tier has no fixed limits — rendered as a call-to-action instead. */
  custom?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: "basic",
    price: 18,
    storage: "1 GB",
    domains: "20",
    mailboxes: "100",
    forwarders: "100",
    pointers: "10",
  },
  {
    id: "premium",
    price: 29,
    storage: "5 GB",
    domains: "100",
    mailboxes: "200",
    forwarders: "200",
    pointers: "100",
    featured: true,
  },
  {
    id: "ultra",
    price: 39,
    storage: "10 GB",
    domains: UNLIMITED,
    mailboxes: UNLIMITED,
    forwarders: UNLIMITED,
    pointers: UNLIMITED,
  },
  {
    id: "custom",
    price: 0,
    storage: UNLIMITED,
    domains: UNLIMITED,
    mailboxes: UNLIMITED,
    forwarders: UNLIMITED,
    pointers: UNLIMITED,
    custom: true,
  },
];

export function formatPrice(tier: Tier, locale: Locale): string {
  return locale === "ro" ? `${tier.price} € / an` : `€${tier.price} / year`;
}
