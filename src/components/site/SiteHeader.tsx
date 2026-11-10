"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Box, Button, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand } from "@/brand";
import { VibastLabsLogo } from "@/components/brand/VibastLabsLogo";
import { CONTACT_EMAIL, SECTION_IDS, navLinks } from "@/content/home";
import { PageContainer } from "./primitives";

const contactHref = `/#${SECTION_IDS.contact}`;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
        <Flex align="center" justify="space-between" h={{ base: "64px", md: "72px" }}>
          {/* The mark has internal padding; shift it so the bars align with the text edge. */}
          <NextLink href="/" aria-label="VIBAST Labs home" onClick={close}>
            <Box w={{ base: "140px", md: "168px" }} ml="-4px">
              <VibastLabsLogo width="100%" />
            </Box>
          </NextLink>

          <Flex as="nav" aria-label="Main" align="center" gap={1} display={{ base: "none", md: "flex" }}>
            {navLinks.map((item) => (
              <NextLink key={item.href} href={item.href}>
                <Text
                  as="span"
                  display="block"
                  px={3.5}
                  py={2.5}
                  borderRadius="md"
                  fontSize="15px"
                  fontWeight="medium"
                  color="ink"
                  _hover={{ bg: "fog" }}
                >
                  {item.label}
                </Text>
              </NextLink>
            ))}
            <Button
              asChild
              ml={3}
              h="42px"
              px={4.5}
              bg="accent.500"
              color="white"
              fontWeight="semibold"
              _hover={{ bg: "accent.600" }}
            >
              <NextLink href={contactHref}>Get in touch</NextLink>
            </Button>
          </Flex>

          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            variant="outline"
            w="44px"
            h="44px"
            bg="white"
            borderColor="line"
            color="ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </IconButton>
        </Flex>
      </PageContainer>

      {/* Phone menu: a full-width sheet under the header bar. */}
      {open && (
        <Box
          id="mobile-menu"
          display={{ base: "block", md: "none" }}
          position="fixed"
          top="64px"
          left={0}
          right={0}
          bottom={0}
          bg="paper"
          overflowY="auto"
        >
          <PageContainer py={3}>
            <Stack as="nav" aria-label="Main" gap={0}>
              {navLinks.map((item) => (
                <NextLink key={item.href} href={item.href} onClick={close}>
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
                  Get in touch
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
