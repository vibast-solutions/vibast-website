import { pageMetadata } from "@/seo/metadata";
import { blockchainContent } from "@/content/pages/blockchain";
import { ServicePage } from "@/components/pages/services/ServicePage";

export const metadata = pageMetadata("blockchain", "ro", blockchainContent.ro.meta);

export default function BlockchainRoPage() {
  return <ServicePage routeKey="blockchain" locale="ro" content={blockchainContent.ro} />;
}
