import type { MailboxContent } from "./types";

export const mailboxEn: MailboxContent = {
  meta: {
    title: "MailBox: Business Email on Your Own Domain",
    description: "Professional email on your company's domain, with webmail, spam filtering and yearly plans from €18. We set it up and hand it over ready to use.",
  },
  h1: "MailBox: business email on your own domain",
  intro: "Professional email on your company's domain, with webmail and spam filtering. We set it up and hand it over ready to use.",
  heroLinks: [
    { label: "Ask for MailBox", route: "contact" },
    { label: "Read the documentation", route: "docsMailbox" },
  ],
  forWho: {
    title: "Is this you?",
    items: [
      "Your business still writes from a free email address and you want one on your own domain.",
      "You need addresses for your team, and shared ones like office@ or sales@.",
      "You own more than one domain and want all of them to land in the same inboxes.",
      "You're moving from another email provider and want to bring your old messages along.",
    ],
  },
  whatYouGet: {
    title: "What you get",
    items: [
      {
        title: "Email on your domain",
        body: "Addresses like name@yourcompany.com, for everyone on your team.",
      },
      {
        title: "Webmail",
        body: "Read and send email from any browser, with nothing to set up.",
      },
      {
        title: "Works with your email apps",
        body: "Outlook, Apple Mail, Thunderbird or the app on your phone, with your messages in sync on every device.",
      },
      {
        title: "Spam filtering",
        body: "Incoming email is checked before it reaches you, so your inbox stays clean.",
      },
      {
        title: "Shared addresses and auto-replies",
        body: "Send office@ or sales@ to one or more inboxes, and switch on an out-of-office reply when you need one.",
      },
      {
        title: "One control panel",
        body: "Add mailboxes, change passwords, manage your domains and forwarding, all in one place.",
      },
    ],
  },
  plans: {
    title: "Plans",
    intro: "All plans are paid yearly. Need different limits? Tell us what you need and we'll put together an offer.",
    perYear: "per year",
    featured: "Recommended",
    unlimited: "Unlimited",
    rows: {
      storage: "Storage",
      domains: "Domains",
      mailboxes: "Mailboxes",
      forwarders: "Forwarding addresses",
      pointers: "Extra domains on the same inboxes",
    },
    custom: {
      title: "Custom",
      body: "No fixed limits. Tell us how much storage, how many domains and mailboxes you need, and we'll make you an offer.",
      button: "Ask for an offer",
    },
  },
  howToStart: {
    title: "How to get started",
    steps: [
      {
        title: "Tell us what you need",
        body: "Write to us through the contact form or by email. Pick a plan, or tell us your limits and we'll make you an offer.",
      },
      {
        title: "We create your account",
        body: "There's no online sign-up. We set up your account and send you the access details.",
      },
      {
        title: "Connect your domain",
        body: "The control panel shows the exact records to add where your domain is registered. The documentation walks you through it.",
      },
      {
        title: "Start writing",
        body: "Use webmail or your favorite email app. Moving a lot of old email? We'll help with that too.",
      },
    ],
  },
  docs: {
    title: "Want the details?",
    body: "Plans, webmail, domain records and email app setup are all explained in the documentation.",
    button: "Read the documentation",
  },
  cta: {
    title: "Ready for email on your own domain?",
    body: "Tell us which plan you want, or what you need. We'll set it up and hand it over ready to use.",
    button: "Ask for MailBox",
    href: "contact",
  },
};
