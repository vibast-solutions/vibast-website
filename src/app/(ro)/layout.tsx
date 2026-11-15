import type { Metadata } from "next";
import { RootDocument, rootViewport } from "@/components/site/RootDocument";
import { baseMetadata } from "@/seo/metadata";
import "../globals.css";

// Root layout for every RO URL; the other language has its own, so <html lang> is static.
export const metadata: Metadata = baseMetadata;
export const viewport = rootViewport;

export default function RoRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="ro">{children}</RootDocument>;
}
