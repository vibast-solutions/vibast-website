import { ImageResponse } from "next/og";
import { brand } from "@/brand";
import { homeContent } from "@/content/pages/home";
import type { Locale } from "@/i18n/locales";
import { SOCIAL_IMAGE_SIZE } from "@/seo/socialImageMeta";

export function renderSocialImage(locale: Locale): ImageResponse {
  const { h1, layers } = homeContent[locale].hero;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.ink,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* VIBAST Labs mark, on-dark colours */}
        <svg width="140" height="140" viewBox="0 0 64 64" fill="none" style={{ marginBottom: 32 }}>
          <rect x="10" y="12" width="44" height="10" rx="5" fill={brand.onDark.lagoon} />
          <rect x="17" y="27" width="30" height="10" rx="5" fill={brand.onDark.teal} />
          <rect x="24" y="42" width="16" height="10" rx="5" fill={brand.onDark.paper} />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: brand.onDark.paper,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          VIBAST Labs
        </div>

        {/* Tagline: the home page H1 of this language */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: brand.softOnDark,
            textAlign: "center",
            maxWidth: 860,
            lineHeight: 1.4,
          }}
        >
          {h1}
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {layers.map((layer) => (
            <div
              key={layer}
              style={{
                display: "flex",
                padding: "12px 24px",
                backgroundColor: "rgba(79, 163, 168, 0.15)",
                border: `1px solid ${brand.onDark.teal}`,
                borderRadius: 8,
                color: brand.onDark.teal,
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {layer}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: brand.mutedOnDark,
          }}
        >
          {locale === "ro" ? "vibast.ro/ro" : "vibast.ro"}
        </div>
      </div>
    ),
    { ...SOCIAL_IMAGE_SIZE },
  );
}
