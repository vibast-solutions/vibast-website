import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "VIBAST Labs | Custom Blockchain Development & Software Engineering",
  description:
    "VIBAST Labs builds custom blockchains, Cosmos SDK appchains, and reliable backend infrastructure. Blockchain specialists with full-stack engineering capability.",
  keywords: [
    "custom blockchain development",
    "Cosmos SDK development",
    "appchain development",
    "blockchain consulting",
    "smart contract development",
    "Web3 development",
    "blockchain infrastructure",
    "custom blockchain solutions",
    "Cosmos ecosystem",
    "IBC integration",
    "backend development",
    "data migration services",
    "API development",
    "software engineering",
    "software consulting",
  ],
  authors: [{ name: "VIBAST Labs" }],
  creator: "VIBAST Labs",
  publisher: "VIBAST Labs",
  metadataBase: new URL("https://vibast.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibast.ro",
    siteName: "VIBAST Labs",
    title: "VIBAST Labs | Custom Blockchain Development & Software Engineering",
    description:
      "Custom blockchains, Cosmos SDK appchains, and reliable backend systems. Blockchain specialists with full-stack engineering capability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VIBAST Labs - Blockchain & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBAST Labs | Custom Blockchain Development & Software Engineering",
    description:
      "Custom blockchains, Cosmos SDK appchains, and reliable backend systems. Blockchain specialists with full-stack capability.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VIBAST Labs",
  legalName: "VIBAST SOLUTIONS SRL",
  url: "https://vibast.ro",
  logo: "https://vibast.ro/vibast-labs-logo.svg",
  description:
    "Custom blockchain development, Cosmos SDK appchains, and reliable backend infrastructure. Blockchain specialists with full-stack engineering capability.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B. P. Hasdeu 23",
    addressLocality: "Campina",
    addressRegion: "Prahova",
    addressCountry: "RO",
  },
  email: "stefan@vibast.ro",
  vatID: "RO51459106",
  sameAs: [],
  knowsAbout: [
    "Blockchain Development",
    "Cosmos SDK",
    "Custom Blockchain",
    "Appchain Development",
    "Smart Contract Development",
    "Backend Development",
    "API Development",
    "Data Migration",
    "Cloud Infrastructure",
    "Software Engineering",
  ],
  serviceType: [
    "Custom Blockchain Development",
    "Cosmos SDK Development",
    "Smart Contract Development",
    "Backend Development",
    "Data Migration",
    "Software Consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
