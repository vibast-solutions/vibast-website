import type { CSSProperties } from "react";
import { brand } from "@/brand";

// Inline copy of the official VIBAST Labs horizontal logo (light and on-dark).
// Rendered inline (not via <img>) so the wordmark picks up the page's Manrope
// web font; SVG presentation attributes can't resolve CSS variables, hence the
// font family is set through `style`.
const fontFamily: CSSProperties["fontFamily"] =
  "var(--font-manrope), Manrope, 'Helvetica Neue', Arial, sans-serif";

const variants = {
  light: {
    bars: [brand.lagoon, brand.teal, brand.ink],
    name: brand.ink,
    divider: "#C5D6D3",
    labs: brand.teal,
  },
  dark: {
    bars: [brand.onDark.lagoon, brand.onDark.teal, brand.onDark.paper],
    name: brand.onDark.paper,
    divider: "#3B5058",
    labs: brand.lagoon,
  },
} as const;

type VibastLabsLogoProps = {
  /** `light` for light backgrounds, `dark` for Ink/dark backgrounds. */
  variant?: keyof typeof variants;
  /** Rendered width; height follows the 386:64 aspect ratio. */
  width?: number | string;
  title?: string;
};

export function VibastLabsLogo({
  variant = "light",
  width = 160,
  title = "VIBAST Labs",
}: VibastLabsLogoProps) {
  const c = variants[variant];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 386 64"
      role="img"
      aria-label={title}
      width={width}
      style={{ display: "block", height: "auto" }}
    >
      <title>{title}</title>
      <rect x="10" y="12" width="44" height="10" rx="5" fill={c.bars[0]} />
      <rect x="17" y="27" width="30" height="10" rx="5" fill={c.bars[1]} />
      <rect x="24" y="42" width="16" height="10" rx="5" fill={c.bars[2]} />
      <text
        x="82"
        y="45.5"
        style={{ fontFamily }}
        fontSize="38"
        fontWeight="700"
        fill={c.name}
        textLength="168"
        lengthAdjust="spacing"
      >
        VIBAST
      </text>
      <rect x="263" y="18" width="1.5" height="28" fill={c.divider} />
      <text
        x="278"
        y="45.5"
        style={{ fontFamily }}
        fontSize="38"
        fontWeight="500"
        fill={c.labs}
        textLength="106"
        lengthAdjust="spacing"
      >
        LABS
      </text>
    </svg>
  );
}
