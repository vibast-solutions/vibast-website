import { pageMetadata } from "@/seo/metadata";
import { servicesContent } from "@/content/pages/services";
import { ServicesHubPage } from "@/components/pages/services/ServicesHubPage";

export const metadata = pageMetadata("services", "en", servicesContent.en.meta);

export default function ServicesEnPage() {
  return <ServicesHubPage locale="en" />;
}
