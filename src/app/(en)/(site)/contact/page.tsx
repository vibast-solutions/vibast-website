import { pageMetadata } from "@/seo/metadata";
import { contactContent } from "@/content/pages/contact";
import { ContactPage } from "@/components/pages/contact/ContactPage";

export const metadata = pageMetadata("contact", "en", contactContent.en.meta);

export default function ContactEnPage() {
  return <ContactPage locale="en" />;
}
