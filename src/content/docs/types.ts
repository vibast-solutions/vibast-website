// Shared types for the docs section.
// The docs content is data-driven: each documented tool is a single page whose
// sections render from a typed block list. Keeping both language variants behind
// the same `DocPage` shape keeps them structurally parallel (content parity).

export type Locale = "ro" | "en";

export const LOCALES: Locale[] = ["ro", "en"];

export const DEFAULT_LOCALE: Locale = "ro";

/**
 * A content block. Sections are built from ordered lists of these. The `tiers`
 * "injector" block renders the shared, locale-independent packages table
 * defined in the tool's content module. Account-specific values (DNS records,
 * mail-client settings) are intentionally NOT documented here — the MailBox
 * panel shows each customer the exact values for their account.
 */
export type Block =
  | { k: "p"; text: string }
  | { k: "h"; text: string }
  | { k: "ul"; items: string[] }
  | { k: "steps"; items: string[] }
  | { k: "note"; tone?: "info" | "warn" | "accent"; title?: string; text: string }
  | { k: "define"; term: string; text: string; example?: string }
  | { k: "tiers" };

export interface DocSection {
  /** Stable anchor id — shared across locales so the sidebar/scrollspy match. */
  id: string;
  title: string;
  blocks: Block[];
}

export interface DocPageMeta {
  title: string;
  description: string;
}

export interface DocPage {
  /** Tool slug, e.g. "mailbox". Same across locales. */
  slug: string;
  /** Sidebar label for the tool entry. */
  navLabel: string;
  meta: DocPageMeta;
  /** Short intro shown under the page title. */
  intro: string;
  sections: DocSection[];
}

/** UI strings for the docs chrome (sidebar, switch, etc.). */
export interface DocsUi {
  docsTitle: string;
  onThisPage: string;
  languageLabel: string;
  backToSite: string;
  openMenu: string;
  closeMenu: string;
  toolsHeading: string;
}
