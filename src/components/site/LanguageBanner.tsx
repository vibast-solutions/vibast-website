"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowRight, X } from "lucide-react";
import { brand } from "@/brand";
import type { Locale } from "@/i18n/locales";
import { loadLocaleChoice, saveLocaleChoice } from "@/i18n/preference";
import { matchRoute, routePath } from "@/i18n/routes";
import { siteContent } from "@/content/site";
import { PageContainer } from "./primitives";

/** Country whose visitors are offered each language. */
const COUNTRY_FOR: Partial<Record<Locale, string>> = { ro: "RO" };

function browserPrefers(locale: Locale): boolean {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((lang) => lang?.toLowerCase().startsWith(locale));
}

async function visitorCountry(): Promise<string | null> {
  try {
    const res = await fetch("/api/country", { cache: "no-store" });
    if (!res.ok) return null;
    const data: { country?: string | null } = await res.json();
    return data.country ?? null;
  } catch {
    return null;
  }
}

/** No choice recorded yet, and the browser language or the visitor's country points to `locale`. */
async function shouldOffer(locale: Locale): Promise<boolean> {
  if (loadLocaleChoice()) return false;
  if (browserPrefers(locale)) return true;
  const country = COUNTRY_FOR[locale];
  return country ? (await visitorCountry()) === country : false;
}

/**
 * Offers the same page in `suggest` to visitors who are likely to prefer it: a
 * browser set to that language, or (checked only when the browser says nothing)
 * a visit from its country. Never redirects. Hidden for good once the visitor
 * picks a language, here or with the language switcher.
 */
export function LanguageBanner({ suggest }: { suggest: Locale }) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() ?? "/";
  const t = siteContent[suggest].languageBanner;
  const href = routePath(matchRoute(pathname)?.key ?? "home", suggest);

  useEffect(() => {
    let cancelled = false;
    shouldOffer(suggest).then((offer) => {
      if (!cancelled && offer) setVisible(true);
    });
    return () => {
      cancelled = true;
    };
  }, [suggest]);

  if (!visible) return null;

  return (
    <Box as="aside" lang={suggest} bg="ink" color="white" fontSize="15px">
      <PageContainer>
        <Flex align="center" justify="center" gap={{ base: 2, md: 4 }} py={2} pe={8} position="relative" wrap="wrap">
          <Text display={{ base: "none", sm: "block" }} color="whiteAlpha.800">
            {t.text}
          </Text>
          <a href={href} hrefLang={suggest} onClick={() => saveLocaleChoice(suggest)}>
            <Flex as="span" align="center" gap={1.5} fontWeight="semibold" color="accent.400" _hover={{ textDecoration: "underline" }}>
              {t.cta}
              <ArrowRight size={16} color={brand.onDark.teal} aria-hidden="true" />
            </Flex>
          </a>
          <IconButton
            aria-label={t.dismiss}
            size="xs"
            variant="ghost"
            color="whiteAlpha.800"
            _hover={{ bg: "whiteAlpha.200" }}
            position="absolute"
            insetEnd={0}
            onClick={() => {
              // Closing the banner means "I'll stay in this language".
              saveLocaleChoice(suggest === "ro" ? "en" : "ro");
              setVisible(false);
            }}
          >
            <X size={16} />
          </IconButton>
        </Flex>
      </PageContainer>
    </Box>
  );
}
