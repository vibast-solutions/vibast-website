import type { ServicePageContent } from "@/content/types";

// Fraza principală: „software la comandă” (variante: aplicații personalizate pentru firme, program de gestiune, automatizare procese).

export const customSoftwareRo: ServicePageContent = {
  meta: {
    title: "Software la comandă și integrări",
    description: "Programe interne, aplicații desktop și integrări care preiau munca manuală a echipei tale. Iar când un instrument existent e mai potrivit, îți spunem.",
  },
  h1: "Software la comandă, construit după felul în care lucrează firma ta",
  intro: "Programe interne, aplicații desktop și integrări care preiau munca manuală a echipei tale. Uneori, cel mai bun răspuns e un instrument existent, configurat cum trebuie. Îți spunem când nu ai nevoie de software la comandă.",
  isThisYou: {
    title: "Te regăsești aici?",
    items: [
      "Echipa ta copiază zilnic aceleași date între Excel, e-mail și două-trei programe diferite.",
      "Ai încercat programe gata făcute, dar niciunul nu se potrivește cu felul în care lucrează firma ta.",
      "Sistemele tale nu comunică între ele, iar greșelile apar exact pe la încheieturi.",
      "Ai nevoie de un program desktop care să meargă pe calculatoarele voastre, chiar și fără o conexiune bună la internet.",
    ],
  },
  whatYouGet: {
    title: "Ce primești",
    items: [
      {
        title: "Programe interne",
        body: "Programe de gestiune pentru comenzi, stocuri, programări, rapoarte sau aprobări, croite după procesul tău, nu invers.",
      },
      {
        title: "Aplicații desktop",
        body: "Programe care rulează pe Windows, macOS sau Linux, pentru munca ce are nevoie de fișiere locale, de aparate conectate la calculator sau de lucru fără internet.",
      },
      {
        title: "Integrări",
        body: "Legăm între ele sistemele pe care le folosești deja: magazinul online, facturarea, contabilitatea, CRM-ul sau furnizorii. Datele se introduc o singură dată și ajung unde trebuie.",
      },
      {
        title: "Automatizare",
        body: "Sarcinile care se repetă merg singure: rapoartele îți ajung pe e-mail, documentele se generează, mementourile pleacă la timp. Echipa ta se ocupă de munca ce chiar are nevoie de oameni.",
      },
      {
        title: "Pe măsura firmei tale",
        body: "De la un program pentru o echipă de cinci oameni la o platformă pentru mii de utilizatori. Construim ce-ți trebuie acum și lăsăm loc de creștere.",
      },
      {
        title: "Întâi un sfat sincer",
        body: "Dacă un instrument existent, configurat cum trebuie, rezolvă problema, îți spunem și te ajutăm să-l pui pe picioare. Plătești pentru software la comandă doar acolo unde chiar merită.",
      },
    ],
  },
  howItWorks: {
    title: "Cum lucrăm",
    steps: [
      {
        title: "Înțelegem munca",
        body: "Vorbim cu tine și, ideal, cu oamenii care vor folosi programul. Ne uităm cum se lucrează azi și unde se pierd timp și bani.",
      },
      {
        title: "Planificăm și livrăm prima versiune",
        body: "Alegem partea care economisește cel mai mult efort și o construim prima. Echipa ta folosește o versiune funcțională în 2–6 săptămâni.",
      },
      {
        title: "Construim în pași mici",
        body: "Adăugăm următoarele bucăți pe rând, pe baza părerilor echipei tale, ca programul să se potrivească felului în care lucrează de fapt.",
      },
      {
        title: "Îl ținem în funcțiune",
        body: "Îl găzduim, îi facem backup și îl ținem la zi. Când se schimbă firma ta, se schimbă și programul.",
      },
    ],
  },
  cost: {
    title: "Cât costă?",
    paragraphs: [
      "Software la comandă nu înseamnă neapărat un proiect uriaș. Un program intern mic sau o singură integrare costă adesea mai puțin decât te-ai aștepta; o platformă folosită în toată firma e o investiție mai mare. Avem deja multe lucruri construite, iar partea aceea nu o mai plătești încă o dată.",
      "Tu alegi cum plătești: preț fix, lunar, pe oră, pe livrabil sau lucrăm alături de echipa ta. Hostingul pornește de la câțiva euro pe lună și crește doar odată cu utilizarea.",
      "Cui îi aparțin codul și conturile depinde de nevoile și de bugetul tău. Poți avea proprietatea completă sau o variantă mai ieftină, construită pe componentele și pe hostingul nostru. Găsim soluția potrivită pentru amândouă.",
    ],
  },
  technologies: {
    label: "Tehnologii pe care le folosim",
    items: ["Go", "Node.js", "TypeScript", "React", "Wails", "PostgreSQL", "MySQL"],
  },
  faq: {
    title: "Întrebări frecvente",
    items: [
      {
        q: "De unde știu dacă am nevoie de software la comandă?",
        a: "Spune-ne ce vrei să rezolvi. Dacă un produs existent, configurat cum trebuie, acoperă nevoia, ți-l recomandăm. Un program la comandă are sens când felul tău de a lucra te diferențiază sau când variantele gata făcute te costă mai mult în ocolișuri decât îți economisesc.",
      },
      {
        q: "Poate lucra cu programele pe care le folosim deja?",
        a: "De obicei, da. Majoritatea programelor moderne se pot conecta, iar la cele mai vechi ajungem adesea prin fișiere, exporturi sau baza lor de date. Verificăm asta de la început, înainte să te angajezi la ceva.",
      },
      {
        q: "Crește odată cu echipa sau cu firma noastră?",
        a: "Da. Îl construim astfel încât să poți adăuga mai târziu utilizatori, funcții și date fără s-o iei de la capăt, și îl găzduim pe o configurație care crește odată cu utilizarea.",
      },
      {
        q: "Ce se întâmplă dacă pleacă omul care l-a cerut?",
        a: "Programul nu depinde de un singur om. Îl ținem documentat și avem grijă de el, așa că merge mai departe indiferent cine se ocupă de el la voi.",
      },
    ],
  },
  cta: {
    title: "Spune-ne ce îți încetinește echipa",
    body: "Descrie-ne cum se lucrează azi. Revenim cu întrebări sau cu o primă estimare, ori îți spunem dacă te ajută un instrument existent.",
    button: "Cere o estimare",
    href: "contact",
  },
};
