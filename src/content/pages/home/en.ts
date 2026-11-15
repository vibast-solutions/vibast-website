import {
  Blocks,
  Code,
  Database,
  Mail,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { PageMeta } from "@/content/types";

export { CONTACT_EMAIL } from "@/content/company";

// English home page copy (kept from the single-page site until S2 rewrites it
// per plan §5). Section ids double as in-page anchors: keep `cta`, old links
// to /#cta still land on the contact form.
export const meta: PageMeta = {
  title: "Software Development Company in Romania",
  description:
    "We build, host and look after software of any size, from a simple website to systems used by thousands. 80+ projects delivered. Get a project estimate.",
};

export const SECTION_IDS = {
  services: "services",
  howWeWork: "how-we-work",
  contact: "cta",
} as const;

export const hero = {
  eyebrow: "Software development company",
  headline: ["Custom software,", "built to last."],
  description:
    "Web platforms, mobile apps, backends and cloud infrastructure for businesses that need software they can rely on, from first release to years in production.",
  primaryCta: "Start a project",
  secondaryCta: "View services",
  emailPrompt: "Or email directly:",
};

/** Hero illustration bars, widest first (the logo's three bars). */
export const layers = ["Web & mobile apps", "Backend & cloud", "Blockchain"];

// The three practice areas shown under the hero.
export const practicesLabel = "Practice areas";
export const practices = [
  {
    tag: "Web & Mobile",
    headline: "Products your users enjoy. Built to scale.",
    description:
      "Web platforms, customer portals and mobile apps, from the first prototype to a product in daily use. React, Next.js and Flutter, with fast, accessible interfaces.",
  },
  {
    tag: "Backend & Infrastructure",
    headline: "Systems that work. And keep working.",
    description:
      "APIs, integrations, data migrations and cloud infrastructure. Built with security, monitoring and long-term maintainability in mind.",
  },
  {
    tag: "Blockchain",
    headline: "Blockchain, when your product needs it.",
    description:
      "In-house expertise for the projects that call for it: custom chains, smart contracts, wallets and dApps, built with the same engineering discipline as everything else.",
  },
];

export const statsLabel = "In numbers";
export const stats = [
  { value: "80+", label: "Projects delivered", detail: "End-to-end product launches" },
  { value: "52%", label: "Still maintained by us", detail: "Of the projects we’ve delivered" },
  { value: "2–6 weeks", label: "Time to first release", detail: "From kickoff to production" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const servicesIntro = {
  eyebrow: "What we build",
  title: "Full-stack engineering. Blockchain when you need it.",
  lead: "Web, mobile, backend and cloud under one roof, with in-house blockchain specialists for the projects that call for it.",
};

export const services: Service[] = [
  {
    title: "Web Applications",
    description:
      "Custom web platforms, customer portals, dashboards and SaaS products built with React, Next.js and Node.js. Fast, accessible and ready to grow with your business.",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps from a single Flutter codebase, from design to publishing on the App Store and Google Play.",
    icon: Smartphone,
  },
  {
    title: "Backend, APIs & Cloud",
    description:
      "Robust APIs and services in Go and Node.js, automated deployments, containerised hosting, monitoring and backups. Infrastructure that ships every change safely.",
    icon: Server,
  },
  {
    title: "Integrations & Data Migrations",
    description:
      "Connect payment providers, ERPs, e-commerce platforms and third-party APIs, or move legacy systems and data to a modern stack without disrupting your business.",
    icon: Database,
  },
  {
    title: "Blockchain & Web3",
    description:
      "Custom blockchains, smart contracts, wallets and dApps for products that need them. Cosmos SDK, EVM and CosmWasm, built with disciplined security practices.",
    icon: Blocks,
  },
  {
    title: "Maintenance, Security & Support",
    description:
      "Upgrades, code and security reviews, monitoring and incident response. We keep your software secure and performant long after launch.",
    icon: Wrench,
  },
];

export const mailbox = {
  title: "MailBox — Professional Email",
  description:
    "Business email on your own domain: webmail, IMAP/POP3/SMTP, spam filtering, forwarders and domain pointers. Yearly plans, set up and handed over by us. Full end-user documentation is available online.",
  icon: Mail,
  docsHref: "/docs/mailbox",
  eyebrow: "Our product",
  docsCta: "View documentation",
  contactCta: "Get in touch",
};

export const howWeWork = {
  eyebrow: "How we work",
  title: "Delivery, end-to-end",
  body: "We own the outcome from scoping to launch. When additional specialization is required, we coordinate the right expertise to meet the same quality and reliability standard.",
  points: [
    "Single point of accountability for your project",
    "Transparent progress with weekly updates",
    "Clean handoff with documentation you can build on",
  ],
  steps: [
    {
      title: "Scope",
      body: "We define outcomes, success metrics, and constraints before writing code—so there are no surprises.",
    },
    {
      title: "Build",
      body: "Iterative development with regular check-ins. You see progress weekly, not at the end.",
    },
    {
      title: "Ship",
      body: "Launch with monitoring, documentation, and a clean handoff. We stay available for what comes next.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why VIBAST Labs",
  title: "Engineers who ship",
  lead: "Senior engineering and battle-tested practices across the whole stack. We build systems that work—and keep working.",
};

export const capabilities = [
  {
    title: "Product engineering",
    items: ["Web & mobile applications", "Clean, accessible interfaces", "APIs designed for integration"],
  },
  {
    title: "Engineering depth",
    items: ["Backend systems & cloud", "Data migrations & integrations", "Blockchain when it fits"],
  },
  {
    title: "Production ready",
    items: ["High-availability systems", "Security-first approach", "Long-term support"],
  },
];

export const contact = {
  eyebrow: "Get in touch",
  title: "Let’s build something that lasts",
  body: "A new product, a legacy system that needs a rewrite, or a complex migration—tell us what you need. We’ll give you an honest assessment and a clear path forward.",
  points: ["Free initial consultation", "Fast response", "No obligation estimate"],
  emailPrompt: "Or email directly",
};
