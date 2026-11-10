# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (flat config with next/core-web-vitals and next/typescript)
```

## Architecture

This is a Next.js 16 single-page marketing website using the App Router with Chakra UI v3 for styling.

### Key Structure

- `src/app/layout.tsx` - Root layout wrapping children with `<Providers>`
- `src/app/providers.tsx` - Client component that sets up Chakra UI with `CacheProvider` and `ChakraProvider`
- `src/app/page.tsx` - Single-page landing with all content (client component)
- `src/theme.ts` - Chakra UI system configuration with custom `brand` color palette (blue tones)

### Styling Approach

- Chakra UI v3 with `createSystem` API (not the older theme object pattern)
- VIBAST Labs palette: raw hex values live in `src/brand.ts` (Ink, Teal, Lagoon, Fog, Paper + on-dark tones); `src/theme.ts` builds the `brand` (Ink scale, `brand.900` = Ink) and `accent` (Teal scale, `accent.500` = Teal) tokens from it. Use tokens in Chakra props and import `brand` only where tokens can't resolve (lucide `color`, inline `style`, OG image, email HTML). Teal text needs `accent.600` on non-white light surfaces and `accent.400` on Ink.
- Logo: `src/components/brand/VibastLabsLogo.tsx` (inline SVG, `variant="light" | "dark"`), copied from the private brand repo `vibast-solutions/vibast-brand`. Favicons/app icons are app-router file conventions (`src/app/favicon.ico`, `icon.svg`, `apple-icon.png`, `manifest.ts`).
- Fonts: Inter for body (`--font-sans`, imported in `src/app/globals.css`), Manrope for headings and the logo wordmark (`--font-manrope`, via `next/font/google` in `src/app/layout.tsx`)
- Uses `@/*` path alias mapped to `./src/*`

### Component Patterns

- All page content uses Chakra UI components (`Box`, `Container`, `Stack`, `CardRoot`, etc.)
- Chakra UI v3 uses `colorPalette` prop instead of `colorScheme`
- Card components use `CardRoot`/`CardHeader`/`CardBody` (not `Card`)
