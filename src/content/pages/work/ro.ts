import type { WorkContent } from "./types";

export const workRo: WorkContent = {
  meta: {
    title: "Proiecte și produse",
    description: "Software construit pentru clienți și produsele pe care le administrăm noi înșine, ca MailBox, email pentru firme, și instrumentul nostru pentru JSON.",
  },
  h1: "Proiecte și produse construite de noi",
  intro: "Am livrat peste 80 de proiecte pentru clienți din toată Uniunea Europeană și încă ne ocupăm de mai mult de jumătate dintre ele. Aici găsești produsele pe care le construim și le administrăm noi înșine.",
  sections: [
    {
      // Proiecte pentru clienți: se adaugă aici când Stefan trimite lista.
      title: "Proiecte pentru clienți",
      entries: [],
    },
    {
      title: "Produse construite și administrate de noi",
      intro: "Produse pe care le-am gândit, le-am construit și le ținem în funcțiune.",
      entries: [
        {
          name: "MailBox",
          summary: "Email profesional pe domeniul firmei tale, cu webmail, filtrare spam și compatibil cu orice aplicație de email. Îți creăm contul și ți-l predăm gata de folosit. Abonamente anuale.",
          link: { label: "Vezi MailBox", route: "mailbox" },
        },
        {
          name: "Instrumentul JSON",
          summary: "Un instrument online gratuit pentru citit JSON. Îl lipești și îl poți formata sau compacta, îl parcurgi ca arbore sau deschizi două variante una lângă alta ca să vezi ce s-a schimbat. Rulează în browser, fără nimic de instalat. Poate afișa și sumele de tokenuri blockchain într-o formă ușor de citit.",
          link: { label: "Deschide json.vibast.ro", url: "https://json.vibast.ro" },
        },
      ],
    },
  ],
  labels: { client: "Client", problem: "Problema", whatWeDid: "Ce am făcut", result: "Rezultatul" },
  cta: {
    title: "Ai un proiect în minte?",
    body: "Spune-ne de unde pornești. Scopul tău, bugetul tău, ritmul tău.",
    button: "Cere o estimare",
    href: "contact",
  },
};
