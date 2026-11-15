import { pageMetadata } from "@/seo/metadata";
import { aboutContent } from "@/content/pages/about";
import { AboutPage } from "@/components/pages/about/AboutPage";

export const metadata = pageMetadata("about", "ro", aboutContent.ro.meta);

export default function AboutRoPage() {
  return <AboutPage locale="ro" />;
}
