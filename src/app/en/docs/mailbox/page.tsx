import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocPage, docPageHref } from "@/content/docs";
import { DocsShell } from "@/components/docs/DocsShell";

const LOCALE = "en" as const;
const SLUG = "mailbox";
const page = getDocPage(LOCALE, SLUG);

export const metadata: Metadata = {
  title: page?.meta.title,
  description: page?.meta.description,
  alternates: {
    canonical: docPageHref("en", SLUG),
    languages: {
      ro: docPageHref("ro", SLUG),
      en: docPageHref("en", SLUG),
    },
  },
};

export default function MailboxDocsEnPage() {
  if (!page) notFound();
  return <DocsShell locale={LOCALE} page={page} />;
}
