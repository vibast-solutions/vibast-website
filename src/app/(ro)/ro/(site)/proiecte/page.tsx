import { pageMetadata } from "@/seo/metadata";
import { workContent } from "@/content/pages/work";
import { WorkPage } from "@/components/pages/work/WorkPage";

export const metadata = pageMetadata("work", "ro", workContent.ro.meta);

export default function WorkRoPage() {
  return <WorkPage locale="ro" />;
}
