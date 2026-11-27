import { SIMPLE_SITE_FROM } from "./pricing";
import type { HomePageContent } from "./types";

const simpleSite = SIMPLE_SITE_FROM.en;

export const homeEn: HomePageContent = {
  meta: {
    title: "Software Development Company in Romania",
    description:
      "We build, host and look after software of any size, from a simple website to systems used by thousands. 80+ projects delivered. Get a project estimate.",
  },
  hero: {
    eyebrow: "Software development company",
    h1: "Software that fits your business, from a simple website to systems built for scale.",
    sub: "Websites, mobile and desktop apps, internal tools and the infrastructure behind them. We build it, host it and look after it.",
    primaryCta: "Get a project estimate",
    secondaryCta: "See how we work",
    emailPrompt: "Or email us:",
    layers: ["We build it", "We host it", "We look after it"],
  },
  proof: {
    label: "In numbers",
    stats: [
      { value: "80+", label: "projects delivered" },
      { value: "52%", label: "still maintained by us" },
      { value: "2–6 weeks", label: "to the first release" },
    ],
    reach: { value: "EU", label: "clients across the EU" },
  },
  startingPoints: {
    eyebrow: "Where are you starting from?",
    title: "Start from where you are.",
    cards: {
      new: {
        title: "Something new",
        body: "You have an idea, a process to simplify or a website to launch. We help you shape it and build the right size of it.",
        cta: "See what we build",
      },
      stuck: {
        title: "Stuck, or need a second opinion",
        body: "An app nobody has touched in years? We review it, keep what works, fix what's risky and bring it up to date, usually without starting over.",
        cta: "Get your app reviewed",
      },
      run: {
        title: "Set it up and run it",
        body: "Sometimes the best answer is an existing tool, set up properly. We'll tell you when you don't need custom software, and we host and look after it for you.",
        cta: "Hosting & maintenance",
      },
    },
  },
  services: {
    eyebrow: "What we build",
    title: "One team for the whole job.",
    lead: "From a tool for a team of five to a platform for thousands of users.",
    cards: {
      webDevelopment: {
        title: "Websites, web apps & online stores",
        body: "Sites and web apps that load fast, work on every screen and are easy to update.",
      },
      mobileApps: {
        title: "Mobile apps",
        body: "Apps for iPhone and Android, from the first version to the app stores.",
      },
      customSoftware: {
        title: "Custom software & integrations",
        body: "Internal tools, desktop apps and connections between the systems you already use.",
      },
      appModernization: {
        title: "App takeover & modernization",
        body: "We take over apps other teams left behind and make them safe to change again.",
      },
      hostingMaintenance: {
        title: "Hosting & maintenance",
        body: "We keep your software online, backed up and up to date, so you don't have to.",
      },
      blockchain: {
        title: "Blockchain",
        body: "When your product needs a blockchain, we build that part too.",
      },
    },
    more: "Learn more",
  },
  range: {
    eyebrow: "The range",
    title: "Built to the size you need.",
    items: [
      {
        title: "From five people to thousands of users",
        body: "A simple tool for a small team or a platform that carries heavy load. We build for where you are and leave room to grow.",
      },
      {
        title: "From a lean server to enterprise cloud",
        body: "We host where it makes sense: a lean server for a small app, enterprise cloud when you need it. You don't pay for scale you don't use.",
      },
    ],
    note: "Built on current, well-supported technology: easy to maintain, easy to grow.",
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "Four steps, no surprises.",
    steps: [
      { title: "Talk", body: "You tell us what you need. We ask questions until we understand the problem." },
      { title: "Plan and first release", body: "We agree on the first useful version and ship it, usually in 2–6 weeks." },
      { title: "Build in short cycles", body: "You see progress often and can change direction as you learn." },
      { title: "Host and look after it", body: "We keep it running, safe and up to date for as long as you need." },
    ],
    payment:
      "Pay the way that suits you: fixed price, monthly, hourly or per deliverable. Even a small website can be paid monthly.",
  },
  cost: {
    eyebrow: "What does it cost?",
    title: "Your scope, your budget, your pace.",
    paragraphs: [
      "We already have a lot built, and you don't pay for that part again.",
      `A simple website can start from ${simpleSite}. A complex platform can cost many thousands. Hosting starts at a few euros a month and grows only with usage.`,
      "There's no fixed price list. Tell us what you need, and we'll find the solution that fits both the need and the budget.",
    ],
    cta: "Get a project estimate",
  },
  whyUs: {
    eyebrow: "Why VIBAST Labs",
    title: "Why teams choose us.",
    items: [
      { title: "Right-sized solutions", body: "We build what you need, not more. If an existing tool does the job, we say so." },
      { title: "Current technology", body: "Well-supported tools that are easy to maintain and easy to grow." },
      { title: "Hosting that fits the budget", body: "A lean server or enterprise cloud, depending on what your software really needs." },
      { title: "We stick around", body: "52% of the projects we delivered are still looked after by us." },
      { title: "Experienced specialists", body: "Our team brings experience from one of the biggest companies in Europe." },
    ],
  },
  mailbox: {
    eyebrow: "Our product",
    title: "MailBox: business email on your own domain",
    body: "Professional email on your company's domain. We set it up and hand it over ready to use.",
    cta: "About MailBox",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "How much does it cost?",
        a: `It depends on what you need. A simple website can start from ${simpleSite}; a complex platform can cost many thousands. You don't pay again for what we already have built, and hosting starts at a few euros a month. Tell us about your project and we'll come back with a first estimate.`,
      },
      {
        q: "How long does it take?",
        a: "The first release usually comes 2–6 weeks after we start. After that we build in short cycles, so you see progress often.",
      },
      {
        q: "Who owns the code?",
        a: "It depends on what suits you. Full ownership is available, or a lower-cost option built on our existing components and hosting. We find the best solution for your needs and budget.",
      },
      {
        q: "Can you take over our existing app?",
        a: "Yes. We review it, keep what works, fix what's risky and bring it up to date, usually without starting over. The review is free for software we built; for software built elsewhere it's a paid review, and you get solutions, not just a list of problems.",
      },
      {
        q: "Where is it hosted?",
        a: "Where it makes sense: a lean server for a small app, enterprise cloud when you need it. You don't pay for scale you don't use.",
      },
      {
        q: "Can we pay monthly?",
        a: "Yes. We work fixed price, monthly, hourly, per deliverable or alongside your own team. Even small websites can be paid monthly.",
      },
    ],
  },
  contact: {
    eyebrow: "Get a project estimate",
    title: "Tell us where you're starting from.",
    body: "A few lines are enough. We'll come back with questions or a first estimate.",
    emailPrompt: "Or email us directly",
    phonePrompt: "Or call us, or message us on WhatsApp",
    phoneHours: "Monday to Thursday, 09:00–15:00 UTC",
    whatsappLabel: "Message us on WhatsApp",
  },
};
