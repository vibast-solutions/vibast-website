import { pageMetadata } from "@/seo/metadata";
import { customSoftwareContent } from "@/content/pages/custom-software";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("customSoftware", "ro", customSoftwareContent.ro.meta);

export default function CustomSoftwareRoPage() {
  return <ServicePage routeKey="customSoftware" locale="ro" content={customSoftwareContent.ro} />;
}
