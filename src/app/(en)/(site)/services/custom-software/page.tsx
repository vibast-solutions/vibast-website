import { pageMetadata } from "@/seo/metadata";
import { customSoftwareContent } from "@/content/pages/custom-software";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("customSoftware", "en", customSoftwareContent.en.meta);

export default function CustomSoftwareEnPage() {
  return <ServicePage routeKey="customSoftware" locale="en" content={customSoftwareContent.en} />;
}
