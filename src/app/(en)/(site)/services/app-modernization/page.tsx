import { pageMetadata } from "@/seo/metadata";
import { appModernizationContent } from "@/content/pages/app-modernization";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("appModernization", "en", appModernizationContent.en.meta);

export default function AppModernizationEnPage() {
  return <ServicePage routeKey="appModernization" locale="en" content={appModernizationContent.en} />;
}
