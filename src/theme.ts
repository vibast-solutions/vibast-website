import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    ":host, :root": {
      colorScheme: "light",
    },
    body: {
      background: "#fafbfc",
      color: "neutral.900",
      minHeight: "100vh",
      overflowX: "hidden",
      fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
    },
  },
  theme: {
    tokens: {
      colors: {
        // Deep Navy primary brand palette
        brand: {
          50: { value: "#f0f4f8" },
          100: { value: "#d9e2ec" },
          200: { value: "#bcccdc" },
          300: { value: "#9fb3c8" },
          400: { value: "#829ab1" },
          500: { value: "#627d98" },
          600: { value: "#486581" },
          700: { value: "#334e68" },
          800: { value: "#243b53" },
          900: { value: "#102a43" },
        },
        // Warm gold accent
        accent: {
          50: { value: "#fef9e7" },
          100: { value: "#fcefc7" },
          200: { value: "#f9e4a1" },
          300: { value: "#f5d67a" },
          400: { value: "#e8c547" },
          500: { value: "#c9a227" },
          600: { value: "#a68219" },
          700: { value: "#846515" },
          800: { value: "#614a11" },
          900: { value: "#3f300b" },
        },
        // Warm neutral grays
        neutral: {
          50: { value: "#fafbfc" },
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
        heading: { value: "var(--font-sans), system-ui, -apple-system, sans-serif" },
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
