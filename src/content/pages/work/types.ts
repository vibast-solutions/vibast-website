import type { RouteKey } from "@/i18n/routes";
import type { ShellContent } from "@/content/types";

/** A link from a work entry: another page of this site, or an external URL. */
export type WorkLink = { label: string; route: RouteKey } | { label: string; url: string };

/**
 * One project or product. Only `name` and `summary` are required, so a short
 * product card and a full case study (problem → what we did → result) use the
 * same shape. `client` is optional because not every client can be named.
 */
export interface WorkEntry {
  name: string;
  client?: string;
  /** One or two plain sentences: what it is, for whom. */
  summary: string;
  problem?: string;
  whatWeDid?: string;
  result?: string;
  link?: WorkLink;
}

/** A group of entries ("Client projects", "Things we build and run ourselves"). Empty groups aren't rendered. */
export interface WorkSection {
  title: string;
  intro?: string;
  entries: WorkEntry[];
}

export interface WorkContent extends ShellContent {
  sections: WorkSection[];
  /** Labels for the optional case-study fields. */
  labels: { client: string; problem: string; whatWeDid: string; result: string };
}
