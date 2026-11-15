import type { SiteContent } from "../types";

export const siteEn: SiteContent = {
  routeLabels: {
    home: "Home",
    services: "Services",
    webDevelopment: "Websites & web apps",
    mobileApps: "Mobile apps",
    customSoftware: "Custom software",
    appModernization: "App takeover & modernization",
    hostingMaintenance: "Hosting & maintenance",
    blockchain: "Blockchain",
    work: "Work",
    about: "About",
    contact: "Contact",
    mailbox: "MailBox",
    docsMailbox: "MailBox docs",
  },
  header: {
    homeAria: "VIBAST Labs home",
    navAria: "Main",
    cta: "Get a project estimate",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  languageSwitch: {
    label: "Română",
    aria: "Citește această pagină în română",
  },
  footer: {
    tagline: "Software that fits your business. Built, hosted and looked after by us.",
    columns: { company: "Company", services: "Services", docs: "Docs", contact: "Contact" },
    docsLinks: [
      { label: "MailBox (English)", href: "/docs/mailbox" },
      { label: "MailBox (Română)", href: "/ro/docs/mailbox" },
    ],
    phoneLabel: "Phone",
    emailLabel: "Email",
    address: "B. P. Hasdeu 23, Câmpina, Prahova, Romania",
    idLabels: {
      vat: "VAT No.",
      reg: "Reg. No.",
      euid: "EUID",
      cui: "CUI",
      duns: "D-U-N-S",
    },
  },
  placeholderTitle: "We're writing this page",
};
