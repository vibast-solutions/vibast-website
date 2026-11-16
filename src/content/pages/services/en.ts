import type { ServicesHubContent } from "./types";

// Primary phrase: "software development services".

export const servicesEn: ServicesHubContent = {
  meta: {
    title: "Software Development Services",
    description: "Websites, mobile apps, custom software, app takeovers, hosting and blockchain. Start from where you are; we find the fit for your budget.",
  },
  h1: "Software development services for every stage of your project",
  intro: "Websites, mobile and desktop apps, internal tools and the infrastructure behind them. We build it, host it and look after it, whether you're starting fresh or fixing something that already exists.",
  startingPoints: {
    title: "Where are you starting from?",
    lead: "Most projects start in one of three places. Pick yours and we'll take it from there.",
    items: [
      {
        title: "Something new",
        body: "You have an idea, a process that runs on spreadsheets, or a business that needs a website, a store or an app. We help you shape it, then build the first version in 2–6 weeks.",
        link: "See what we build",
        href: null,
      },
      {
        title: "An app that's stuck",
        body: "The developer left, nobody dares to touch the code, or you just want a second opinion. We review it, keep what works and fix what's risky, usually without starting over.",
        link: "Get your app reviewed",
        href: "appModernization",
      },
      {
        title: "Set it up and keep it running",
        body: "You have a tool or an app and need it hosted, updated and looked after. We run it on hosting that fits its size, so you don't pay for scale you don't use.",
        link: "Hosting & maintenance",
        href: "hostingMaintenance",
      },
    ],
  },
  services: {
    title: "What we build",
    lead: "Six services, one team. Most clients use more than one: we build it, then we host it and keep it up to date.",
    linkLabel: "Learn more",
    items: {
      webDevelopment: {
        title: "Websites, web apps & online stores",
        body: "From a simple company website to an online store or a web app used by thousands of people.",
      },
      mobileApps: {
        title: "Mobile apps",
        body: "One app for iPhone and Android that your customers or your team will actually use.",
      },
      customSoftware: {
        title: "Custom software & integrations",
        body: "Internal tools, desktop apps and connections between the systems you already use, so your team stops copying data by hand.",
      },
      appModernization: {
        title: "App takeover & modernization",
        body: "We take over apps other teams left behind, review them and bring them up to date.",
      },
      hostingMaintenance: {
        title: "Hosting & maintenance",
        body: "Hosting that fits your app and your budget, with updates, backups and monitoring taken care of.",
      },
      blockchain: {
        title: "Blockchain",
        body: "Blockchain networks, wallets and the apps that connect to them, when a blockchain is the right tool for the job.",
      },
    },
  },
  approach: {
    title: "The same way of working, whatever you need",
    items: [
      "From a tool for a team of five to a platform for thousands of users.",
      "Sometimes the best answer is an existing tool, set up properly. We'll tell you when you don't need custom software.",
      "We already have a lot built, and you don't pay for that part again.",
      "Fixed price, monthly, hourly or per deliverable. Even small websites can be paid monthly.",
      "Specialists with experience at one of the biggest companies in Europe, working with clients across the EU.",
    ],
  },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us where you're starting from. Your scope, your budget, your pace.",
    button: "Get a project estimate",
    href: "contact",
  },
};
