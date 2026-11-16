import type { Metadata } from "next";
import { RootDocument, rootViewport } from "@/components/site/RootDocument";
import { baseMetadata } from "@/seo/metadata";
import "../globals.css";

// Root layout for every EN URL; the other language has its own, so <html lang> is static.
export const metadata: Metadata = baseMetadata;
export const viewport = rootViewport;

export default function EnRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
