import type { ServicePageContent } from "@/content/types";

// Cuvânt-cheie principal: „modernizare aplicații”.

export const appModernizationRo: ServicePageContent = {
  meta: {
    title: "Preluare, audit și modernizare aplicații",
    description: "O aplicație la care nu s-a mai lucrat de ani de zile? O analizăm, păstrăm ce merge, reparăm ce e riscant și o aducem la zi, de obicei fără s-o luăm de la zero.",
  },
  h1: "Preluăm, analizăm și modernizăm aplicația ta existentă",
  intro: "O aplicație la care nu s-a mai lucrat de ani de zile? O analizăm, păstrăm ce funcționează, reparăm ce e riscant și o aducem la zi, de obicei fără s-o luăm de la zero. Modernizare aplicații, făcută în pași mici și siguri.",
  isThisYou: {
    title: "Te regăsești aici?",
    items: [
      "Programatorul sau firma care ți-a făcut aplicația a plecat și nimeni altcineva nu mai știe cum funcționează.",
      "Nimeni nu mai îndrăznește să se atingă de ea, pentru că orice modificare strică altceva.",
      "Rulează pe versiuni vechi, merge tot mai greu și te sperii de fiecare dată când pică.",
      "Proiectul s-a blocat la jumătate și nu știi dacă merită reparat sau luat de la capăt.",
      "Merge, dar vrei o a doua părere și o privire proaspătă înainte să investești mai mult.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "O analiză sinceră",
        body: "Ne uităm la cod, la felul în care e instalată aplicația și la cum e folosită. Afli ce e solid, ce e riscant și ce e doar învechit.",
      },
      {
        title: "Soluții, nu doar o listă de probleme",
        body: "Fiecare problemă vine cu o rezolvare concretă și cu o estimare a efortului, în ordinea în care contează pentru tine.",
      },
      {
        title: "Cunoștințele înapoi la tine",
        body: "Scriem cum funcționează aplicația, cum e construită și cum rulează, ca să nu mai depindă niciodată de memoria unui singur om.",
      },
      {
        title: "Întâi o aplicație stabilă",
        body: "Reparăm mai întâi ce e stricat sau riscant: breșe de securitate, părți care cad, backup-uri care lipsesc.",
      },
      {
        title: "La zi, pas cu pas",
        body: "Aducem părțile vechi pe tehnologie actuală, bine întreținută, bucată cu bucată, în timp ce aplicația își face treaba mai departe.",
      },
      {
        title: "Cineva care rămâne",
        body: "După ce terminăm, putem avea grijă de aplicație în continuare, ca să nu rămână iar în urmă.",
      },
    ],
  },
  howItWorks: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "Ne spui ce ai",
        body: "O discuție scurtă despre aplicație, ce face pentru afacerea ta și ce te îngrijorează. Apoi îți cerem acces la cod și la servere.",
      },
      {
        title: "O analizăm",
        body: "Primești un raport clar: ce merge, ce e riscant, ce am repara întâi și cât ar dura. Pe limba ta, nu în jargon tehnic.",
      },
      {
        title: "O stabilizăm",
        body: "Dacă mergem mai departe, începem cu reparațiile urgente, ca aplicația să fie sigură și previzibilă înainte să schimbăm ceva mai mare.",
      },
      {
        title: "O modernizăm în pași",
        body: "O actualizăm și o îmbunătățim în versiuni mici, pe care le vezi și le verifici. Luăm totul de la zero doar dacă asta iese chiar mai ieftin, și îți spunem dacă e cazul.",
      },
    ],
  },
  cost: {
    title: "Cât costă și cum lucrăm împreună",
    paragraphs: [
      "Analiza e gratuită pentru software-ul construit de noi. Pentru software făcut de altcineva, analiza e plătită, iar prețul îl afli dinainte, după ce vedem cât de mare e aplicația.",
      "Reparația și modernizarea costă de obicei mult mai puțin decât o aplicație nouă, pentru că păstrăm tot ce încă funcționează. Găsim soluția potrivită și pentru nevoile aplicației, și pentru bugetul tău.",
      "Plătești cum îți convine: preț fix, lunar, la oră, pe livrabile sau lucrând alături de echipa ta. Scopul tău, bugetul tău, ritmul tău.",
    ],
  },
  technologies: {
    label: "Tehnologii pe care le folosim",
    items: ["Go", "Node.js", "PHP", "React", "Next.js", "Flutter", "PrestaShop", "MySQL", "PostgreSQL", "Docker"],
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "Trebuie s-o luăm de la zero?",
        a: "De obicei, nu. Majoritatea aplicațiilor au multe lucruri care merită păstrate. Păstrăm ce merge, reparăm ce e riscant și actualizăm restul pe rând. Dacă o aplicație nouă chiar e varianta mai bună, analiza îți spune asta și îți explică de ce.",
      },
      {
        q: "Aplicația se oprește cât lucrați la ea?",
        a: "Plănuim fiecare schimbare ca întreruperile să fie cât mai mici, o testăm înainte s-o punem live și păstrăm mereu o cale de întoarcere. Când o pauză scurtă nu se poate evita, stabilim ora împreună cu tine.",
      },
      {
        q: "Analiza e gratuită?",
        a: "E gratuită pentru software-ul construit de noi. Pentru software făcut de altcineva e plătită, iar prețul îl știi înainte să începem.",
      },
      {
        q: "Cel care a făcut aplicația a dispărut și nu există documentație. Ne puteți ajuta?",
        a: "Da. E o situație des întâlnită. Accesul la cod și la servere e suficient ca să începem, iar documentația pe care o scriem pe parcurs rămâne la tine.",
      },
      {
        q: "Ce faceți dacă aplicația e construită cu ceva ce nu folosiți?",
        a: "Spune-ne cu ce e construită. Îți spunem sincer dacă suntem echipa potrivită, înainte să plătești ceva.",
      },
    ],
  },
  cta: {
    title: "Vrei o a doua părere despre aplicația ta?",
    body: "Spune-ne ce ai și ce te îngrijorează. Revenim cu întrebări sau cu o primă estimare, iar apoi cu soluții, nu doar cu o listă de probleme.",
    button: "Cere o analiză a aplicației",
    href: "contact",
  },
};
