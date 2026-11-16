import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/brand";
import { manrope } from "./fonts";
import "./globals.css";

// Served for any URL that matches no route. The site has two root layouts
// (one per language), so this page brings its own <html>. It is bilingual
// because a 404 can come from either half of the site.
export const metadata: Metadata = {
  title: "Page not found | VIBAST Labs",
  description: "The page you are looking for does not exist.",
  metadataBase: new URL("https://vibast.ro"),
};

const linkStyle = { color: brand.teal, fontWeight: 600 } as const;

export default function GlobalNotFound() {
  return (
    <html lang="en" className={manrope.variable}>
      <body style={{ background: brand.paper, color: brand.ink, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "48px 20px" }}>
          <p style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: brand.teal, fontWeight: 600 }}>
            404
          </p>
          <h1 style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 40, lineHeight: 1.1, margin: "12px 0 16px" }}>
            Page not found
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6 }}>
            This page doesn&apos;t exist or has moved. <Link href="/" style={linkStyle}>Go to the home page</Link>.
          </p>
          <p lang="ro" style={{ fontSize: 18, lineHeight: 1.6, marginTop: 12 }}>
            Pagina nu există sau a fost mutată. <Link href="/ro" style={linkStyle}>Mergi la pagina principală</Link>.
          </p>
        </main>
      </body>
    </html>
  );
}
