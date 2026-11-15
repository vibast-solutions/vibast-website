import { pageMetadata } from "@/seo/metadata";
import { homeRo } from "@/content/pages/home";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata = pageMetadata("home", "ro", homeRo.meta);

export default function HomeRoPage() {
  return <HomePage locale="ro" />;
}
