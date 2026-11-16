import type { ServicePageContent } from "@/content/types";

// Primary phrase: "mobile app development" (variants: iOS and Android app, cross-platform app).

export const mobileAppsEn: ServicePageContent = {
  meta: {
    title: "Mobile App Development for iOS & Android",
    description: "An app your customers or your team will actually use, on iPhone and Android. We plan it, build it, publish it and keep it running. Get a project estimate.",
  },
  h1: "Mobile apps for iPhone and Android, built once for both",
  intro: "An app your customers or your team will actually use, on iPhone and Android. Our mobile app development covers the whole path: we plan it with you, build one app for both platforms, publish it in the stores and keep it running.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "Your customers keep asking for an app, or your competitors already have one.",
      "Your team works in the field and needs an app for orders, checklists or reports instead of paper and phone calls.",
      "You have an idea for an app and want to see it on a real phone before you spend a large budget.",
      "You already have a website or a system, and you want an app that works with it.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "One app for both platforms",
        body: "We build the app once and it runs on iPhone and Android. You get the same features on both, without paying for two separate apps.",
      },
      {
        title: "Built for the people who use it",
        body: "Simple screens, clear buttons and only the steps that are really needed. Customers find what they want, and your team gets the job done faster.",
      },
      {
        title: "Connected to what you already have",
        body: "The app talks to your website, store or internal systems, so data is entered once and shows up everywhere.",
      },
      {
        title: "Published in the stores",
        body: "We prepare the store listings and handle the App Store and Google Play publishing process with you, including the updates after launch.",
      },
      {
        title: "Everything behind the app",
        body: "Most apps need a server, accounts and notifications. We build that part too, and host it on a setup that fits your number of users.",
      },
      {
        title: "Kept up to date",
        body: "Phones and operating systems change every year. We keep the app working on new versions and add features when you need them.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Talk",
        body: "You tell us who the app is for and what it should do. We ask questions, then come back with a first estimate and the options that fit your budget.",
      },
      {
        title: "Plan and first release",
        body: "We agree on the few features that matter most. You hold a working version on your own phone in 2–6 weeks.",
      },
      {
        title: "Build in short cycles",
        body: "We add features in small steps and you test each one. You decide what comes next based on what real users do.",
      },
      {
        title: "Publish and look after it",
        body: "We publish the app, keep the server behind it running and ship updates as phones, stores and your business change.",
      },
    ],
  },
  cost: {
    title: "What does it cost?",
    paragraphs: [
      "It depends on what the app needs to do. A simple app with a few screens costs far less than one with payments, maps and its own accounts. We already have a lot built, and you don't pay for that part again.",
      "You choose how to pay: a fixed price, monthly, hourly or per deliverable, or we work alongside your own team. The server behind the app starts at a few euros a month and grows only with usage.",
      "Who owns the code and the store accounts depends on your needs and budget. You can have full ownership, or a lower-cost option built on our existing components and hosting. We'll find the solution that fits both.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["Flutter", "Dart", "Go", "Node.js", "PostgreSQL"],
  },
  faq: {
    title: "Questions we often get",
    items: [
      {
        q: "Do I need two separate apps for iPhone and Android?",
        a: "No. We build one app that runs on both. It looks and feels right on each phone, and you pay for one codebase instead of two.",
      },
      {
        q: "How long until the app is in the stores?",
        a: "You see a first working version in 2–6 weeks. When it goes into the stores depends on what the first public version must include and on the stores' review, which we handle with you.",
      },
      {
        q: "Do I need an app, or is a website enough?",
        a: "Sometimes a website that works well on phones is all you need, and it costs less. If notifications, offline use, the camera or daily use matter, an app is usually worth it. We'll tell you honestly which fits.",
      },
      {
        q: "Can you take over an app someone else built?",
        a: "Yes. We review it, keep what works and fix what's risky. If it needs more than small fixes, we bring it up to date, usually without starting over.",
      },
    ],
  },
  cta: {
    title: "Have an app in mind?",
    body: "Tell us who it's for and what it should do. We'll come back with questions or a first estimate.",
    button: "Get a project estimate",
    href: "contact",
  },
};
