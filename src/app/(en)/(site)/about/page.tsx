import { pageMetadata } from "@/seo/metadata";
import { aboutContent } from "@/content/pages/about";
import { AboutPage } from "@/components/pages/about/AboutPage";

export const metadata = pageMetadata("about", "en", aboutContent.en.meta);

export default function AboutEnPage() {
  return <AboutPage locale="en" />;
}
