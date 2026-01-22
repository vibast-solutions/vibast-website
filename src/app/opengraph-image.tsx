import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "VIBAST Labs - Custom Blockchain & Web Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#102a43",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* V Logo */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 40 }}
        >
          <path
            d="M4 6L16 26L28 6"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="26" r="3" fill="#c9a227" />
        </svg>

        {/* Company Name */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          VIBAST Labs
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9fb3c8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Custom Blockchain & Web Development
        </div>

        {/* Services Pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
          }}
        >
          {["Blockchain", "Web Apps", "Infrastructure"].map((service) => (
            <div
              key={service}
              style={{
                display: "flex",
                padding: "12px 24px",
                backgroundColor: "rgba(201, 162, 39, 0.15)",
                border: "1px solid #c9a227",
                borderRadius: 8,
                color: "#c9a227",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Website URL */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#627d98",
          }}
        >
          vibast.ro
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
