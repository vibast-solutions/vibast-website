import type { ShellContent } from "@/content/types";
import type { RouteKey, SERVICE_KEYS } from "@/i18n/routes";

export type ServiceKey = (typeof SERVICE_KEYS)[number];

/** One "where are you starting from?" path: a situation and where it leads. */
export interface StartingPoint {
  title: string;
  body: string;
  /** Link label. */
  link: string;
  /** A page, or `null` to jump to the service cards on the hub itself. */
  href: RouteKey | null;
}

/** The services hub (`/services`, `/ro/servicii`). */
export interface ServicesHubContent extends ShellContent {
  startingPoints: { title: string; lead: string; items: StartingPoint[] };
  /** The six service cards, in `SERVICE_KEYS` order; titles come from here, not the nav labels. */
  services: {
    title: string;
    lead: string;
    linkLabel: string;
    items: Record<ServiceKey, { title: string; body: string }>;
  };
  approach: { title: string; items: string[] };
}
