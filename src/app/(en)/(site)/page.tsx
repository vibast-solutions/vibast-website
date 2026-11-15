import { pageMetadata } from "@/seo/metadata";
import { homeContent } from "@/content/pages/home";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata = pageMetadata("home", "en", homeContent.en.meta);

export default function HomeEnPage() {
  return <HomePage locale="en" />;
}
