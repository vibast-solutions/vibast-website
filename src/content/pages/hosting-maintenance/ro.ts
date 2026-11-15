import type { ServicePageContent } from "@/content/types";

// Cuvânt-cheie principal: „hosting și mentenanță aplicații”.

export const hostingMaintenanceRo: ServicePageContent = {
  meta: {
    title: "Hosting și mentenanță aplicații",
    description: "Un server simplu pentru o aplicație mică, cloud de nivel enterprise când ai nevoie. O ținem la zi și îi facem backup. Plătești doar ce folosești.",
  },
  h1: "Hosting și mentenanță care îți țin aplicația în funcțiune",
  intro: "Găzduim acolo unde are sens: un server simplu pentru o aplicație mică, cloud de nivel enterprise când ai nevoie. Nu plătești pentru capacitate pe care n-o folosești. Hosting și mentenanță pentru aplicații, cu oameni care chiar au grijă de ele.",
  isThisYou: {
    title: "Te regăsești aici?",
    items: [
      "Ai nevoie de un instrument pentru echipa ta și ai prefera să-l primești instalat și funcțional, nu construit de la zero.",
      "Aplicația ta stă pe un server de care nu se ocupă nimeni cu adevărat și nu știi sigur dacă backup-urile funcționează.",
      "Plătești pentru hosting pe care nu-l folosești pe deplin sau site-ul merge greu când vin mai mulți vizitatori.",
      "Actualizările și reparațiile de securitate tot se amână, pentru că nimeni n-are timp de ele.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "Instrumentul potrivit, configurat cum trebuie",
        body: "Uneori cea mai bună soluție e un instrument care există deja, configurat cum trebuie. Îți spunem când nu ai nevoie de software la comandă, apoi ți-l instalăm și ți-l configurăm.",
      },
      {
        title: "Hosting pe măsura ta",
        body: "De la câțiva euro pe lună pentru o aplicație mică până la cloud de nivel enterprise pentru trafic mare. Crește doar când crește și utilizarea.",
      },
      {
        title: "Vedem noi problemele primii",
        body: "Urmărim aplicația și serverul, așa că problemele sunt observate și rezolvate din timp, de multe ori înainte să le simtă utilizatorii.",
      },
      {
        title: "Actualizări fără griji",
        body: "Aplicăm regulat actualizările și reparațiile de securitate, după ce le testăm, ca aplicația să fie mereu la zi.",
      },
      {
        title: "Backup-uri pe care te poți baza",
        body: "Datele tale sunt salvate automat și păstrate departe de serverul de pe care vin. Verificăm că pot fi chiar restaurate.",
      },
      {
        title: "Oameni pe care îi poți întreba",
        body: "Când se strică ceva sau vrei o modificare, vorbești cu oamenii care îți cunosc aplicația, nu cu o coadă de tichete.",
      },
    ],
  },
  howItWorks: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "Ne uităm la ce ai",
        body: "Aplicația, hostingul de acum și câți oameni o folosesc. Sau, dacă pornești de la zero, ce vrei să facă instrumentul.",
      },
      {
        title: "Îți propunem o soluție",
        body: "Cea mai simplă configurație care își face treaba, cu un cost lunar clar. Fără capacitate în plus „pentru orice eventualitate”.",
      },
      {
        title: "Mutăm sau instalăm",
        body: "Instalăm instrumentul sau mutăm aplicația, cu grijă și cu o cale de întoarcere, la o oră stabilită împreună cu tine.",
      },
      {
        title: "Avem grijă de ea",
        body: "Monitorizare, actualizări, backup-uri și suport, lună de lună. Când crești, crește și configurația odată cu tine.",
      },
    ],
  },
  cost: {
    title: "Cât costă și cum lucrăm împreună",
    paragraphs: [
      "Hostingul pornește de la câțiva euro pe lună și crește doar odată cu utilizarea. Mentenanța e de obicei un abonament lunar simplu, pe măsura aplicației tale și a grijii de care are nevoie.",
      "Avem deja o mare parte din configurații și unelte construite, așa că nu plătești din nou pentru ele. Găsim soluția potrivită și pentru nevoile tale, și pentru bugetul tău.",
      "Dacă totul rulează în conturile tale sau pe hostingul nostru depinde de nevoile și de bugetul tău. Îți explicăm variantele și alegi tu.",
      "Rămânem alături de tine: 52% dintre proiectele livrate de noi sunt întreținute tot de noi.",
    ],
  },
  technologies: {
    label: "Tehnologii pe care le folosim",
    items: ["Linux", "Docker", "nginx", "Cloudflare", "AWS", "MySQL", "PostgreSQL", "Prometheus", "Grafana"],
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Puteți găzdui o aplicație pe care n-ați construit-o voi?",
        a: "Da. Ne uităm întâi la ea, îți spunem de ce are nevoie ca să meargă bine și apoi o mutăm, cu grijă și cu o cale de întoarcere.",
      },
      {
        q: "Cât costă hostingul?",
        a: "Pornește de la câțiva euro pe lună pentru o aplicație mică și crește doar odată cu utilizarea. Primești o sumă lunară clară înainte să mutăm ceva.",
      },
      {
        q: "Păstrăm controlul asupra conturilor și datelor noastre?",
        a: "Depinde de ce ți se potrivește. Totul poate rula în conturile tale sau, la un cost mai mic, pe hostingul nostru. Găsim cea mai bună variantă pentru nevoile și bugetul tău.",
      },
      {
        q: "Chiar avem nevoie de software la comandă?",
        a: "Nu întotdeauna. Dacă un instrument existent își face treaba, îți spunem, îl configurăm cum trebuie și avem grijă de el.",
      },
    ],
  },
  cta: {
    title: "Vrei ca aplicația ta să fie pe mâini bune?",
    body: "Spune-ne ce folosești azi sau de ce ai nevoie. Revenim cu întrebări sau cu o primă estimare.",
    button: "Cere o estimare",
    href: "contact",
  },
};
