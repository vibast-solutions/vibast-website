import type { WorkContent } from "./types";

export const workEn: WorkContent = {
  meta: {
    title: "Our Work: Projects and Products",
    description: "Software we've built for clients and the products we run ourselves, like MailBox business email and our JSON tool.",
  },
  h1: "Projects and products we've built",
  intro: "We've delivered more than 80 projects for clients across the EU, and we still look after more than half of them. Here are the products we build and run ourselves.",
  sections: [
    {
      // Client projects: add entries here when Stefan supplies the list
      // (name, optional client, summary, problem → what we did → result).
      title: "Client projects",
      entries: [],
    },
    {
      title: "Things we build and run ourselves",
      intro: "Products we designed, built and keep running.",
      entries: [
        {
          name: "MailBox",
          summary: "Business email on your own domain, with webmail, spam filtering and support for any email app. We set up your account and hand it over ready to use. Yearly plans.",
          link: { label: "See MailBox", route: "mailbox" },
        },
        {
          name: "JSON tool",
          summary: "A free online tool for reading JSON. Paste it in to format or minify it, browse it as a tree, or open two side by side and see what changed. It runs in your browser, with nothing to install. It can also show blockchain token amounts in a readable form.",
          link: { label: "Open json.vibast.ro", url: "https://json.vibast.ro" },
        },
      ],
    },
  ],
  labels: { client: "Client", problem: "The problem", whatWeDid: "What we did", result: "The result" },
  cta: {
    title: "Have a project in mind?",
    body: "Tell us where you're starting from. Your scope, your budget, your pace.",
    button: "Get a project estimate",
    href: "contact",
  },
};
