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

This is a Next.js 16 multi-page marketing website in English and Romanian, using the App Router with Chakra UI v3 for styling.

### i18n and routing

- English is unprefixed, Romanian lives under `/ro` with localized slugs (no diacritics in slugs). No middleware, no auto-redirect.
- **Two root layouts**, one per language, so `<html lang>` is static: `src/app/(en)/layout.tsx` and `src/app/(ro)/layout.tsx` (RO routes live under `src/app/(ro)/ro/...`). Both render `src/components/site/RootDocument.tsx`. There is no `src/app/layout.tsx`; unmatched URLs hit `src/app/global-not-found.tsx` (`experimental.globalNotFound`). Switching language is a full page load.
- Marketing pages sit in a `(site)` group whose layout adds the header/footer (`SiteChrome`); docs pages (`docs/mailbox`) use their own `DocsShell`. `/docs` and `/ro/docs` redirect in `next.config.ts`.
- `src/i18n/routes.ts` is the single route table (page key → EN/RO path). The metadata helper, `src/app/sitemap.ts`, the nav, the language switcher and the breadcrumbs all read it. Adding a page: add it to `ROUTES`, add its label to both `src/content/site/*.ts`, then create the EN and RO `page.tsx`.
- Every `page.tsx` exports `pageMetadata(key, locale, content.meta)` from `src/seo/metadata.ts`: title (template `%s | VIBAST Labs`), description, self canonical, hreflang `{en, ro, x-default→en}`, Open Graph/Twitter incl. the social images. Never set `alternates` by hand.
- JSON-LD helpers live in `src/seo/jsonld.ts` (Organization + WebSite on home, BreadcrumbList via `Breadcrumbs` in `PageShell`), rendered with `src/components/seo/JsonLd.tsx`.

### Content

- All UI strings live in typed content files per language: `src/content/site/{en,ro}.ts` (chrome: nav labels, footer, switcher), `src/content/pages/<page>/{en,ro}.ts` (one dir per page, `index.ts` maps locale → content), shared shapes in `src/content/types.ts`, language-independent company facts (email, phone, IDs) in `src/content/company.ts`. `CONTACT_PHONE` renders only when non-empty.
- Page components: `src/components/pages/<page>/`. `PageShell` (breadcrumbs, H1, intro, CTA band) and the service template `services/ServicePage.tsx` (renders only the plan §6 sections present in the content) are shared.
- The EN home (`src/components/pages/home/HomePage.tsx`, copy in `src/content/pages/home/en.ts`) still has in-page section ids; keep `cta`, old links to `/#cta` land on its contact form.
- Voice: plain language, outcome first, no technology names in heroes/cards/headings. Romanian is written natively with diacritics.
- `src/components/site/` - shared chrome: `SiteHeader` (sticky, real page links, language switcher, phone/tablet menu sheet below `lg`), `SiteFooter`, `LanguageSwitch`, `ContactForm` (strings from the contact content; posts to `/api/contact` with Turnstile + honeypot), `primitives` (`PageContainer`, `Eyebrow`, `CheckItem`)
- `src/theme.ts` - Chakra UI system configuration with custom `brand` color palette

### Styling Approach

- Chakra UI v3 with `createSystem` API (not the older theme object pattern)
- VIBAST Labs palette: raw hex values live in `src/brand.ts` (Ink, Teal, Lagoon, Fog, Paper + on-dark tones); `src/theme.ts` builds the `brand` (Ink scale, `brand.900` = Ink) and `accent` (Teal scale, `accent.500` = Teal) tokens from it. Use tokens in Chakra props and import `brand` only where tokens can't resolve (lucide `color`, inline `style`, OG image, email HTML). Teal text needs `accent.600` on non-white light surfaces and `accent.400` on Ink.
- Logo: `src/components/brand/VibastLabsLogo.tsx` (inline SVG, `variant="light" | "dark"`), copied verbatim from the official brand assets (never redraw it). Favicons/app icons are app-router file conventions (`src/app/favicon.ico`, `icon.svg`, `apple-icon.png`, `manifest.ts`).
- Fonts: Inter for body (`--font-sans`, imported in `src/app/globals.css`), Manrope for headings and the logo wordmark (`--font-manrope`, via `next/font/google` in `src/app/layout.tsx`)
- Uses `@/*` path alias mapped to `./src/*`

### Component Patterns

- All page content uses Chakra UI components (`Box`, `Container`, `Stack`, `CardRoot`, etc.)
- Chakra UI v3 uses `colorPalette` prop instead of `colorScheme`
- Card components use `CardRoot`/`CardHeader`/`CardBody` (not `Card`)
