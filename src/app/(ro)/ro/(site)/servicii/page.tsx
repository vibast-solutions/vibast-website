import { pageMetadata } from "@/seo/metadata";
import { servicesContent } from "@/content/pages/services";
import { ServicesHubPage } from "@/components/pages/services/ServicesHubPage";

export const metadata = pageMetadata("services", "ro", servicesContent.ro.meta);

export default function ServicesRoPage() {
  return <ServicesHubPage locale="ro" />;
}
