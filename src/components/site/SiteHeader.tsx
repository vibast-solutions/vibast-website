"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand } from "@/brand";
import { VibastLabsLogo } from "@/components/brand/VibastLabsLogo";
import type { Locale } from "@/i18n/locales";
import { routePath, type RouteKey } from "@/i18n/routes";
import { siteContent } from "@/content/site";
import { CONTACT_EMAIL } from "@/content/company";
import { LanguageSwitch } from "./LanguageSwitch";
import { PageContainer } from "./primitives";

/** Real pages only: no in-page anchors in the main nav. */
const NAV_KEYS: RouteKey[] = ["services", "work", "about", "contact"];

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const t = siteContent[locale];
  const contactHref = routePath("contact", locale);
  const navLinks = NAV_KEYS.map((key) => ({ key, label: t.routeLabels[key], href: routePath(key, locale) }));
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // While the phone menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="paper"
      borderBottomWidth="1px"
      borderColor="line"
    >
      <PageContainer>
        <Flex align="center" justify="space-between" gap={3} h={{ base: "68px", md: "84px" }}>
          {/* The mark has internal padding (10/386 of its width); shift it so the bars align with the text edge. */}
          <NextLink href={routePath("home", locale)} aria-label={t.header.homeAria} onClick={close}>
            <Box w={{ base: "180px", sm: "200px", md: "220px", xl: "260px" }} ml={{ base: "-5px", md: "-6px", xl: "-7px" }}>
              <VibastLabsLogo width="100%" />
            </Box>
          </NextLink>

          <Flex align="center" gap={1}>
            <Flex as="nav" aria-label={t.header.navAria} align="center" gap={1} display={{ base: "none", lg: "flex" }}>
              {navLinks.map((item) => (
                <NextLink key={item.key} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  <Text
                    as="span"
                    display="block"
                    px={3}
                    py={2.5}
                    borderRadius="md"
                    fontSize="15px"
                    fontWeight={isActive(item.href) ? "semibold" : "medium"}
                    color={isActive(item.href) ? "accent.600" : "ink"}
                    _hover={{ bg: "fog" }}
                  >
                    {item.label}
                  </Text>
                </NextLink>
              ))}
            </Flex>

            <LanguageSwitch locale={locale} onNavigate={close} />

            <Button
              asChild
              display={{ base: "none", lg: "inline-flex" }}
              ml={2}
              h="42px"
              px={4.5}
              bg="accent.500"
              color="white"
              fontWeight="semibold"
              _hover={{ bg: "accent.600" }}
            >
              <NextLink href={contactHref}>{t.header.cta}</NextLink>
            </Button>

            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              variant="outline"
              w="44px"
              h="44px"
              ml={1}
              bg="white"
              borderColor="line"
              color="ink"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </IconButton>
          </Flex>
        </Flex>
      </PageContainer>

      {/* Phone/tablet menu: a full-width sheet under the header bar. */}
      {open && (
        <Box
          id="mobile-menu"
          display={{ base: "block", lg: "none" }}
          position="fixed"
          top={{ base: "68px", md: "84px" }}
          left={0}
          right={0}
          bottom={0}
          bg="paper"
          overflowY="auto"
        >
          <PageContainer py={3}>
            <Stack as="nav" aria-label={t.header.navAria} gap={0}>
              {navLinks.map((item) => (
                <NextLink
                  key={item.key}
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  <Flex
                    align="center"
                    justify="space-between"
                    h="56px"
                    borderBottomWidth="1px"
                    borderColor="line"
                    fontFamily="heading"
                    fontWeight="bold"
                    fontSize="xl"
                    color="ink"
                  >
                    {item.label}
                    <ArrowRight size={18} color={brand.muted} aria-hidden="true" />
                  </Flex>
                </NextLink>
              ))}
              <Button
                asChild
                mt={7}
                h="52px"
                bg="accent.500"
                color="white"
                fontWeight="semibold"
                fontSize="md"
                _hover={{ bg: "accent.600" }}
              >
                <NextLink href={contactHref} onClick={close}>
                  {t.header.cta}
                </NextLink>
              </Button>
              <Text mt={4} textAlign="center" fontSize="15px" color="brand.500">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </Text>
            </Stack>
          </PageContainer>
        </Box>
      )}
    </Box>
  );
}
