import type { CompanyIdKey } from "./types";

// Language-independent company facts. Labels are translated in the site content.

export const CONTACT_EMAIL = "stefan@vibast.ro";

/**
 * Public phone number. Empty until Stefan supplies one; the footer and contact
 * page render it only when it is set. Format it for display, e.g. "+40 7xx xxx xxx".
 */
export const CONTACT_PHONE: string = "";

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
