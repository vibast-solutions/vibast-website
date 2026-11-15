import type { ServicePageContent } from "@/content/types";

// Primary keyword: "managed hosting for web applications".

export const hostingMaintenanceEn: ServicePageContent = {
  meta: {
    title: "Managed Hosting & Maintenance for Web Apps",
    description: "A lean server for a small app, enterprise cloud when you need it. We keep it updated and backed up. You don't pay for scale you don't use.",
  },
  h1: "Hosting and maintenance that keep your app running",
  intro: "We host where it makes sense: a lean server for a small app, enterprise cloud when you need it. You don't pay for scale you don't use. Managed hosting for web applications, with people who look after it.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "You need a tool for your team, and you'd rather have it set up and running than built from scratch.",
      "Your app runs on a server nobody really looks after, and you're not sure the backups work.",
      "You pay for hosting you don't fully use, or your site slows down when more people show up.",
      "Updates and security fixes keep slipping, because nobody has the time for them.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "The right tool, set up properly",
        body: "Sometimes the best answer is an existing tool, set up properly. We'll tell you when you don't need custom software, and then install and configure it for you.",
      },
      {
        title: "Hosting that fits",
        body: "From a few euros a month for a small app to enterprise cloud for heavy load. It grows only when your usage does.",
      },
      {
        title: "We notice problems first",
        body: "We watch your app and its server, so problems are spotted and handled early, often before your users notice.",
      },
      {
        title: "Updates without the worry",
        body: "Security fixes and updates are applied regularly and tested first, so your app stays current instead of falling behind.",
      },
      {
        title: "Backups you can count on",
        body: "Your data is backed up automatically and kept away from the server it comes from. We check that it can actually be restored.",
      },
      {
        title: "People you can ask",
        body: "When something breaks or you need a change, you talk to the people who know your app, not to a ticket queue.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "We look at what you have",
        body: "Your app, your current hosting and how many people use it. Or, if you're starting fresh, what you need the tool to do.",
      },
      {
        title: "We suggest a setup",
        body: "The simplest setup that does the job, with a clear monthly cost. No extra capacity \"just in case\".",
      },
      {
        title: "We move or set it up",
        body: "We install the tool or move your app, carefully and with a way back, and agree the timing with you.",
      },
      {
        title: "We look after it",
        body: "Monitoring, updates, backups and support, month after month. When you grow, the setup grows with you.",
      },
    ],
  },
  cost: {
    title: "What it costs and how we work together",
    paragraphs: [
      "Hosting starts at a few euros a month and grows only with usage. Maintenance is usually a simple monthly fee, sized to your app and how much care it needs.",
      "We already have a lot of the setup and tooling built, so you don't pay for that part again. We find the solution that fits both what you need and your budget.",
      "Whether everything runs in your own accounts or on our hosting depends on your needs and budget. We explain the options and you choose.",
      "We stick around: 52% of the projects we've delivered are still maintained by us.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["Linux", "Docker", "nginx", "Cloudflare", "AWS", "MySQL", "PostgreSQL", "Prometheus", "Grafana"],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Can you host an app you didn't build?",
        a: "Yes. We look at it first, tell you what it needs to run well and then move it, carefully and with a way back.",
      },
      {
        q: "How much does hosting cost?",
        a: "It starts at a few euros a month for a small app and grows only with usage. You get a clear monthly figure before anything moves.",
      },
      {
        q: "Do we keep control of our accounts and data?",
        a: "It depends on what suits you. Everything can run in your own accounts, or on our hosting at a lower cost. We find the best option for your needs and budget.",
      },
      {
        q: "Do we really need custom software?",
        a: "Not always. If an existing tool does the job, we'll say so, set it up properly and look after it.",
      },
    ],
  },
  cta: {
    title: "Want your app in safe hands?",
    body: "Tell us what you run today, or what you need. We'll come back with questions or a first estimate.",
    button: "Get a project estimate",
    href: "contact",
  },
};
