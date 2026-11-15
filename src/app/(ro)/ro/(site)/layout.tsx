import { SiteChrome } from "@/components/site/SiteChrome";

export default function SiteRoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome locale="ro">{children}</SiteChrome>;
}
