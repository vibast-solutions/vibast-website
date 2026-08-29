import type { DocPage } from "./types";
import { PANEL_URL, PANEL_HOST, CONTACT_EMAIL } from "./shared";

// Romanian MailBox documentation (default language).
// End-user only. Adapted in our own words — not copied from the upstream provider.

export const mailboxRo: DocPage = {
  slug: "mailbox",
  navLabel: "MailBox",
  meta: {
    title: "Documentație MailBox — Email profesional | Vibast",
    description:
      "Ghid pentru serviciul MailBox de la Vibast: pachete, accesarea webmail-ului, configurarea căsuțelor, înregistrări DNS, redirecționări, pointeri de domeniu și configurarea clienților de email.",
  },
  intro:
    "MailBox este serviciul nostru de email profesional pentru domeniul tău. Acest ghid acoperă tot ce îți trebuie ca utilizator: cum obții un cont, cum îți accesezi mesajele și cum îți configurezi domeniul și aplicațiile de email.",
  sections: [
    {
      id: "overview",
      title: "Prezentare generală și cum obții un cont",
      blocks: [
        {
          k: "p",
          text: "MailBox îți oferă email pe propriul domeniu (de exemplu nume@firmata.ro), cu webmail, suport IMAP/POP3/SMTP, filtrare de spam și instrumente pentru domenii, redirecționări și pointeri. Administrezi totul dintr-un singur panou de control.",
        },
        {
          k: "note",
          tone: "warn",
          title: "Nu există înregistrare online",
          text: "Serviciul nu se activează printr-un formular de auto-înregistrare. Ne contactezi, îți pregătim contul și ți-l predăm gata de folosit. Poți folosi formularul de contact de pe pagina principală sau ne poți scrie direct pe email.",
        },
        {
          k: "p",
          text: "Toate pachetele sunt facturate anual. Alege pachetul care ți se potrivește sau, dacă niciunul nu se încadrează, cere-ne o ofertă personalizată.",
        },
        { k: "h", text: "Pachete" },
        { k: "tiers" },
        {
          k: "p",
          text: "Ai nevoie de alte limite? Spune-ne de ce ai nevoie (spațiu, domenii, căsuțe, redirecționări, pointeri) și îți facem o ofertă personalizată.",
        },
        {
          k: "note",
          tone: "accent",
          title: "Cum cumperi",
          text: "Contactează-ne prin formularul de pe pagina principală sau pe email. Îți confirmăm pachetul, îți creăm contul și primești datele de acces.",
        },
      ],
    },
    {
      id: "webmail",
      title: "Accesarea căsuței (webmail)",
      blocks: [
        {
          k: "p",
          text: `Îți poți citi și trimite emailurile direct din browser, fără să configurezi nimic, prin webmail-ul de la ${PANEL_HOST}.`,
        },
        {
          k: "steps",
          items: [
            `Deschide ${PANEL_URL} în browser.`,
            "Introdu adresa completă de email (nume@domeniul-tău) și parola căsuței.",
            "Vei ajunge în interfața de webmail, unde poți citi, scrie și organiza mesajele.",
          ],
        },
        {
          k: "p",
          text: "Webmail-ul este util când ești pe un dispozitiv străin sau vrei acces rapid. Pentru uz zilnic, îți recomandăm să configurezi o aplicație de email (vezi secțiunea de configurare a clienților).",
        },
      ],
    },
    {
      id: "accounts",
      title: "Crearea și administrarea căsuțelor",
      blocks: [
        {
          k: "p",
          text: `O căsuță (mailbox) este o adresă de email cu spațiu propriu de stocare, la care te autentifici cu parolă. Le administrezi din panoul de la ${PANEL_HOST}.`,
        },
        { k: "h", text: "Creează o căsuță nouă" },
        {
          k: "steps",
          items: [
            `Autentifică-te în panou la ${PANEL_URL}.`,
            "Mergi la secțiunea de conturi de email și alege crearea unei adrese noi.",
            "Alege partea locală (ce apare înainte de @) și domeniul.",
            "Setează o parolă puternică și, opțional, o cotă de spațiu pentru căsuță.",
            "Salvează. Adresa este gata imediat pentru webmail și aplicații de email.",
          ],
        },
        {
          k: "note",
          tone: "info",
          title: "Parole",
          text: "Folosește parole lungi și unice pentru fiecare căsuță. Poți schimba oricând parola din panou; după schimbare, actualizează parola și în aplicațiile de email configurate.",
        },
        {
          k: "p",
          text: "Tot din panou poți șterge o căsuță, îi poți ajusta spațiul sau îi poți reseta parola. Ștergerea unei căsuțe îi elimină definitiv mesajele stocate pe server, așa că fă întâi o copie dacă ai nevoie de ele.",
        },
      ],
    },
    {
      id: "domains",
      title: "Adăugarea domeniului și înregistrările DNS",
      blocks: [
        {
          k: "p",
          text: "Ca să primești și să trimiți email pe domeniul tău, domeniul trebuie adăugat în cont și trebuie să adaugi câteva înregistrări DNS la registrarul sau furnizorul de DNS unde este găzduit domeniul.",
        },
        {
          k: "steps",
          items: [
            "Adaugă domeniul în panou (secțiunea de domenii).",
            "Copiază înregistrările DNS afișate pentru domeniul tău.",
            "Adaugă-le în zona DNS a domeniului, la registrarul tău.",
            "Așteaptă propagarea DNS (de obicei sub o oră, uneori până la 24h) și verifică din panou.",
          ],
        },
        { k: "h", text: "Înregistrări DNS necesare" },
        {
          k: "ul",
          items: [
            "MX — indică serverele care primesc emailul pentru domeniul tău.",
            "SPF (TXT) — precizează ce servere au voie să trimită email în numele domeniului, reducând riscul ca mesajele tale să ajungă la spam.",
            "DKIM (TXT) — semnează digital mesajele trimise, ca să poată fi verificate de serverele destinatare.",
            "DMARC (TXT) — spune serverelor destinatare ce să facă cu mesajele care nu trec de SPF/DKIM.",
          ],
        },
        {
          k: "note",
          tone: "info",
          title: "Valorile exacte le găsești în panou",
          text: `Nu trebuie să ghicești nimic: panoul de la ${PANEL_HOST} îți afișează exact înregistrările DNS pentru domeniul tău, inclusiv cheia DKIM generată special pentru tine. Copiază-le de acolo și adaugă-le la registrarul tău.`,
        },
      ],
    },
    {
      id: "clients",
      title: "Configurarea aplicațiilor de email (IMAP/POP3/SMTP)",
      blocks: [
        {
          k: "p",
          text: "Poți folosi orice aplicație de email (Outlook, Apple Mail, Thunderbird, Gmail pe telefon etc.). Alege IMAP dacă vrei ca mesajele să rămână sincronizate pe toate dispozitivele (recomandat) sau POP3 dacă vrei să le descarci local.",
        },
        {
          k: "ul",
          items: [
            "IMAP — mesajele rămân pe server și se sincronizează pe toate dispozitivele.",
            "POP3 — mesajele se descarcă pe un singur dispozitiv; folosește-l doar dacă știi că ai nevoie de el.",
            "SMTP — se folosește pentru trimiterea mesajelor, indiferent de IMAP sau POP3.",
          ],
        },
        {
          k: "note",
          tone: "accent",
          title: "Setările exacte le găsești în panou",
          text: `Nu trebuie să reții tu numele serverelor și porturile. Autentifică-te la ${PANEL_URL}, deschide căsuța dorită și vei găsi acolo setările exacte de configurare (server de primire și de trimitere, porturi, criptare) pentru clientul tău de email.`,
        },
        {
          k: "note",
          tone: "info",
          title: "Recomandări",
          text: "Alege întotdeauna variantele de conexiune criptată (SSL/TLS). Numele de utilizator este adresa completă de email, iar parola este parola căsuței. Activează autentificarea pe serverul de trimitere (SMTP).",
        },
      ],
    },
    {
      id: "forwarders",
      title: "Redirecționări de email și autorespondere",
      blocks: [
        {
          k: "define",
          term: "Redirecționare de email (alias)",
          text: "Este o adresă de email care trimite automat mai departe mesajele primite către una sau mai multe alte adrese, fără să aibă căsuță proprie sau spațiu de stocare. Practic, e o adresă „de trecere”, nu una în care te loghezi.",
          example: "contact@domeniul-tău.ro redirecționează tot ce primește către adresa ta personală.",
        },
        {
          k: "p",
          text: "Redirecționările sunt ideale pentru adrese de rol (vanzari@, office@, suport@) pe care vrei să le folosești public, dar nu vrei să le administrezi ca și căsuțe separate. Poți redirecționa către mai multe destinații simultan.",
        },
        {
          k: "steps",
          items: [
            `Autentifică-te în panou la ${PANEL_URL}.`,
            "Mergi la secțiunea de redirecționări (forwarders).",
            "Introdu adresa sursă (aliasul) și una sau mai multe adrese destinație.",
            "Salvează. Mesajele către alias vor ajunge de acum la destinațiile setate.",
          ],
        },
        { k: "h", text: "Autorespondere" },
        {
          k: "p",
          text: "Un autoresponder trimite un răspuns automat celor care îți scriu (de exemplu un mesaj de „sunt în concediu”). Îl activezi pe o căsuță, cu textul și perioada dorite, și îl dezactivezi când nu mai e nevoie.",
        },
      ],
    },
    {
      id: "pointers",
      title: "Pointeri de domeniu (alias de domeniu)",
      blocks: [
        {
          k: "define",
          term: "Pointer de domeniu (alias de domeniu)",
          text: "Este un domeniu suplimentar care este servit ca alias al unui domeniu deja existent în cont, astfel încât emailul pentru domeniul-pointer este tratat de aceleași căsuțe.",
          example:
            "brandul-tău.net indică spre brandul-tău.ro, astfel încât tu@brandul-tău.net și tu@brandul-tău.ro ajung în aceeași căsuță.",
        },
        {
          k: "p",
          text: "Pointerii sunt utili când deții mai multe variante ale aceluiași domeniu (de exemplu .ro și .com) și vrei ca toate să trimită email în aceleași căsuțe, fără să dublezi conturile.",
        },
        {
          k: "note",
          tone: "info",
          title: "Diferența față de o redirecționare",
          text: "O redirecționare trimite mai departe o singură adresă. Un pointer face ca un întreg domeniu să fie tratat ca alias al altuia — toate adresele de pe domeniul-pointer funcționează pe căsuțele domeniului principal.",
        },
      ],
    },
    {
      id: "spam",
      title: "Filtrarea spamului",
      blocks: [
        {
          k: "p",
          text: "Mesajele primite trec printr-un filtru de spam înainte să ajungă la tine. Cele mai suspecte sunt marcate sau mutate separat, ca să îți păstrezi căsuța curată.",
        },
        {
          k: "ul",
          items: [
            "Verifică periodic folderul de spam/junk pentru mesaje legitime marcate greșit.",
            "Marchează mesajele nedorite ca spam, ca filtrul să învețe.",
            "Configurează corect SPF, DKIM și DMARC pe domeniul tău pentru a reduce mesajele nedorite și pentru ca propriile tale mesaje să nu ajungă la spam.",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "Migrarea emailului existent",
      blocks: [
        {
          k: "p",
          text: "Dacă vii de la alt furnizor, îți poți aduce mesajele mai vechi în noile căsuțe. Cea mai simplă metodă este prin IMAP, cu o aplicație de email care poate copia mesajele dintr-un cont în altul.",
        },
        {
          k: "steps",
          items: [
            "Creează căsuțele noi în MailBox și configurează-le prin IMAP într-o aplicație de email.",
            "Adaugă în aceeași aplicație și contul vechi, tot prin IMAP.",
            "Copiază sau trage folderele/mesajele din contul vechi în cel nou; aplicația le va încărca pe server.",
            "După ce confirmi că tot a ajuns, actualizează înregistrările DNS ca noul serviciu să primească emailul.",
          ],
        },
        {
          k: "note",
          tone: "accent",
          title: "Îți dăm o mână de ajutor",
          text: "Ai un volum mare de mesaje sau multe căsuțe de migrat? Contactează-ne și te ajutăm cu procesul de migrare.",
        },
      ],
    },
    {
      id: "support",
      title: "Ajutor și contact",
      blocks: [
        {
          k: "p",
          text: "Ai o întrebare sau o problemă? Suntem aici să te ajutăm.",
        },
        {
          k: "ul",
          items: [
            "Formularul de contact de pe pagina principală a site-ului.",
            `Email direct: ${CONTACT_EMAIL}.`,
          ],
        },
        {
          k: "p",
          text: "Când ne scrii despre o problemă, spune-ne adresa de email implicată și, dacă e cazul, ce aplicație folosești și ce mesaj de eroare primești — ne ajută să rezolvăm mai repede.",
        },
      ],
    },
  ],
};
