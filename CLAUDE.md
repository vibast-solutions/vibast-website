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
- Custom brand colors defined in `src/theme.ts` (50-900 scale, primary is `brand.500: #3f6ff0`)
- Global CSS in `src/app/globals.css` imports Space Grotesk font and sets `--font-sans` CSS variable
- Uses `@/*` path alias mapped to `./src/*`

### Component Patterns

- All page content uses Chakra UI components (`Box`, `Container`, `Stack`, `CardRoot`, etc.)
- Chakra UI v3 uses `colorPalette` prop instead of `colorScheme`
- Card components use `CardRoot`/`CardHeader`/`CardBody` (not `Card`)
