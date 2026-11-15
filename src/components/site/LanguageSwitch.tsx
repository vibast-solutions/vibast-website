"use client";

import { usePathname } from "next/navigation";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Globe } from "lucide-react";
import { brand } from "@/brand";
import { otherLocale, type Locale } from "@/i18n/locales";
import { matchRoute, routePath } from "@/i18n/routes";
import { siteContent } from "@/content/site";

/**
 * Link to the same page in the other language (falls back to the other home
 * page for paths outside the route table). A plain <a>: the two languages use
 * different root layouts, so this is a full page load anyway.
 */
export function LanguageSwitch({ locale, onNavigate }: { locale: Locale; onNavigate?: () => void }) {
  const pathname = usePathname() ?? "/";
  const target = otherLocale(locale);
  const match = matchRoute(pathname);
  const href = routePath(match?.key ?? "home", target);
  const { label, aria } = siteContent[locale].languageSwitch;

  return (
    <a href={href} hrefLang={target} lang={target} aria-label={aria} onClick={onNavigate}>
      <Flex
        as="span"
        align="center"
        gap={1.5}
        px={{ base: 2.5, lg: 3 }}
        py={2}
        borderRadius="md"
        fontSize="15px"
        fontWeight="medium"
        color="ink"
        _hover={{ bg: "fog" }}
      >
        <Globe size={17} color={brand.muted} aria-hidden="true" />
        <Text as="span" display={{ base: "none", lg: "inline" }}>
          {label}
        </Text>
        <Box as="span" display={{ base: "inline", lg: "none" }}>
          {target.toUpperCase()}
        </Box>
      </Flex>
    </a>
  );
}
