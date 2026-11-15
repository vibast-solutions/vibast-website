import { pageMetadata } from "@/seo/metadata";
import { webDevelopmentContent } from "@/content/pages/web-development";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("webDevelopment", "ro", webDevelopmentContent.ro.meta);

export default function WebDevelopmentRoPage() {
  return <ServicePage routeKey="webDevelopment" locale="ro" content={webDevelopmentContent.ro} />;
}
