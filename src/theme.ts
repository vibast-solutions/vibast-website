import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { brand } from "@/brand";

const config = defineConfig({
  globalCss: {
    ":host, :root": {
      colorScheme: "light",
    },
    body: {
      background: brand.paper,
      color: "neutral.900",
      minHeight: "100vh",
      overflowX: "hidden",
      fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
    },
  },
  theme: {
    tokens: {
      colors: {
        // Ink scale (VIBAST Labs brand). 900 = Ink, 50 = Fog.
        brand: {
          50: { value: brand.fog },
          100: { value: "#D3E3E0" },
          200: { value: "#C5D6D3" },
          300: { value: brand.softOnDark },
          400: { value: brand.mutedOnDark },
          500: { value: brand.muted },
          600: { value: "#3F5B63" },
          700: { value: brand.inkLine },
          800: { value: brand.inkRaised },
          900: { value: brand.ink },
          950: { value: brand.inkDeep },
        },
        // Teal accent scale. 500 = Teal, 300 = Lagoon, 400/200 = on-dark bars.
        accent: {
          50: { value: "#EAF4F4" },
          100: { value: "#D0E7E6" },
          200: { value: brand.onDark.lagoon },
          300: { value: brand.lagoon },
          400: { value: brand.onDark.teal },
          500: { value: brand.teal },
          600: { value: brand.tealText },
          700: { value: "#20585D" },
          800: { value: "#18444A" },
          900: { value: "#113236" },
        },
        ink: { value: brand.ink },
        teal: { value: brand.teal },
        lagoon: { value: brand.lagoon },
        fog: { value: brand.fog },
        paper: { value: brand.paper },
        line: { value: brand.line },
        inkSoft: { value: brand.body },
        // Warm neutral grays
        neutral: {
          50: { value: brand.paper },
          100: { value: "#f3f4f6" },
          200: { value: "#e5e7eb" },
          300: { value: "#d1d5db" },
          400: { value: "#9ca3af" },
          500: { value: "#6b7280" },
          600: { value: "#4b5563" },
          700: { value: "#374151" },
          800: { value: "#1f2937" },
          900: { value: "#111827" },
        },
      },
      fonts: {
        heading: { value: "var(--font-manrope), system-ui, -apple-system, sans-serif" },
        body: { value: "var(--font-sans), system-ui, -apple-system, sans-serif" },
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "6px" },
        lg: { value: "8px" },
        xl: { value: "12px" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
