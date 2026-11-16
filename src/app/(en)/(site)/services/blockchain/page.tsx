import { pageMetadata } from "@/seo/metadata";
import { blockchainContent } from "@/content/pages/blockchain";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("blockchain", "en", blockchainContent.en.meta);

export default function BlockchainEnPage() {
  return <ServicePage routeKey="blockchain" locale="en" content={blockchainContent.en} />;
}
