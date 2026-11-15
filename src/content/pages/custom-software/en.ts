import type { ServicePageContent } from "@/content/types";

// Primary phrase: "custom software development" (variants: internal tools, business software, integrations).

export const customSoftwareEn: ServicePageContent = {
  meta: {
    title: "Custom Software Development & Integrations",
    description: "Internal tools, desktop apps and integrations that take manual work off your team. And when an existing tool fits better, we'll tell you.",
  },
  h1: "Custom software built around the way your business works",
  intro: "Internal tools, desktop apps and integrations that take manual work off your team. Sometimes the best answer is an existing tool, set up properly. We'll tell you when you don't need custom software.",
  isThisYou: {
    title: "Is this you?",
    items: [
      "Your team copies the same data between spreadsheets, email and two or three different programs every day.",
      "You've tried off-the-shelf tools, but none of them fits the way your business actually works.",
      "Your systems don't talk to each other, and mistakes happen in the gaps.",
      "You need a desktop program that works on your own computers, even without a reliable internet connection.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "Internal tools",
        body: "Programs for orders, stock, scheduling, reports or approvals, shaped around your process instead of forcing your team into someone else's.",
      },
      {
        title: "Desktop apps",
        body: "Programs that run on Windows, macOS or Linux, for work that needs local files, connected devices or works offline.",
      },
      {
        title: "Integrations",
        body: "We connect the systems you already use: your store, invoicing, accounting, CRM or suppliers. Data is entered once and goes where it needs to go.",
      },
      {
        title: "Automation",
        body: "Recurring tasks run on their own: reports land in your inbox, documents are generated, reminders go out. Your team spends its time on the work that needs people.",
      },
      {
        title: "Sized to your business",
        body: "From a tool for a team of five to a platform for thousands of users. We build what you need now and leave room to grow.",
      },
      {
        title: "Honest advice first",
        body: "If an existing tool, set up properly, does the job, we'll say so and help you set it up. You pay for custom software only where it earns its keep.",
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        title: "Understand the work",
        body: "We talk to you and, ideally, to the people who'll use the tool. We look at how the work is done today and where time and money get lost.",
      },
      {
        title: "Plan and first release",
        body: "We pick the part that saves the most effort and build it first. Your team uses a working version in 2–6 weeks.",
      },
      {
        title: "Build in short cycles",
        body: "We add the next pieces in small steps, based on your team's feedback, so the tool fits how they really work.",
      },
      {
        title: "Run and look after it",
        body: "We host it, back it up and keep it current. When your business changes, the software changes with it.",
      },
    ],
  },
  cost: {
    title: "What does it cost?",
    paragraphs: [
      "Custom software development doesn't have to mean a huge project. A small internal tool or a single integration often costs less than people expect; a platform used across the company is a bigger investment. We already have a lot built, and you don't pay for that part again.",
      "You choose how to pay: a fixed price, monthly, hourly, per deliverable, or we work alongside your own team. Hosting starts at a few euros a month and grows only with usage.",
      "Who owns the code and the accounts depends on your needs and budget. You can have full ownership, or a lower-cost option built on our existing components and hosting. We'll find the solution that fits both.",
    ],
  },
  technologies: {
    label: "Technologies we use",
    items: ["Go", "Node.js", "TypeScript", "React", "Wails", "PostgreSQL", "MySQL"],
  },
  faq: {
    title: "Questions we often get",
    items: [
      {
        q: "How do I know if I need custom software?",
        a: "Tell us what you're trying to do. If an existing product, set up properly, covers it, we'll recommend it. Custom software makes sense when your process is what sets you apart, or when the ready-made options cost more in workarounds than they save.",
      },
      {
        q: "Can it work with the programs we already use?",
        a: "Usually, yes. Most modern tools can be connected, and older ones can often be reached through their files, exports or database. We check this early, before you commit to anything.",
      },
      {
        q: "Will it grow if our team or business grows?",
        a: "Yes. We build it so new users, features and data can be added later without starting over, and we host it on a setup that grows with your usage.",
      },
      {
        q: "What if the person who asked for it leaves?",
        a: "The software doesn't depend on one person. We keep it documented and looked after, so it keeps working whoever is on your side.",
      },
    ],
  },
  cta: {
    title: "Tell us what slows your team down",
    body: "Describe the work as it happens today. We'll come back with questions or a first estimate, or tell you if an existing tool will do.",
    button: "Get a project estimate",
    href: "contact",
  },
};
