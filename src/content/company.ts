import type { CompanyIdKey } from "./types";

// Language-independent company facts. Labels are translated in the site content.

export const CONTACT_EMAIL = "stefan@vibast.ro";

/**
 * Public phone number (calls and WhatsApp), formatted for display. The footer,
 * home, about and contact pages render it only when it is set.
 */
export const CONTACT_PHONE: string = "+40 747 026 026";

/** `tel:` link target for CONTACT_PHONE. */
export const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`;

/** WhatsApp chat link for CONTACT_PHONE (wa.me wants digits only). */
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`;

/** When the phone is answered, in UTC. Used for the visible hours and the JSON-LD. */
export const CONTACT_PHONE_HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  opens: "09:00",
  closes: "15:00",
} as const;

export const COMPANY = {
  name: "VIBAST Labs",
  legalName: "VIBAST SOLUTIONS SRL",
  address: {
    street: "B. P. Hasdeu 23",
    locality: "Câmpina",
    region: "Prahova",
    postalCode: "105600",
    country: "RO",
  },
  ids: [
    { key: "vat", value: "RO51459106" },
    { key: "reg", value: "J2025012011008" },
    { key: "euid", value: "ROONRC.J2025012011008" },
    { key: "cui", value: "51317810" },
    { key: "duns", value: "52-396-3698" },
  ] satisfies { key: CompanyIdKey; value: string }[],
  vatID: "RO51459106",
  taxID: "51317810",
  logo: "/vibast-labs-mark-512.png",
} as const;
