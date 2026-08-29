"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Box, Flex, Stack, Text, HStack, IconButton } from "@chakra-ui/react";
import { Menu, X, ArrowLeft } from "lucide-react";
import type { DocPage, Locale } from "@/content/docs";
import {
  docsUi,
  docPageHref,
  alternateHref,
  LOCALES,
} from "@/content/docs";
import { DocContent } from "./DocContent";

interface DocsShellProps {
  locale: Locale;
  page: DocPage;
}

export function DocsShell({ locale, page }: DocsShellProps) {
  const ui = docsUi[locale];
  const [activeId, setActiveId] = useState<string>(page.sections[0]?.id ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scrollspy: highlight the section currently nearest the top of the viewport.
  useEffect(() => {
    const ids = page.sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Pick the first section (in document order) that is currently visible.
        const firstVisible = ids.find((id) => visible.has(id));
        if (firstVisible) setActiveId(firstVisible);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page.sections]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const handleNavClick = useCallback((id: string) => {
    setActiveId(id);
    setMenuOpen(false);
  }, []);

  const sidebar = (
    <SidebarInner
      locale={locale}
      page={page}
      activeId={activeId}
      onNavClick={handleNavClick}
    />
  );

  return (
    <Box bg="#fafbfc" color="#111827" minH="100vh">
      {/* Mobile top bar */}
      <Flex
        display={{ base: "flex", lg: "none" }}
        position="sticky"
        top={0}
        zIndex={30}
        bg="white"
        borderBottomWidth="1px"
        borderColor="#e5e7eb"
        align="center"
        justify="space-between"
        px={4}
        h="14"
      >
        <NextLink href="/">
          <Box w="130px" h="8" position="relative">
            <Image
              src="/vibast-labs-logo.svg"
              alt="VIBAST Labs"
              fill
              sizes="130px"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Box>
        </NextLink>
        <IconButton
          aria-label={ui.openMenu}
          variant="ghost"
          color="#334e68"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </IconButton>
      </Flex>

      {/* Mobile drawer */}
      {menuOpen && (
        <Box display={{ base: "block", lg: "none" }} position="fixed" inset={0} zIndex={50}>
          <Box
            position="absolute"
            inset={0}
            bg="blackAlpha.600"
            onClick={() => setMenuOpen(false)}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            h="100%"
            w="82%"
            maxW="320px"
            bg="white"
            boxShadow="xl"
            overflowY="auto"
          >
            <Flex justify="flex-end" p={2} position="sticky" top={0} bg="white">
              <IconButton
                aria-label={ui.closeMenu}
                variant="ghost"
                color="#334e68"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} />
              </IconButton>
            </Flex>
            <Box px={5} pb={8}>
              {sidebar}
            </Box>
          </Box>
        </Box>
      )}

      <Flex maxW="1280px" mx="auto" align="start">
        {/* Desktop sidebar */}
        <Box
          as="aside"
          display={{ base: "none", lg: "block" }}
          position="sticky"
          top={0}
          h="100vh"
          overflowY="auto"
          w="280px"
          flexShrink={0}
          borderRightWidth="1px"
          borderColor="#e5e7eb"
          bg="white"
          px={6}
          py={7}
        >
          {sidebar}
        </Box>

        {/* Main content */}
        <Box flex={1} minW={0} px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
          <DocContent page={page} locale={locale} />
        </Box>
      </Flex>
    </Box>
  );
}

function SidebarInner({
  locale,
  page,
  activeId,
  onNavClick,
}: {
  locale: Locale;
  page: DocPage;
  activeId: string;
  onNavClick: (id: string) => void;
}) {
  const ui = docsUi[locale];
  return (
    <Stack gap={6}>
      {/* Logo — links back to the marketing site */}
      <NextLink href="/">
        <Box
          w="150px"
          h="9"
          position="relative"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="/vibast-labs-logo.svg"
            alt="VIBAST Labs"
            fill
            sizes="150px"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </Box>
      </NextLink>

      <NextLink href="/">
        <HStack gap={1.5} color="#627d98" _hover={{ color: "#334e68" }}>
          <ArrowLeft size={14} />
          <Text fontSize="sm" fontWeight="medium">
            {ui.backToSite}
          </Text>
        </HStack>
      </NextLink>

      <LanguageSwitch locale={locale} slug={page.slug} label={ui.languageLabel} />

      <Box borderTopWidth="1px" borderColor="#e5e7eb" pt={5}>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="#9ca3af"
          letterSpacing="0.08em"
          textTransform="uppercase"
          mb={3}
        >
          {ui.toolsHeading}
        </Text>

        {/* One entry per tool. MailBox is a single page; its sections nest under it. */}
        <Stack gap={1}>
          <NextLink href={docPageHref(locale, page.slug)}>
            <Text fontWeight="semibold" color="#102a43" fontSize="sm" py={1}>
              {page.navLabel}
            </Text>
          </NextLink>

          <Stack gap={0} borderLeftWidth="1px" borderColor="#e5e7eb" pl={3} ml={1}>
            {page.sections.map((section) => {
              const active = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => onNavClick(section.id)}
                >
                  <Box
                    py={1.5}
                    px={2}
                    ml="-1px"
                    borderLeftWidth="2px"
                    borderColor={active ? "#c9a227" : "transparent"}
                    color={active ? "#102a43" : "#6b7280"}
                    fontWeight={active ? "semibold" : "normal"}
                    fontSize="sm"
                    _hover={{ color: "#334e68", bg: "#f9fafb" }}
                    transition="color 0.15s"
                  >
                    {section.title}
                  </Box>
                </a>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

function LanguageSwitch({
  locale,
  slug,
  label,
}: {
  locale: Locale;
  slug: string;
  label: string;
}) {
  return (
    <Stack gap={1.5}>
      <Text fontSize="xs" color="#9ca3af" fontWeight="medium">
        {label}
      </Text>
      <HStack
        gap={0}
        borderWidth="1px"
        borderColor="#e5e7eb"
        borderRadius="md"
        overflow="hidden"
        w="fit-content"
      >
        {LOCALES.map((loc) => {
          const active = loc === locale;
          const href = active ? docPageHref(locale, slug) : alternateHref(locale, slug);
          return (
            <NextLink key={loc} href={href}>
              <Box
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="semibold"
                bg={active ? "#102a43" : "white"}
                color={active ? "white" : "#6b7280"}
                _hover={active ? {} : { bg: "#f3f4f6" }}
              >
                {loc.toUpperCase()}
              </Box>
            </NextLink>
          );
        })}
      </HStack>
    </Stack>
  );
}
