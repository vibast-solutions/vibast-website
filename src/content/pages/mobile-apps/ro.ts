import type { ServicePageContent } from "@/content/types";

// Fraza principală: „dezvoltare aplicații mobile” (variante: creare aplicație mobilă, aplicație Android și iOS).

export const mobileAppsRo: ServicePageContent = {
  meta: {
    title: "Dezvoltare aplicații mobile iOS și Android",
    description: "O aplicație pe care clienții sau echipa ta chiar o folosesc, pe iPhone și Android. O planificăm, o construim, o publicăm și o ținem în funcțiune.",
  },
  h1: "Aplicații mobile pentru iPhone și Android, construite o singură dată pentru ambele",
  intro: "O aplicație pe care clienții sau echipa ta chiar o folosesc, pe iPhone și pe Android. Ne ocupăm de dezvoltarea aplicațiilor mobile de la idee până în magazine: o planificăm cu tine, o construim o singură dată pentru ambele platforme, o publicăm și o ținem în funcțiune.",
  isThisYou: {
    title: "Te regăsești aici?",
    items: [
      "Clienții tăi tot întreabă de o aplicație sau concurenții au deja una.",
      "Echipa ta lucrează pe teren și are nevoie de o aplicație pentru comenzi, liste de verificare sau rapoarte, în loc de hârtii și telefoane.",
      "Ai o idee de aplicație și vrei s-o vezi pe un telefon adevărat înainte să cheltuiești un buget mare.",
      "Ai deja un site sau un program intern și vrei o aplicație care să lucreze cu el.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "O singură aplicație pentru ambele platforme",
        body: "Construim aplicația o dată și ea merge pe iPhone și pe Android. Ai aceleași funcții pe amândouă, fără să plătești pentru două aplicații separate.",
      },
      {
        title: "Gândită pentru cei care o folosesc",
        body: "Ecrane simple, butoane clare și doar pașii de care e nevoie cu adevărat. Clienții găsesc ușor ce caută, iar echipa ta termină treaba mai repede.",
      },
      {
        title: "Legată de ce ai deja",
        body: "Aplicația comunică cu site-ul, cu magazinul online sau cu programele tale interne, așa că datele se introduc o singură dată și apar peste tot.",
      },
      {
        title: "Publicată în magazine",
        body: "Pregătim prezentarea din magazine și ne ocupăm împreună cu tine de publicarea în App Store și Google Play, inclusiv de actualizările de după lansare.",
      },
      {
        title: "Tot ce e în spatele aplicației",
        body: "Majoritatea aplicațiilor au nevoie de un server, de conturi și de notificări. Construim și partea asta și o găzduim pe o configurație potrivită numărului tău de utilizatori.",
      },
      {
        title: "Ținută la zi",
        body: "Telefoanele și sistemele de operare se schimbă în fiecare an. Avem grijă ca aplicația să meargă pe versiunile noi și adăugăm funcții când ai nevoie de ele.",
      },
    ],
  },
  howItWorks: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "Discutăm",
        body: "Ne spui pentru cine e aplicația și ce trebuie să facă. Îți punem câteva întrebări, apoi revenim cu o primă estimare și cu variantele potrivite bugetului tău.",
      },
      {
        title: "Planificăm și livrăm prima versiune",
        body: "Stabilim împreună cele câteva funcții care contează cel mai mult. În 2–6 săptămâni ai o versiune funcțională pe propriul telefon.",
      },
      {
        title: "Construim în pași mici",
        body: "Adăugăm funcții pe rând, iar tu le testezi pe fiecare. Tu decizi ce urmează, în funcție de ce fac utilizatorii reali.",
      },
      {
        title: "Publicăm și avem grijă de ea",
        body: "Publicăm aplicația, ținem în funcțiune serverul din spatele ei și livrăm actualizări pe măsură ce se schimbă telefoanele, magazinele și afacerea ta.",
      },
    ],
  },
  cost: {
    title: "Cât costă o aplicație mobilă?",
    paragraphs: [
      "Depinde de ce trebuie să facă. O aplicație simplă, cu câteva ecrane, costă mult mai puțin decât una cu plăți, hărți și conturi proprii. Avem deja multe lucruri construite, iar partea aceea nu o mai plătești încă o dată.",
      "Tu alegi cum plătești: preț fix, lunar, pe oră sau pe livrabil, ori lucrăm alături de echipa ta. Serverul din spatele aplicației pornește de la câțiva euro pe lună și crește doar odată cu utilizarea.",
      "Cui îi aparțin codul și conturile din magazine depinde de nevoile și de bugetul tău. Poți avea proprietatea completă sau o variantă mai ieftină, construită pe componentele și pe hostingul nostru. Găsim soluția potrivită pentru amândouă.",
    ],
  },
  technologies: {
    label: "Tehnologii pe care le folosim",
    items: ["Flutter", "Dart", "Go", "Node.js", "PostgreSQL"],
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Am nevoie de două aplicații separate pentru iPhone și Android?",
        a: "Nu. Construim o singură aplicație care merge pe ambele. Arată și se simte firesc pe fiecare telefon, iar tu plătești pentru un singur cod, nu pentru două.",
      },
      {
        q: "Cât durează până ajunge aplicația în magazine?",
        a: "Vezi o primă versiune funcțională în 2–6 săptămâni. Momentul publicării depinde de ce trebuie să conțină prima versiune publică și de verificarea făcută de magazine, de care ne ocupăm împreună cu tine.",
      },
      {
        q: "Am nevoie de o aplicație sau ajunge un site?",
        a: "Uneori, un site care merge bine pe telefon e tot ce-ți trebuie și costă mai puțin. Dacă notificările, folosirea fără internet, camera sau utilizarea zilnică contează, de obicei merită o aplicație. Îți spunem sincer ce ți se potrivește.",
      },
      {
        q: "Puteți prelua o aplicație făcută de altcineva?",
        a: "Da. O analizăm, păstrăm ce merge și reparăm ce e riscant. Dacă are nevoie de mai mult decât câteva remedieri, o aducem la zi, de obicei fără s-o luăm de la capăt.",
      },
    ],
  },
  cta: {
    title: "Ai o aplicație în minte?",
    body: "Spune-ne pentru cine e și ce trebuie să facă. Revenim cu întrebări sau cu o primă estimare.",
    button: "Cere o estimare",
    href: "contact",
  },
};
