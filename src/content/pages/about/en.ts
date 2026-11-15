import type { AboutContent } from "./types";

export const aboutEn: AboutContent = {
  meta: {
    title: "About Us: a Software Company from Romania",
    description: "VIBAST Labs is a software company from Câmpina, Romania, with clients across the EU. Specialists with experience at one of Europe's biggest companies.",
  },
  h1: "A small software team with big-company experience",
  intro: "VIBAST Labs is a software company from Câmpina, Romania, with clients across the EU. Our specialists bring experience from one of the biggest companies in Europe.",
  whoWeAre: {
    title: "Who we are",
    paragraphs: [
      "We build, host and look after software for businesses: websites and online stores, mobile and desktop apps, internal tools and the systems behind them. From a tool for a team of five to a platform for thousands of users.",
      "We're small on purpose. You talk to the people who do the work, and they've built software at the scale of one of Europe's biggest companies. You get that experience without the overhead.",
    ],
  },
  stats: [
    { value: "80+", label: "projects delivered" },
    { value: "52%", label: "still maintained by us" },
    { value: "2–6 weeks", label: "to a first release" },
  ],
  howWeThink: {
    title: "How we think",
    items: [
      {
        title: "Right-sized solutions",
        body: "You get what your business needs, not the biggest thing we could build. Sometimes the best answer is an existing tool, set up properly. We'll tell you when you don't need custom software.",
      },
      {
        title: "Current technology",
        body: "Built on current, well-supported technology: easy to maintain, easy to grow.",
      },
      {
        title: "Hosting that fits the budget",
        body: "We host where it makes sense: a lean server for a small app, enterprise cloud when you need it. You don't pay for scale you don't use.",
      },
      {
        title: "We stick around",
        body: "We don't hand over and disappear. We still maintain 52% of the projects we've delivered.",
      },
    ],
  },
  howWeWork: {
    title: "How we work",
    intro: "Your scope, your budget, your pace. Pick the way of working that suits you:",
    items: [
      "A fixed price for a clear scope",
      "A monthly fee",
      "By the hour",
      "Payment per deliverable",
      "Alongside your own team",
    ],
    note: "Even a small website can be paid monthly.",
  },
  companyDetails: {
    title: "Company details",
    brandLabel: "Brand",
    legalNameLabel: "Legal name",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us where you're starting from. We'll come back with questions or a first estimate.",
    button: "Get a project estimate",
    href: "contact",
  },
};
