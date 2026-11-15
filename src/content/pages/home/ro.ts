import { SIMPLE_SITE_FROM } from "./pricing";
import type { HomePageContent } from "./types";

const simpleSite = SIMPLE_SITE_FROM.ro;

export const homeRo: HomePageContent = {
  meta: {
    title: "Firmă de dezvoltare software din România",
    description:
      "Construim, găzduim și avem grijă de software de orice mărime, de la un site simplu la sisteme folosite de mii de oameni. Peste 80 de proiecte livrate. Cere o estimare.",
  },
  hero: {
    eyebrow: "Firmă de dezvoltare software",
    h1: "Software potrivit afacerii tale, de la un site simplu la sisteme gândite pentru mii de utilizatori.",
    sub: "Site-uri, aplicații mobile și desktop, programe interne și infrastructura din spatele lor. Le construim, le găzduim și avem grijă de ele.",
    primaryCta: "Cere o estimare",
    secondaryCta: "Vezi cum lucrăm",
    emailPrompt: "Sau scrie-ne:",
    layers: ["Construim", "Găzduim", "Avem grijă"],
  },
  proof: {
    label: "În cifre",
    stats: [
      { value: "80+", label: "proiecte livrate" },
      { value: "52%", label: "încă întreținute de noi" },
      { value: "2–6 săptămâni", label: "până la prima versiune" },
    ],
    reach: { value: "UE", label: "clienți din toată Uniunea Europeană" },
  },
  startingPoints: {
    eyebrow: "De unde pornești?",
    title: "Pornim de unde ești tu.",
    cards: {
      new: {
        title: "Ceva nou",
        body: "Ai o idee, un proces de simplificat sau un site de lansat. Te ajutăm să-i dai formă și îl construim la mărimea potrivită.",
        cta: "Vezi ce construim",
      },
      stuck: {
        title: "Te-ai blocat sau vrei o a doua părere",
        body: "O aplicație pe care n-a mai pus nimeni mâna de ani de zile? O analizăm, păstrăm ce merge, reparăm ce e riscant și o aducem la zi, de obicei fără s-o luăm de la zero.",
        cta: "Cere o analiză a aplicației",
      },
      run: {
        title: "Pune-l pe picioare și ține-l în funcțiune",
        body: "Uneori cea mai bună soluție e un instrument existent, configurat cum trebuie. Îți spunem când nu ai nevoie de software făcut la comandă, apoi îl găzduim și avem grijă de el.",
        cta: "Hosting și mentenanță",
      },
    },
  },
  services: {
    eyebrow: "Ce construim",
    title: "O singură echipă pentru tot proiectul.",
    lead: "De la un instrument pentru o echipă de cinci oameni la o platformă pentru mii de utilizatori.",
    cards: {
      webDevelopment: {
        title: "Site-uri, aplicații web și magazine online",
        body: "Site-uri și aplicații web care se încarcă repede, arată bine pe orice ecran și se actualizează ușor.",
      },
      mobileApps: {
        title: "Aplicații mobile",
        body: "Aplicații pentru iPhone și Android, de la prima versiune până în magazinele de aplicații.",
      },
      customSoftware: {
        title: "Software personalizat și integrări",
        body: "Programe interne, aplicații desktop și legături între sistemele pe care le folosești deja.",
      },
      appModernization: {
        title: "Preluare și modernizare aplicații",
        body: "Preluăm aplicații lăsate în urmă de alte echipe și le facem din nou sigure de modificat.",
      },
      hostingMaintenance: {
        title: "Hosting și mentenanță",
        body: "Îți ținem software-ul online, cu backup și la zi, ca să nu-ți mai faci griji.",
      },
      blockchain: {
        title: "Blockchain",
        body: "Când produsul tău are nevoie de blockchain, construim și partea asta.",
      },
    },
    more: "Află mai multe",
  },
  range: {
    eyebrow: "Pe măsura ta",
    title: "Construit la mărimea de care ai nevoie.",
    items: [
      {
        title: "De la cinci oameni la mii de utilizatori",
        body: "Un instrument simplu pentru o echipă mică sau o platformă care duce trafic mare. Construim pentru unde ești acum și lăsăm loc de creștere.",
      },
      {
        title: "De la un server mic la cloud enterprise",
        body: "Găzduim unde are sens: un server mic pentru o aplicație mică, cloud enterprise când ai nevoie. Nu plătești pentru capacitate pe care n-o folosești.",
      },
    ],
    note: "Construit pe tehnologie actuală, bine susținută: ușor de întreținut, ușor de extins.",
  },
  howWeWork: {
    eyebrow: "Cum lucrăm",
    title: "Patru pași, fără surprize.",
    steps: [
      { title: "Vorbim", body: "Ne spui de ce ai nevoie. Punem întrebări până înțelegem problema." },
      { title: "Plan și prima versiune", body: "Stabilim prima versiune utilă și o livrăm, de obicei în 2–6 săptămâni." },
      { title: "Construim în etape scurte", body: "Vezi des progresul și poți schimba direcția pe parcurs." },
      { title: "Găzduim și avem grijă", body: "Îl ținem în funcțiune, în siguranță și la zi, cât timp ai nevoie." },
    ],
    payment:
      "Plătești cum îți convine: preț fix, lunar, la oră sau pe livrabil. Chiar și un site mic se poate plăti lunar.",
  },
  cost: {
    eyebrow: "Cât costă?",
    title: "Scopul tău, bugetul tău, ritmul tău.",
    paragraphs: [
      "Avem deja multe lucruri construite, iar partea asta nu o mai plătești încă o dată.",
      `Un site simplu poate porni de la ${simpleSite}. O platformă complexă poate costa multe mii. Hostingul pornește de la câțiva euro pe lună și crește doar odată cu utilizarea.`,
      "Nu avem o listă fixă de prețuri. Spune-ne de ce ai nevoie și găsim soluția potrivită și pentru nevoie, și pentru buget.",
    ],
    cta: "Cere o estimare",
  },
  whyUs: {
    eyebrow: "De ce VIBAST Labs",
    title: "De ce lucrează oamenii cu noi.",
    items: [
      { title: "Soluții pe măsură", body: "Construim ce îți trebuie, nu mai mult. Dacă un instrument existent face treaba, îți spunem." },
      { title: "Tehnologie actuală", body: "Unelte bine susținute, ușor de întreținut și ușor de extins." },
      { title: "Hosting pe măsura bugetului", body: "Un server mic sau cloud enterprise, după cât are nevoie de fapt software-ul tău." },
      { title: "Rămânem alături de tine", body: "52% dintre proiectele livrate sunt încă întreținute de noi." },
      { title: "Specialiști cu experiență", body: "Echipa noastră are experiență într-una dintre cele mai mari companii din Europa." },
    ],
  },
  mailbox: {
    eyebrow: "Produsul nostru",
    title: "MailBox: email de firmă pe domeniul tău",
    body: "Email profesional pe domeniul firmei tale. Îl configurăm și ți-l predăm gata de folosit.",
    cta: "Despre MailBox",
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Întrebări frecvente",
    items: [
      {
        q: "Cât costă?",
        a: `Depinde de ce ai nevoie. Un site simplu poate porni de la ${simpleSite}, iar o platformă complexă poate costa multe mii. Nu plătești din nou ce avem deja construit, iar hostingul pornește de la câțiva euro pe lună. Spune-ne despre proiect și revenim cu o primă estimare.`,
      },
      {
        q: "Cât durează?",
        a: "Prima versiune vine de obicei la 2–6 săptămâni după ce începem. Apoi construim în etape scurte, așa că vezi des progresul.",
      },
      {
        q: "Al cui e codul?",
        a: "Depinde de ce ți se potrivește. Poți avea proprietatea completă sau o variantă mai ieftină, construită pe componentele și hostingul nostru. Găsim cea mai bună soluție pentru nevoile și bugetul tău.",
      },
      {
        q: "Puteți prelua aplicația noastră existentă?",
        a: "Da. O analizăm, păstrăm ce merge, reparăm ce e riscant și o aducem la zi, de obicei fără s-o luăm de la zero. Analiza e gratuită pentru software făcut de noi; pentru software făcut în altă parte e o analiză plătită, iar la final primești soluții, nu doar o listă de probleme.",
      },
      {
        q: "Unde e găzduit?",
        a: "Unde are sens: un server mic pentru o aplicație mică, cloud enterprise când ai nevoie. Nu plătești pentru capacitate pe care n-o folosești.",
      },
      {
        q: "Putem plăti lunar?",
        a: "Da. Lucrăm la preț fix, lunar, la oră, pe livrabil sau alături de echipa ta. Chiar și site-urile mici se pot plăti lunar.",
      },
    ],
  },
  contact: {
    eyebrow: "Cere o estimare",
    title: "Spune-ne de unde pornești.",
    body: "Câteva rânduri sunt de ajuns. Revenim cu întrebări sau cu o primă estimare.",
    emailPrompt: "Sau scrie-ne direct",
    phonePrompt: "Sau sună-ne",
  },
};
