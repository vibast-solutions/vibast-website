import { pageMetadata } from "@/seo/metadata";
import { contactContent } from "@/content/pages/contact";
import { ContactPage } from "@/components/pages/contact/ContactPage";

export const metadata = pageMetadata("contact", "ro", contactContent.ro.meta);

export default function ContactRoPage() {
  return <ContactPage locale="ro" />;
}
