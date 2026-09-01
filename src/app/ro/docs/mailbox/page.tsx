import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocPage, docPageHref } from "@/content/docs";
import { DocsShell } from "@/components/docs/DocsShell";

const LOCALE = "ro" as const;
const SLUG = "mailbox";
const page = getDocPage(LOCALE, SLUG);

export const metadata: Metadata = {
  title: page?.meta.title,
  description: page?.meta.description,
  alternates: {
    canonical: docPageHref("ro", SLUG),
    languages: {
      en: docPageHref("en", SLUG),
      ro: docPageHref("ro", SLUG),
    },
  },
};

export default function MailboxDocsRoPage() {
  if (!page) notFound();
  return <DocsShell locale={LOCALE} page={page} />;
}
