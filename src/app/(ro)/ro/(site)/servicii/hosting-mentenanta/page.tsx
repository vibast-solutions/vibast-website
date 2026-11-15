import { pageMetadata } from "@/seo/metadata";
import { hostingMaintenanceContent } from "@/content/pages/hosting-maintenance";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("hostingMaintenance", "ro", hostingMaintenanceContent.ro.meta);

export default function HostingMaintenanceRoPage() {
  return <ServicePage routeKey="hostingMaintenance" locale="ro" content={hostingMaintenanceContent.ro} />;
}
