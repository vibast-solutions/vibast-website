import type { SiteContent } from "../types";

export const siteRo: SiteContent = {
  routeLabels: {
    home: "Acasă",
    services: "Servicii",
    webDevelopment: "Site-uri și aplicații web",
    mobileApps: "Aplicații mobile",
    customSoftware: "Software la comandă",
    appModernization: "Preluare și modernizare aplicații",
    hostingMaintenance: "Hosting și mentenanță",
    blockchain: "Blockchain",
    work: "Proiecte",
    about: "Despre noi",
    contact: "Contact",
    mailbox: "MailBox",
    docsMailbox: "Documentație MailBox",
  },
  header: {
    homeAria: "VIBAST Labs, pagina principală",
    navAria: "Meniu principal",
    cta: "Cere o estimare",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
  },
  languageSwitch: {
    label: "English",
    aria: "Read this page in English",
  },
  languageBanner: {
    text: "Site-ul nostru e disponibil și în română.",
    cta: "Vezi pagina în română",
    dismiss: "Închide",
  },
  footer: {
    tagline: "Software potrivit afacerii tale. Îl construim, îl găzduim și avem grijă de el.",
    columns: { company: "Companie", services: "Servicii", docs: "Documentație", contact: "Contact" },
    docsLinks: [
      { label: "MailBox (Română)", href: "/ro/docs/mailbox" },
      { label: "MailBox (English)", href: "/docs/mailbox" },
    ],
    phoneLabel: "Telefon",
    emailLabel: "Email",
    address: "Str. B. P. Hasdeu 23, Câmpina, Prahova, România",
    idLabels: {
      vat: "Cod TVA",
      reg: "Nr. Reg. Com.",
      euid: "EUID",
      cui: "CUI",
      duns: "D-U-N-S",
    },
  },
  placeholderTitle: "Scriem această pagină",
};
