import { pageMetadata } from "@/seo/metadata";
import { appModernizationContent } from "@/content/pages/app-modernization";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("appModernization", "ro", appModernizationContent.ro.meta);

export default function AppModernizationRoPage() {
  return <ServicePage routeKey="appModernization" locale="ro" content={appModernizationContent.ro} />;
}
