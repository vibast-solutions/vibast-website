import type { ServicePageContent } from "@/content/types";

// Primary keyword: "legacy application modernization".

export const appModernizationEn: ServicePageContent = {
  meta: {
    title: "App Takeover, Review & Modernization",
    description: "An app nobody has touched in years? We review it, keep what works, fix what's risky and bring it up to date, usually without starting over.",
  },
  h1: "Take over, review and modernize your existing app",
  intro: "An app nobody has touched in years? We review it, keep what works, fix what's risky and bring it up to date, usually without starting over. Legacy application modernization, done in small, safe steps.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "Your developer or agency left, and nobody else knows how the app works.",
      "Nobody dares to touch it, because every change breaks something else.",
      "It runs on old versions, gets slower every year and worries you every time it goes down.",
      "The project stalled halfway, and you're not sure whether to fix it or start again.",
      "It works, but you'd like a second opinion and fresh eyes before you invest more.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "An honest review",
        body: "We read the code, the setup and how the app is used. You learn what is solid, what is risky and what is simply out of date.",
      },
      {
        title: "Solutions, not just a list of problems",
        body: "Every finding comes with a concrete fix and a rough idea of the effort, ordered by what matters most to you.",
      },
      {
        title: "Knowledge back in your hands",
        body: "We write down how the app works, how it is built and how it runs, so it never again depends on one person's memory.",
      },
      {
        title: "A stable app first",
        body: "We fix what is broken or risky before anything else: security holes, failing parts, backups that don't exist.",
      },
      {
        title: "Up to date, step by step",
        body: "We bring old parts up to current, well-supported technology one piece at a time, while the app keeps doing its job.",
      },
      {
        title: "Someone who stays",
        body: "After the work is done, we can keep looking after the app, so it doesn't drift out of date again.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Tell us what you have",
        body: "A short talk about the app, what it does for your business and what worries you. Then we ask for access to the code and the servers.",
      },
      {
        title: "We review it",
        body: "You get a clear report: what works, what is risky, what we would fix first and what it would take. In plain words, not a pile of jargon.",
      },
      {
        title: "We stabilize it",
        body: "If you go ahead, we start with the urgent fixes, so the app is safe and predictable before we change anything bigger.",
      },
      {
        title: "We modernize it in steps",
        body: "We update and improve it in small releases you can see and check. Starting over is only on the table when it is truly the cheaper road, and we'll tell you if it is.",
      },
    ],
  },
  cost: {
    title: "What it costs and how we work together",
    paragraphs: [
      "The review is free for software we built. For software built elsewhere, it's a paid review, priced up front once we know the size of the app.",
      "Fixing and modernizing usually costs far less than rebuilding, because we keep everything that still works. We find the solution that fits both what the app needs and your budget.",
      "Pay the way that suits you: a fixed price, monthly, hourly, per deliverable, or alongside your own team. Your scope, your budget, your pace.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["Go", "Node.js", "PHP", "React", "Next.js", "Flutter", "PrestaShop", "MySQL", "PostgreSQL", "Docker"],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Do we have to start over?",
        a: "Usually not. Most apps have a lot worth keeping. We keep what works, fix what's risky and update the rest in steps. If a rebuild really is the better deal, the review will say so and explain why.",
      },
      {
        q: "Will the app go down while you work on it?",
        a: "We plan every change to keep interruptions as small as possible, test it before it goes live and keep a way back. Where a short pause can't be avoided, we agree the time with you first.",
      },
      {
        q: "Is the review free?",
        a: "It is free for software we built. For software built by someone else it's a paid review, and you know the price before we start.",
      },
      {
        q: "The original developer is gone and there's no documentation. Can you still help?",
        a: "Yes. That's a common situation. Access to the code and the servers is enough to start, and the documentation we write along the way stays with you.",
      },
      {
        q: "What if the app is built with something you don't use?",
        a: "Tell us what it is built with. We'll say honestly whether we're the right team for it before you pay anything.",
      },
    ],
  },
  cta: {
    title: "Want a second opinion on your app?",
    body: "Tell us what you have and what worries you. We'll come back with questions or a first estimate, and later with solutions, not just a list of problems.",
    button: "Get your app reviewed",
    href: "contact",
  },
};
