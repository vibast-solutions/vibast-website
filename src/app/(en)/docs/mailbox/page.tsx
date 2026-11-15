import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocPage } from "@/content/docs";
import { DocsShell } from "@/components/docs/DocsShell";
import { pageMetadata } from "@/seo/metadata";

const LOCALE = "en" as const;
const SLUG = "mailbox";
const page = getDocPage(LOCALE, SLUG);

// Docs titles carry their own brand suffix, so they skip the title template.
export const metadata: Metadata = page
  ? pageMetadata("docsMailbox", LOCALE, page.meta, { absoluteTitle: true })
  : {};

export default function MailboxDocsEnPage() {
  if (!page) notFound();
  return <DocsShell locale={LOCALE} page={page} />;
}
