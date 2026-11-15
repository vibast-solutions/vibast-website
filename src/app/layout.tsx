import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { brand } from "@/brand";
import "./globals.css";
import { Providers } from "./providers";

// Brand font for the logo wordmark and headings; body text stays Inter.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: brand.ink,
};

export const metadata: Metadata = {
  title: "VIBAST Labs | Custom Software, Web & Mobile Development",
  description:
    "VIBAST Labs builds custom web and mobile applications, backends and cloud infrastructure, with in-house blockchain expertise when your product needs it. Get in touch today.",
  keywords: [
    "software development company",
    "custom software development",
    "web application development",
    "mobile app development",
    "Flutter app development",
    "React development",
    "Next.js development",
    "Node.js development",
    "Go development",
    "backend development",
    "API development",
    "cloud infrastructure",
    "DevOps services",
    "system integration",
    "data migration services",
    "software maintenance and support",
    "software consulting",
    "software engineering",
    "blockchain development",
    "smart contract development",
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
    title: "Custom Software Development | Web, Mobile & Cloud | VIBAST Labs",
    description:
      "VIBAST Labs builds custom web and mobile applications, backends and cloud infrastructure, with in-house blockchain expertise when your product needs it.",
    // og:image comes from the generated src/app/opengraph-image.tsx route.
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Web, Mobile & Cloud | VIBAST Labs",
    description:
      "Custom web and mobile applications, backends and cloud infrastructure. Blockchain expertise when your product needs it.",
    // twitter:image comes from the generated src/app/twitter-image.tsx route.
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
    url: "https://vibast.ro/vibast-labs-mark-512.png",
    width: "512",
    height: "512",
  },
  image: "https://vibast.ro/opengraph-image",
  description:
    "VIBAST Labs builds custom web and mobile applications, backends and cloud infrastructure, with in-house blockchain expertise when your product needs it.",
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
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Flutter",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "Go Development",
    "Backend Development",
    "API Development",
    "Cloud Infrastructure",
    "DevOps",
    "System Integration",
    "Data Migration",
    "Software Maintenance",
    "Blockchain Development",
    "Smart Contract Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description:
            "Custom web platforms, customer portals, dashboards and SaaS products built with React, Next.js and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Cross-platform iOS and Android apps from a single Flutter codebase, from design to app store publishing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend, API & Cloud Development",
          description:
            "Robust APIs and services in Go and Node.js, automated deployments, monitoring and production-grade cloud infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "System Integration & Data Migration",
          description:
            "Integrations with payment providers, ERPs, e-commerce platforms and third-party APIs, and migrations of legacy systems and data.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Blockchain Development",
          description:
            "Custom blockchains, smart contracts, wallets and dApps for products that need them.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Maintenance & Support",
          description:
            "Upgrades, code and security reviews, monitoring and incident response after launch.",
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
    <html lang="en" className={manrope.variable}>
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
