import { pageMetadata } from "@/seo/metadata";
import { homeEn } from "@/content/pages/home";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata = pageMetadata("home", "en", homeEn.meta);

export default function HomeEnPage() {
  return <HomePage locale="en" />;
}
