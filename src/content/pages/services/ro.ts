import type { ServicesHubContent } from "./types";

// Fraza principală: „servicii de dezvoltare software”.

export const servicesRo: ServicesHubContent = {
  meta: {
    title: "Servicii de dezvoltare software",
    description: "Site-uri, aplicații mobile, software la comandă, preluare de aplicații, hosting și blockchain. Pornim de unde ești și găsim varianta potrivită bugetului tău.",
  },
  h1: "Servicii de dezvoltare software pentru fiecare etapă a proiectului tău",
  intro: "Site-uri, aplicații mobile și desktop, programe interne și infrastructura din spatele lor. Le construim, le găzduim și avem grijă de ele, fie că pornești de la zero, fie că ai deja ceva ce trebuie reparat.",
  startingPoints: {
    title: "De unde pornești?",
    lead: "Aproape orice proiect începe dintr-unul din aceste trei locuri. Alege-l pe al tău și continuăm de acolo.",
    items: [
      {
        title: "Ceva nou",
        body: "Ai o idee, un proces care merge pe Excel sau o firmă care are nevoie de un site, de un magazin online sau de o aplicație. Te ajutăm să-i dai formă, apoi livrăm prima versiune în 2–6 săptămâni.",
        link: "Vezi ce construim",
        href: null,
      },
      {
        title: "O aplicație blocată",
        body: "Programatorul a plecat, nimeni nu mai îndrăznește să se atingă de cod sau vrei doar o a doua părere. O analizăm, păstrăm ce merge și reparăm ce e riscant, de obicei fără s-o luăm de la capăt.",
        link: "Cere o analiză a aplicației",
        href: "appModernization",
      },
      {
        title: "Pune-o pe picioare și ține-o în funcțiune",
        body: "Ai un program sau o aplicație și ai nevoie ca cineva s-o găzduiască, s-o actualizeze și s-o supravegheze. O ținem pe un hosting pe măsura ei, ca să nu plătești pentru capacitate pe care n-o folosești.",
        link: "Hosting și mentenanță",
        href: "hostingMaintenance",
      },
    ],
  },
  services: {
    title: "Ce construim",
    lead: "Șase servicii, o singură echipă. Cei mai mulți clienți folosesc mai multe: construim aplicația, apoi o găzduim și o ținem la zi.",
    linkLabel: "Află mai multe",
    items: {
      webDevelopment: {
        title: "Site-uri, aplicații web și magazine online",
        body: "De la un site de prezentare simplu la un magazin online sau o aplicație web folosită de mii de oameni.",
      },
      mobileApps: {
        title: "Aplicații mobile",
        body: "O singură aplicație pentru iPhone și Android, pe care clienții sau echipa ta chiar o folosesc.",
      },
      customSoftware: {
        title: "Software la comandă și integrări",
        body: "Programe interne, aplicații desktop și legături între sistemele pe care le folosești deja, ca echipa ta să nu mai copieze date de mână.",
      },
      appModernization: {
        title: "Preluare și modernizare aplicații",
        body: "Preluăm aplicații lăsate în urmă de alte echipe, le analizăm și le aducem la zi.",
      },
      hostingMaintenance: {
        title: "Hosting și mentenanță",
        body: "Găzduire potrivită aplicației și bugetului tău, cu actualizări, backup și monitorizare de care ne ocupăm noi.",
      },
      blockchain: {
        title: "Blockchain",
        body: "Rețele blockchain, portofele și aplicațiile care se conectează la ele, atunci când un blockchain e unealta potrivită.",
      },
    },
  },
  approach: {
    title: "Același mod de lucru, orice ți-ar trebui",
    items: [
      "De la un program pentru o echipă de cinci oameni la o platformă pentru mii de utilizatori.",
      "Uneori, cel mai bun răspuns e un instrument existent, configurat cum trebuie. Îți spunem când nu ai nevoie de software la comandă.",
      "Avem deja multe lucruri construite, iar partea aceea nu o mai plătești încă o dată.",
      "Preț fix, abonament lunar, plată pe oră sau pe livrabil. Chiar și un site mic se poate plăti lunar.",
      "Specialiști cu experiență într-una dintre cele mai mari companii din Europa, care lucrează cu clienți din toată Uniunea Europeană.",
    ],
  },
  cta: {
    title: "Ai un proiect în minte?",
    body: "Spune-ne de unde pornești. Scopul tău, bugetul tău, ritmul tău.",
    button: "Cere o estimare",
    href: "contact",
  },
};
