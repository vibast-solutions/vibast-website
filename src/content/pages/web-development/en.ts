import type { ServicePageContent } from "@/content/types";

// Primary phrase: "web application development" (variants: website development, online store).

export const webDevelopmentEn: ServicePageContent = {
  meta: {
    title: "Website & Web App Development",
    description: "From a simple company website to an online store or web app used by thousands. Built to grow, hosted to fit your budget. Get a project estimate.",
  },
  h1: "Websites, web apps and online stores that work for your business",
  intro: "From a simple company website to an online store or a web app used by thousands. We handle web application development end to end: we plan it with you, build it, host it and keep it up to date.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "You need a website that explains what you do and brings in enquiries, without a big upfront bill.",
      "You want to sell online, or your current store is slow, outdated or hard to manage.",
      "Your team runs a process on spreadsheets and email, and it's time for a proper web app.",
      "You have an idea for an online product or a customer portal and need a team to build the first version.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "Company websites",
        body: "A clear, fast site that tells visitors what you do and how to reach you. Easy to update, readable on any phone, and set up so search engines can find it.",
      },
      {
        title: "Online stores",
        body: "Stores of any size and kind: a small catalogue, thousands of products, or stock synced with the systems you already use. Payments, shipping and invoicing set up properly.",
      },
      {
        title: "Web apps and portals",
        body: "Client portals, booking systems, dashboards and online products. Built for the people who use them every day, with logins and permissions that fit your team.",
      },
      {
        title: "Built to grow",
        body: "Built on current, well-supported technology: easy to maintain, easy to grow. Start small and add features when you need them, not before.",
      },
      {
        title: "Hosting that fits",
        body: "We host it on a lean server for a small site or on enterprise cloud for heavy traffic. You don't pay for scale you don't use.",
      },
      {
        title: "Someone to call afterwards",
        body: "Updates, security fixes, backups and small changes, so your site or app keeps working long after launch.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Talk",
        body: "You tell us what you need and what budget you have in mind. We ask questions, then come back with a first estimate and the options that fit.",
      },
      {
        title: "Plan and first release",
        body: "We agree on what the first version must do. You see it working in 2–6 weeks, not after months of waiting.",
      },
      {
        title: "Build in short cycles",
        body: "We add features in small steps and show you each one. You can change priorities as you learn what your visitors and customers really use.",
      },
      {
        title: "Host and look after it",
        body: "We put it live, keep it running and keep it current: updates, backups and the small changes that come up along the way.",
      },
    ],
  },
  cost: {
    title: "What does it cost?",
    paragraphs: [
      "There's no fixed price list, because no two projects are the same. A simple website can cost from a few hundred euros; a complex web app or store can cost many thousands. We already have a lot built, and you don't pay for that part again.",
      "You choose how to pay: a fixed price, monthly, hourly or per deliverable. Even a small website can be paid monthly, so you don't need a large sum upfront. Hosting starts at a few euros a month and grows only with usage.",
      "Who owns the code and the accounts depends on your needs and budget. You can have full ownership, or a lower-cost option built on our existing components and hosting. We'll find the solution that fits both.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["React", "Next.js", "Node.js", "Go", "PrestaShop", "PostgreSQL", "MySQL"],
  },
  faq: {
    title: "Questions we often get",
    items: [
      {
        q: "How long does a website take?",
        a: "A simple website is usually live within a few weeks. For larger web apps and stores you see a first working version in 2–6 weeks, and we keep building from there.",
      },
      {
        q: "Can you redo or take over our existing site or store?",
        a: "Yes. We look at what you have, keep what works and fix or replace what doesn't. Sometimes a redesign is enough; sometimes it's worth rebuilding. We'll tell you which, and why.",
      },
      {
        q: "Can I update the content myself?",
        a: "If you want to, yes. We set up the site so you can change texts, images and products yourself. If you'd rather not, we can do it for you.",
      },
      {
        q: "Do I need a custom store, or will a ready-made platform do?",
        a: "Often a well-configured existing platform is the best answer, and it costs less. We build custom only where it pays off, for example for unusual pricing, integrations or very large catalogues.",
      },
      {
        q: "Do you work with clients outside Romania?",
        a: "Yes. We work with clients across the EU, in English or Romanian.",
      },
    ],
  },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us what you want to build and we'll come back with questions or a first estimate. Your scope, your budget, your pace.",
    button: "Get a project estimate",
    href: "contact",
  },
};
