import type { MailboxContent } from "./types";

export const mailboxRo: MailboxContent = {
  meta: {
    title: "MailBox: email profesional pe domeniul tău",
    description: "Email profesional pe domeniul firmei tale, cu webmail, filtrare spam și abonamente anuale de la 18 €. Îl configurăm noi și ți-l predăm gata de folosit.",
  },
  h1: "MailBox: email profesional pe domeniul tău",
  intro: "Email profesional pe domeniul firmei tale, cu webmail și filtrare spam. Îl configurăm noi și ți-l predăm gata de folosit.",
  heroLinks: [
    { label: "Cere MailBox", route: "contact" },
    { label: "Citește documentația", route: "docsMailbox" },
  ],
  forWho: {
    title: "Ți se potrivește?",
    items: [
      "Firma ta încă scrie de pe o adresă gratuită și vrei una pe domeniul tău.",
      "Ai nevoie de adrese pentru echipă și de adrese comune, ca office@ sau vanzari@.",
      "Ai mai multe domenii și vrei ca emailurile de pe toate să ajungă în aceleași căsuțe.",
      "Vii de la alt furnizor de email și vrei să-ți păstrezi mesajele vechi.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "Email pe domeniul tău",
        body: "Adrese de forma nume@firmata.ro, pentru toată echipa.",
      },
      {
        title: "Webmail",
        body: "Citești și trimiți emailuri din orice browser, fără nicio configurare.",
      },
      {
        title: "Merge cu aplicațiile tale de email",
        body: "Outlook, Apple Mail, Thunderbird sau aplicația de pe telefon, cu mesajele sincronizate pe toate dispozitivele.",
      },
      {
        title: "Filtrare spam",
        body: "Emailurile primite sunt verificate înainte să ajungă la tine, așa că inboxul rămâne curat.",
      },
      {
        title: "Adrese comune și răspuns automat",
        body: "Trimiți office@ sau vanzari@ către una sau mai multe căsuțe și pornești un mesaj automat când ești plecat.",
      },
      {
        title: "Un singur panou de control",
        body: "Adaugi căsuțe, schimbi parole, îți administrezi domeniile și redirecționările, totul dintr-un singur loc.",
      },
    ],
  },
  plans: {
    title: "Abonamente",
    intro: "Toate abonamentele se plătesc anual. Ai nevoie de alte limite? Spune-ne ce-ți trebuie și îți facem o ofertă.",
    perYear: "pe an",
    featured: "Recomandat",
    unlimited: "Nelimitat",
    rows: {
      storage: "Spațiu",
      domains: "Domenii",
      mailboxes: "Căsuțe de email",
      forwarders: "Adrese de redirecționare",
      pointers: "Domenii în plus pe aceleași căsuțe",
    },
    custom: {
      title: "Personalizat",
      body: "Fără limite fixe. Spune-ne de cât spațiu, câte domenii și câte căsuțe ai nevoie, iar noi îți facem o ofertă.",
      button: "Cere o ofertă",
    },
  },
  howToStart: {
    title: "Cum începi",
    steps: [
      {
        title: "Spune-ne de ce ai nevoie",
        body: "Scrie-ne prin formularul de contact sau pe email. Alegi un abonament sau ne spui ce limite îți trebuie și îți facem o ofertă.",
      },
      {
        title: "Îți creăm contul",
        body: "Nu există înregistrare online. Îți configurăm contul și îți trimitem datele de acces.",
      },
      {
        title: "Îți conectezi domeniul",
        body: "Panoul de control îți arată exact ce înregistrări trebuie adăugate acolo unde ai cumpărat domeniul. Documentația te ghidează pas cu pas.",
      },
      {
        title: "Începi să scrii",
        body: "Folosești webmailul sau aplicația ta de email preferată. Ai mult email vechi de mutat? Te ajutăm și cu asta.",
      },
    ],
  },
  docs: {
    title: "Vrei detalii?",
    body: "Abonamentele, webmailul, înregistrările de domeniu și configurarea aplicațiilor de email sunt explicate în documentație.",
    button: "Citește documentația",
  },
  cta: {
    title: "Vrei email pe domeniul tău?",
    body: "Spune-ne ce abonament vrei sau de ce ai nevoie. Îl configurăm și ți-l predăm gata de folosit.",
    button: "Cere MailBox",
    href: "contact",
  },
};
