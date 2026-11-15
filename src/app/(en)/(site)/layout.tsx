import { SiteChrome } from "@/components/site/SiteChrome";

export default function SiteEnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome locale="en">{children}</SiteChrome>;
}
