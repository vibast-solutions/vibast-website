import type { DocPage } from "./types";
import { PANEL_URL, PANEL_HOST, CONTACT_EMAIL } from "./shared";

// English MailBox documentation (alternate language).
// End-user only. Adapted in our own words — not copied from the upstream provider.
// Kept structurally parallel to mailbox.ro.ts (same section ids and block order).

export const mailboxEn: DocPage = {
  slug: "mailbox",
  navLabel: "MailBox",
  meta: {
    title: "MailBox Documentation — Professional email | Vibast",
    description:
      "Guide to Vibast's MailBox service: packages, accessing webmail, managing mailboxes, DNS records, forwarders, domain pointers, and email client setup.",
  },
  intro:
    "MailBox is our professional email service for your own domain. This guide covers everything you need as a user: how to get an account, how to access your messages, and how to set up your domain and email apps.",
  sections: [
    {
      id: "overview",
      title: "Overview & how to get an account",
      blocks: [
        {
          k: "p",
          text: "MailBox gives you email on your own domain (for example name@yourcompany.com), with webmail, IMAP/POP3/SMTP support, spam filtering, and tools for domains, forwarders, and pointers. You manage everything from a single control panel.",
        },
        {
          k: "note",
          tone: "warn",
          title: "No online registration",
          text: "The service is not activated through a self-registration form. You contact us, we provision your account, and we hand it over ready to use. Use the contact form on the home page or email us directly.",
        },
        {
          k: "p",
          text: "All packages are billed yearly. Pick the package that fits you or, if none does, ask us for a tailored offer.",
        },
        { k: "h", text: "Packages" },
        { k: "tiers" },
        {
          k: "p",
          text: "Need different limits? Tell us what you need (storage, domains, mailboxes, forwarders, pointers) and we'll put together a personalized offer.",
        },
        {
          k: "note",
          tone: "accent",
          title: "How to buy",
          text: "Contact us through the form on the home page or by email. We confirm the package, create your account, and send you the access details.",
        },
      ],
    },
    {
      id: "webmail",
      title: "Accessing your mailbox (webmail)",
      blocks: [
        {
          k: "p",
          text: `You can read and send email straight from your browser, with no setup, through the webmail at ${PANEL_HOST}.`,
        },
        {
          k: "steps",
          items: [
            `Open ${PANEL_URL} in your browser.`,
            "Enter your full email address (name@your-domain) and the mailbox password.",
            "You'll land in the webmail interface, where you can read, write, and organize messages.",
          ],
        },
        {
          k: "p",
          text: "Webmail is handy when you're on someone else's device or need quick access. For everyday use, we recommend setting up an email app (see the client setup section).",
        },
      ],
    },
    {
      id: "accounts",
      title: "Creating and managing mailboxes",
      blocks: [
        {
          k: "p",
          text: `A mailbox is an email address with its own storage that you sign in to with a password. You manage them from the panel at ${PANEL_HOST}.`,
        },
        { k: "h", text: "Create a new mailbox" },
        {
          k: "steps",
          items: [
            `Sign in to the panel at ${PANEL_URL}.`,
            "Go to the email accounts section and choose to create a new address.",
            "Choose the local part (what comes before @) and the domain.",
            "Set a strong password and, optionally, a storage quota for the mailbox.",
            "Save. The address is immediately ready for webmail and email apps.",
          ],
        },
        {
          k: "note",
          tone: "info",
          title: "Passwords",
          text: "Use long, unique passwords for each mailbox. You can change a password anytime from the panel; after changing it, update the password in any configured email apps too.",
        },
        {
          k: "p",
          text: "From the panel you can also delete a mailbox, adjust its storage, or reset its password. Deleting a mailbox permanently removes the messages stored for it on the server, so back them up first if you need them.",
        },
      ],
    },
    {
      id: "domains",
      title: "Adding your domain and DNS records",
      blocks: [
        {
          k: "p",
          text: "To receive and send email on your domain, the domain must be added to your account and you must add a few DNS records at the registrar or DNS provider where the domain is hosted.",
        },
        {
          k: "steps",
          items: [
            "Add the domain in the panel (domains section).",
            "Copy the DNS records shown for your domain.",
            "Add them to your domain's DNS zone at your registrar.",
            "Wait for DNS propagation (usually under an hour, sometimes up to 24h) and verify from the panel.",
          ],
        },
        { k: "h", text: "Required DNS records" },
        {
          k: "ul",
          items: [
            "MX — points to the servers that receive email for your domain.",
            "SPF (TXT) — states which servers are allowed to send email on your domain's behalf, reducing the chance your messages land in spam.",
            "DKIM (TXT) — digitally signs outgoing messages so receiving servers can verify them.",
            "DMARC (TXT) — tells receiving servers what to do with messages that fail SPF/DKIM.",
          ],
        },
        {
          k: "note",
          tone: "info",
          title: "The exact values are in the panel",
          text: `No guesswork needed: the panel at ${PANEL_HOST} shows you the exact DNS records for your domain, including the DKIM key generated specifically for you. Copy them from there and add them at your registrar.`,
        },
      ],
    },
    {
      id: "clients",
      title: "Setting up email apps (IMAP/POP3/SMTP)",
      blocks: [
        {
          k: "p",
          text: "You can use any email app (Outlook, Apple Mail, Thunderbird, Gmail on mobile, etc.). Choose IMAP if you want messages to stay in sync across all your devices (recommended), or POP3 if you want to download them locally.",
        },
        {
          k: "ul",
          items: [
            "IMAP — messages stay on the server and sync across all devices.",
            "POP3 — messages download to a single device; use it only if you know you need it.",
            "SMTP — used for sending messages, regardless of IMAP or POP3.",
          ],
        },
        {
          k: "note",
          tone: "accent",
          title: "The exact settings are in the panel",
          text: `You don't need to memorize server names and ports. Sign in at ${PANEL_URL}, open the mailbox you want, and you'll find the exact configuration settings there (incoming and outgoing server, ports, encryption) for your email client.`,
        },
        {
          k: "note",
          tone: "info",
          title: "Recommendations",
          text: "Always choose the encrypted connection options (SSL/TLS). Your username is the full email address and the password is the mailbox password. Enable authentication on the outgoing (SMTP) server.",
        },
      ],
    },
    {
      id: "forwarders",
      title: "Email forwarders and autoresponders",
      blocks: [
        {
          k: "define",
          term: "Email forwarder (alias)",
          text: "An email address that automatically forwards incoming messages to one or more other addresses, without its own mailbox or storage. It's a pass-through address, not one you log into.",
          example: "contact@yourdomain.com forwards everything it receives to your personal inbox.",
        },
        {
          k: "p",
          text: "Forwarders are ideal for role addresses (sales@, office@, support@) you want to use publicly but don't want to manage as separate mailboxes. You can forward to several destinations at once.",
        },
        {
          k: "steps",
          items: [
            `Sign in to the panel at ${PANEL_URL}.`,
            "Go to the forwarders section.",
            "Enter the source address (the alias) and one or more destination addresses.",
            "Save. Messages to the alias will now reach the destinations you set.",
          ],
        },
        { k: "h", text: "Autoresponders" },
        {
          k: "p",
          text: "An autoresponder sends an automatic reply to people who email you (for example an out-of-office message). You enable it on a mailbox, with the text and period you want, and turn it off when it's no longer needed.",
        },
      ],
    },
    {
      id: "pointers",
      title: "Domain pointers (domain aliases)",
      blocks: [
        {
          k: "define",
          term: "Domain pointer (domain alias)",
          text: "An additional domain that is served as an alias of a domain already on the account, so email for the pointer domain is handled by the same mailboxes.",
          example:
            "yourbrand.net points to yourbrand.com, so you@yourbrand.net and you@yourbrand.com land in the same mailbox.",
        },
        {
          k: "p",
          text: "Pointers are useful when you own several variants of the same domain (for example .ro and .com) and want them all to deliver email to the same mailboxes, without duplicating accounts.",
        },
        {
          k: "note",
          tone: "info",
          title: "How it differs from a forwarder",
          text: "A forwarder passes along a single address. A pointer makes a whole domain an alias of another — every address on the pointer domain works on the main domain's mailboxes.",
        },
      ],
    },
    {
      id: "spam",
      title: "Spam filtering",
      blocks: [
        {
          k: "p",
          text: "Incoming messages pass through a spam filter before they reach you. The most suspicious ones are flagged or moved aside to keep your inbox clean.",
        },
        {
          k: "ul",
          items: [
            "Check your spam/junk folder from time to time for legitimate messages caught by mistake.",
            "Mark unwanted messages as spam so the filter learns.",
            "Set up SPF, DKIM, and DMARC correctly on your domain to cut down unwanted mail and to keep your own messages out of spam.",
          ],
        },
      ],
    },
    {
      id: "migration",
      title: "Migrating existing email",
      blocks: [
        {
          k: "p",
          text: "If you're coming from another provider, you can bring your older messages into your new mailboxes. The simplest method is over IMAP, using an email app that can copy messages from one account to another.",
        },
        {
          k: "steps",
          items: [
            "Create the new mailboxes in MailBox and set them up over IMAP in an email app.",
            "Add your old account to the same app, also over IMAP.",
            "Copy or drag the folders/messages from the old account into the new one; the app uploads them to the server.",
            "Once you've confirmed everything arrived, update your DNS records so the new service receives your email.",
          ],
        },
        {
          k: "note",
          tone: "accent",
          title: "We can help",
          text: "Have a large volume of messages or many mailboxes to migrate? Contact us and we'll help with the migration.",
        },
      ],
    },
    {
      id: "support",
      title: "Help & contact",
      blocks: [
        {
          k: "p",
          text: "Have a question or a problem? We're here to help.",
        },
        {
          k: "ul",
          items: [
            "The contact form on the website's home page.",
            `Direct email: ${CONTACT_EMAIL}.`,
          ],
        },
        {
          k: "p",
          text: "When you write about a problem, tell us the email address involved and, if relevant, which app you use and any error message you see — it helps us resolve it faster.",
        },
      ],
    },
  ],
};
