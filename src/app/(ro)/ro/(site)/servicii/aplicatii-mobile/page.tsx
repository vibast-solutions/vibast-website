import { pageMetadata } from "@/seo/metadata";
import { mobileAppsContent } from "@/content/pages/mobile-apps";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("mobileApps", "ro", mobileAppsContent.ro.meta);

export default function MobileAppsRoPage() {
  return <ServicePage routeKey="mobileApps" locale="ro" content={mobileAppsContent.ro} />;
}
