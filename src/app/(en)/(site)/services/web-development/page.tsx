import { pageMetadata } from "@/seo/metadata";
import { webDevelopmentContent } from "@/content/pages/web-development";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("webDevelopment", "en", webDevelopmentContent.en.meta);

export default function WebDevelopmentEnPage() {
  return <ServicePage routeKey="webDevelopment" locale="en" content={webDevelopmentContent.en} />;
}
