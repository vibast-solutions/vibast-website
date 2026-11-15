import type { ServicePageContent } from "@/content/types";

// Cuvânt-cheie principal: „dezvoltare blockchain”.

export const blockchainRo: ServicePageContent = {
  meta: {
    title: "Dezvoltare blockchain la comandă",
    description: "Blockchain-uri, smart contracts și portofele digitale, construite cu aceeași grijă ca restul software-ului nostru. Îți spunem și când nu ai nevoie de blockchain.",
  },
  h1: "Dezvoltare blockchain, atunci când produsul tău chiar are nevoie",
  intro: "Blockchain-uri, smart contracts și portofele digitale, construite cu aceeași grijă ca restul software-ului nostru. Iar dacă o bază de date obișnuită face treaba mai bine, îți spunem.",
  isThisYou: {
    title: "Te regăsești aici?",
    items: [
      "Produsul tău are nevoie de propriul blockchain sau de funcții care rulează pe unul existent.",
      "Ai nevoie de smart contracts care gestionează bani sau active, și trebuie să fie corecte din prima.",
      "Utilizatorii tăi au nevoie de un portofel sau de o aplicație ca să-ți folosească rețeaua sau tokenul.",
      "Nu ești sigur că blockchain-ul e potrivit și vrei un răspuns direct.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "Blockchain-uri și smart contracts la comandă",
        body: "Un blockchain construit pe regulile produsului tău sau smart contracts pe o rețea existentă, verificate și testate înainte să gestioneze ceva de valoare.",
      },
      {
        title: "Portofele și aplicații ușor de folosit",
        body: "Portofele, extensii de browser și aplicații web sau mobile care fac rețeaua ta simplu de folosit și pentru cei care nu sunt experți.",
      },
      {
        title: "Aceeași rigoare tehnică",
        body: "Planuri clare, teste, verificări și lansări atente, la fel ca la tot ce construim, plus hosting și mentenanță după lansare, dacă vrei.",
      },
    ],
  },
  howItWorks: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "Vedem dacă se potrivește",
        body: "Discutăm ce vrei să obții și dacă blockchain-ul te ajută cu adevărat. Dacă nu, îți propunem ceva mai simplu.",
      },
      {
        title: "Plănuim și construim",
        body: "Un plan clar, apoi lucrul în etape scurte, cu versiuni pe care le poți încerca întâi pe o rețea de test.",
      },
      {
        title: "Lansăm și avem grijă de el",
        body: "O lansare atentă, apoi actualizări, monitorizare și suport, cât timp ai nevoie.",
      },
    ],
  },
  cost: {
    title: "Cât costă și cum lucrăm împreună",
    paragraphs: [
      "Nu avem o listă fixă de prețuri: depinde de ce ai nevoie. Avem deja multe lucruri construite, așa că nu plătești din nou pentru ele, iar noi găsim soluția potrivită și pentru nevoia ta, și pentru bugetul tău.",
      "Plătești cum îți convine: preț fix, lunar, la oră, pe livrabile sau lucrând alături de echipa ta.",
    ],
  },
  technologies: {
    label: "Tehnologii pe care le folosim",
    items: ["Cosmos SDK", "CosmWasm", "EVM", "Go", "TypeScript", "React", "Flutter"],
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Chiar avem nevoie de blockchain?",
        a: "De multe ori, nu. Dacă o bază de date obișnuită și o aplicație bine făcută rezolvă problema, e mai ieftin și mai simplu, și îți spunem asta.",
      },
      {
        q: "Lucrați doar cu blockchain?",
        a: "Nu. Suntem o firmă de software, iar blockchain-ul e unul dintre lucrurile pe care le construim. Aceeași echipă face site-uri, aplicații și sistemele din spatele lor.",
      },
      {
        q: "Puteți lucra pe un blockchain sau un contract care există deja?",
        a: "Da. Îl putem analiza, putem repara ce e riscant și putem construi mai departe pe el, la fel cum preluăm orice alt software.",
      },
    ],
  },
  cta: {
    title: "Ai un proiect în minte?",
    body: "Spune-ne de unde pornești. Revenim cu întrebări sau cu o primă estimare.",
    button: "Cere o estimare",
    href: "contact",
  },
};
