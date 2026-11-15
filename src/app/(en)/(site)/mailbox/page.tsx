import { pageMetadata } from "@/seo/metadata";
import { mailboxContent } from "@/content/pages/mailbox";
import { MailboxPage } from "@/components/pages/mailbox/MailboxPage";

export const metadata = pageMetadata("mailbox", "en", mailboxContent.en.meta);

export default function MailboxEnPage() {
  return <MailboxPage locale="en" />;
}
