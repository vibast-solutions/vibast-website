import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "VIBAST Labs | Custom Blockchain & Web Development Services",
  description:
    "Build custom blockchains with any architecture—Cosmos SDK, UTXO-based, or account-based. Full-stack web development and reliable backend infrastructure. Get in touch today.",
  keywords: [
    "custom blockchain development",
    "blockchain development company",
    "Cosmos SDK development",
    "UTXO blockchain",
    "appchain development",
    "blockchain consulting",
    "smart contract development",
    "Web3 development",
    "blockchain infrastructure",
    "custom blockchain solutions",
    "Cosmos ecosystem",
    "IBC integration",
    "web development services",
    "React development",
    "Next.js development",
    "backend development",
    "API development",
    "data migration services",
    "software engineering",
    "software consulting",
    "blockchain architecture",
  ],
  authors: [{ name: "VIBAST Labs" }],
  creator: "VIBAST Labs",
  publisher: "VIBAST Labs",
  applicationName: "VIBAST Labs",
  category: "Technology",
  metadataBase: new URL("https://vibast.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibast.ro",
    siteName: "VIBAST Labs",
    title: "Custom Blockchain Development | Any Architecture | VIBAST Labs",
    description:
      "Build custom blockchains with any architecture. Cosmos SDK, UTXO-based, account-based—we design and build the chain that fits your use case.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "VIBAST Labs - Custom Blockchain & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Blockchain Development | Any Architecture | VIBAST Labs",
    description:
      "Build custom blockchains with any architecture. Full-stack web development and reliable backend infrastructure.",
    images: ["/opengraph-image.png"],
    creator: "@vibastlabs",
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
  "@type": "ProfessionalService",
  "@id": "https://vibast.ro/#organization",
  name: "VIBAST Labs",
  legalName: "VIBAST SOLUTIONS SRL",
  url: "https://vibast.ro",
  logo: {
    "@type": "ImageObject",
    url: "https://vibast.ro/vibast-labs-logo.svg",
    width: "512",
    height: "512",
  },
  image: "https://vibast.ro/opengraph-image.png",
  description:
    "Custom blockchain development with any architecture—Cosmos SDK, UTXO-based, or account-based. Full-stack web development and reliable backend infrastructure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B. P. Hasdeu 23",
    addressLocality: "Campina",
    addressRegion: "Prahova",
    postalCode: "105600",
    addressCountry: "RO",
  },
  email: "stefan@vibast.ro",
  vatID: "RO51459106",
  priceRange: "$$",
  sameAs: [],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.0,
      longitude: 25.0,
    },
    geoRadius: "10000 km",
  },
  knowsAbout: [
    "Custom Blockchain Development",
    "Cosmos SDK",
    "UTXO Blockchain",
    "Account-based Blockchain",
    "Appchain Development",
    "Smart Contract Development",
    "IBC Integration",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "Backend Development",
    "API Development",
    "Data Migration",
    "Cloud Infrastructure",
    "Software Engineering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Blockchain & Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Blockchain Development",
          description:
            "Purpose-built blockchains with any architecture. UTXO or account-based, custom consensus, Cosmos SDK, and more.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description:
            "Full-stack web development with React, Next.js, and Node.js. Modern, scalable applications built for performance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Infrastructure",
          description:
            "High-availability backends, data migrations, and production-grade infrastructure built with security in mind.",
        },
      },
    ],
  },
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
