import { pageMetadata } from "@/seo/metadata";
import { workContent } from "@/content/pages/work";
import { WorkPage } from "@/components/pages/work/WorkPage";

export const metadata = pageMetadata("work", "en", workContent.en.meta);

export default function WorkEnPage() {
  return <WorkPage locale="en" />;
}
