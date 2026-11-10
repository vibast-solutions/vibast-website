import {
  Blocks,
  Code,
  Mail,
  Network,
  Search,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// Home page copy. Section ids double as in-page anchors: `cta` is also linked
// from the docs (CONTACT_ANCHOR), so don't rename it.
export const SECTION_IDS = {
  services: "services",
  howWeWork: "how-we-work",
  contact: "cta",
} as const;

export const CONTACT_EMAIL = "stefan@vibast.ro";

export const navLinks = [
  { label: "Services", href: `/#${SECTION_IDS.services}` },
  { label: "How we work", href: `/#${SECTION_IDS.howWeWork}` },
  { label: "Docs", href: "/docs/mailbox" },
];

export const hero = {
  eyebrow: "Blockchain & software engineering",
  headline: ["Custom blockchains.", "Any architecture."],
  description:
    "From Cosmos SDK appchains to UTXO-based networks and beyond. We design and build the blockchain that fits your specific use case.",
};

// The three practice areas (formerly the rotating hero slides).
export const practices = [
  {
    tag: "Blockchain Development",
    headline: "Custom blockchains. Any architecture.",
    description:
      "From Cosmos SDK appchains to UTXO-based networks and beyond. We design and build the blockchain that fits your specific use case.",
  },
  {
    tag: "Web Development",
    headline: "Modern web applications. Designed to scale.",
    description:
      "Full-stack web development with React, Next.js, and Node.js. APIs, databases, and cloud infrastructure built for performance.",
  },
  {
    tag: "Reliable Infrastructure",
    headline: "Systems that work. And keep working.",
    description:
      "High-availability backends, data migrations, and production-grade infrastructure. Built with security and maintainability in mind.",
  },
];

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

export const services: Service[] = [
  {
    title: "Custom Blockchain Development",
    description:
      "Purpose-built blockchains tailored to your requirements. UTXO or account-based, custom consensus, any architecture. We build the chain that fits your use case.",
    icon: Blocks,
  },
  {
    title: "Cosmos SDK & Appchains",
    description:
      "Production-ready Cosmos SDK appchains with custom modules, IBC connectivity, and seamless integration with the interchain ecosystem.",
    icon: Network,
  },
  {
    title: "Smart Contracts",
    description:
      "Secure, audited smart contracts for EVM chains and CosmWasm. From DeFi protocols to NFT platforms with disciplined security practices.",
    icon: ShieldCheck,
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Reliable APIs, databases, and cloud infrastructure. Data migrations, system integrations, and backend services built for scale and maintainability.",
    icon: Code,
  },
  {
    title: "Security & Auditing",
    description:
      "Smart contract audits, code reviews, and security assessments. Independent analysis with actionable recommendations for blockchain and traditional systems.",
    icon: Search,
  },
  {
    title: "Ongoing Support",
    description:
      "Maintenance, upgrades, monitoring, and incident response. Keep your systems—blockchain or otherwise—secure and performant post-launch.",
    icon: Wrench,
  },
];

export const mailbox = {
  title: "MailBox — Professional Email",
  description:
    "Business email on your own domain: webmail, IMAP/POP3/SMTP, spam filtering, forwarders and domain pointers. Yearly plans, set up and handed over by us. Full end-user documentation is available online.",
  icon: Mail,
  docsHref: "/docs/mailbox",
};

export const howWeWork = {
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

export const capabilities = [
  {
    title: "Blockchain expertise",
    items: ["Custom chains, any architecture", "Cosmos SDK & IBC integration", "Smart contract development"],
  },
  {
    title: "Engineering depth",
    items: ["Backend systems & APIs", "Data migrations & ETL", "Cloud infrastructure"],
  },
  {
    title: "Production ready",
    items: ["High-availability systems", "Security-first approach", "Long-term support"],
  },
];

export const contact = {
  title: "Let’s build something that lasts",
  body: "Custom blockchain, backend infrastructure, or complex migration—tell us what you need. We’ll give you an honest assessment and a clear path forward.",
  points: ["Free initial consultation", "Fast response", "No obligation estimate"],
};

export const company = {
  tagline: "Blockchain & software engineering. Built to last.",
  legalName: "VIBAST SOLUTIONS SRL",
  address: "B. P. Hasdeu 23, Campina, Prahova, Romania",
  ids: [
    { label: "VAT No.", value: "RO51459106" },
    { label: "Reg. No.", value: "J2025012011008" },
    { label: "EUID", value: "ROONRC.J2025012011008" },
    { label: "CUI", value: "51317810" },
    { label: "D-U-N-S", value: "52-396-3698" },
  ],
};
