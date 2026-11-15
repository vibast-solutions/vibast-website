import { pageMetadata } from "@/seo/metadata";
import { mobileAppsContent } from "@/content/pages/mobile-apps";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("mobileApps", "en", mobileAppsContent.en.meta);

export default function MobileAppsEnPage() {
  return <ServicePage routeKey="mobileApps" locale="en" content={mobileAppsContent.en} />;
}
