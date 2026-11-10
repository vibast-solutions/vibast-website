/**
 * VIBAST Labs brand palette (logo direction "B2 Layers · Compact").
 *
 * Single source of the raw hex values. The Chakra theme builds its tokens from
 * these; places where theme tokens can't resolve (lucide icon `color` props,
 * inline `style`, the OG image, email HTML) import them directly.
 */
export const brand = {
  // Core palette
  ink: "#14232B",
  teal: "#2F7F86",
  lagoon: "#7DB8B5",
  fog: "#E4EEEC",
  paper: "#F6F8F7",
  // Logo bars on dark backgrounds (top → bottom)
  onDark: {
    lagoon: "#A8D3CF",
    teal: "#4FA3A8",
    paper: "#F2F6F5",
  },
  // Derived tones (Ink hue), contrast-checked against their backgrounds
  inkDeep: "#0E191F", // footer / contact panel, darker than Ink
  inkRaised: "#1F333C", // cards and chips on Ink
  inkLine: "#2C444E", // borders and dividers on Ink
  mutedOnDark: "#8AA1A4", // secondary text on Ink (≥4.8:1 on Ink, Ink-raised and #1f2937)
  softOnDark: "#A9BDBE", // body text on Ink (≥6.7:1)
  muted: "#56696F", // secondary text on light surfaces (≥4.8:1 on Fog, Paper, white)
  tealText: "#276C72", // teal text on light surfaces other than white (≥5.5:1 on Paper)
} as const;
