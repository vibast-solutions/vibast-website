import { pageMetadata } from "@/seo/metadata";
import { homeContent } from "@/content/pages/home";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata = pageMetadata("home", "ro", homeContent.ro.meta);

export default function HomeRoPage() {
  return <HomePage locale="ro" />;
}
