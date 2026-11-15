import { pageMetadata } from "@/seo/metadata";
import { mailboxContent } from "@/content/pages/mailbox";
import { MailboxPage } from "@/components/pages/mailbox/MailboxPage";

export const metadata = pageMetadata("mailbox", "ro", mailboxContent.ro.meta);

export default function MailboxRoPage() {
  return <MailboxPage locale="ro" />;
}
