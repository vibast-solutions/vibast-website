import type { RouteKey } from "@/i18n/routes";
import type { ShellContent } from "@/content/types";

/**
 * The MailBox product page. Plan names, prices and limits are NOT here: they
 * come from `TIERS` in `@/content/docs/shared`, the same table the docs show,
 * so the two can never disagree. This file only holds the labels around them.
 */
export interface MailboxContent extends ShellContent {
  heroLinks: { label: string; route: RouteKey }[];
  forWho: { title: string; items: string[] };
  whatYouGet: { title: string; items: { title: string; body: string }[] };
  plans: {
    title: string;
    intro: string;
    perYear: string;
    featured: string;
    unlimited: string;
    rows: { storage: string; domains: string; mailboxes: string; forwarders: string; pointers: string };
    custom: { title: string; body: string; button: string };
  };
  howToStart: { title: string; steps: { title: string; body: string }[] };
  docs: { title: string; body: string; button: string };
}
