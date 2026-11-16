import type { ServicePageContent } from "@/content/types";

// Primary keyword: "custom blockchain development".

export const blockchainEn: ServicePageContent = {
  meta: {
    title: "Custom Blockchain Development",
    description: "Blockchains, smart contracts and wallets, built with the same care as the rest of our software. We'll also tell you when you don't need a blockchain.",
  },
  h1: "Custom blockchain development, when your product needs it",
  intro: "Blockchains, smart contracts and wallets, built with the same care as the rest of our software. And if a regular database does the job better, we'll tell you.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "Your product needs its own blockchain, or features that live on an existing one.",
      "You need smart contracts that hold value, and they have to be right the first time.",
      "Your users need a wallet or an app to use your network or token.",
      "You're not sure blockchain is the right fit, and you want a straight answer.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "Custom chains and smart contracts",
        body: "A chain built around your product's rules, or smart contracts on an existing network, reviewed and tested before they hold anything of value.",
      },
      {
        title: "Wallets and apps people can use",
        body: "Wallets, browser extensions and web or mobile apps that make your network simple to use for people who aren't experts.",
      },
      {
        title: "The same engineering discipline",
        body: "Clear plans, tests, reviews and careful releases, the way we build everything else, with hosting and upkeep after launch if you want them.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "We check the fit",
        body: "We talk about what you want to achieve and whether blockchain really helps. If it doesn't, we'll suggest something simpler.",
      },
      {
        title: "We plan and build",
        body: "A clear plan, then the work in short cycles with releases you can try on a test network first.",
      },
      {
        title: "We launch and look after it",
        body: "A careful launch, then updates, monitoring and support for as long as you need them.",
      },
    ],
  },
  cost: {
    title: "What it costs and how we work together",
    paragraphs: [
      "There's no fixed price list: it depends on what you need. We already have a lot built, so you don't pay for that part again, and we find the solution that fits both your need and your budget.",
      "Pay the way that suits you: a fixed price, monthly, hourly, per deliverable, or alongside your own team.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["Cosmos SDK", "CosmWasm", "EVM", "Go", "TypeScript", "React", "Flutter"],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Do we really need a blockchain?",
        a: "Often not. If a regular database and a well-built app do the job, that's cheaper and simpler, and we'll say so.",
      },
      {
        q: "Is blockchain all you do?",
        a: "No. We're a software company, and blockchain is one of the things we build. The same team builds websites, apps and the systems behind them.",
      },
      {
        q: "Can you work on an existing chain or contract?",
        a: "Yes. We can review it, fix what's risky and keep building on it, the same way we take over any other software.",
      },
    ],
  },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us where you're starting from. We'll come back with questions or a first estimate.",
    button: "Get a project estimate",
    href: "contact",
  },
};
