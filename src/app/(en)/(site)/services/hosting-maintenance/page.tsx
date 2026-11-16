import { pageMetadata } from "@/seo/metadata";
import { hostingMaintenanceContent } from "@/content/pages/hosting-maintenance";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("hostingMaintenance", "en", hostingMaintenanceContent.en.meta);

export default function HostingMaintenanceEnPage() {
  return <ServicePage routeKey="hostingMaintenance" locale="en" content={hostingMaintenanceContent.en} />;
}
