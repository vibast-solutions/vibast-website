"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { brand } from "@/brand";
import type { Locale } from "@/i18n/locales";
import { ROUTES, routeTrail, type RouteKey } from "@/i18n/routes";
import type { PageCta, ShellContent } from "@/content/types";
import { siteContent } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/jsonld";
import { Eyebrow, PageContainer } from "@/components/site/primitives";

export const sectionPy = { base: 16, md: 24 };
export const h2Size = { base: "28px", md: "38px" };

/** Visible breadcrumb trail + its BreadcrumbList JSON-LD. */
export function Breadcrumbs({ routeKey, locale }: { routeKey: RouteKey; locale: Locale }) {
  const labels = siteContent[locale].routeLabels;
  const trail = routeTrail(routeKey);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(routeKey, locale)} />
      <Box as="nav" aria-label="Breadcrumb">
        <Flex as="ol" listStyleType="none" wrap="wrap" align="center" gap={1.5} fontSize="sm" color="brand.500">
          {trail.map((key, i) => {
            const last = i === trail.length - 1;
            return (
              <Flex as="li" key={key} align="center" gap={1.5}>
                {last ? (
                  <Text as="span" aria-current="page" color="ink">
                    {labels[key]}
                  </Text>
                ) : (
                  <>
                    <NextLink href={ROUTES[key][locale]}>
                      <Text as="span" _hover={{ color: "ink", textDecoration: "underline" }}>
                        {labels[key]}
                      </Text>
                    </NextLink>
                    <ChevronRight size={14} aria-hidden="true" />
                  </>
                )}
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

/** Page hero: optional eyebrow, the one H1 and the intro line. */
export function PageHero({ h1, intro, eyebrow, children }: { h1: string; intro: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <Stack gap={{ base: 5, md: 6 }} maxW="820px">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        as="h1"
        fontSize={{ base: "36px", md: "52px" }}
        lineHeight="1.08"
        fontWeight="bold"
        letterSpacing="-0.02em"
        color="ink"
      >
        {h1}
      </Heading>
      <Text fontSize={{ base: "17px", md: "19px" }} lineHeight="1.6" color="inkSoft">
        {intro}
      </Text>
      {children}
    </Stack>
  );
}

/** Ink band with a heading, one line and a button to another page. */
export function CtaBand({ cta, locale }: { cta: PageCta; locale: Locale }) {
  return (
    <Box as="section" bg="ink" py={{ base: 14, md: 20 }}>
      <PageContainer>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          justify="space-between"
          gap={{ base: 6, md: 10 }}
        >
          <Stack gap={3} maxW="640px">
            <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" color={brand.onDark.paper}>
              {cta.title}
            </Heading>
            <Text fontSize={{ base: "16px", md: "18px" }} lineHeight="1.6" color="brand.300">
              {cta.body}
            </Text>
          </Stack>
          <Button
            asChild
            h="52px"
            px={6}
            flexShrink={0}
            bg="accent.500"
            color="white"
            fontWeight="semibold"
            fontSize="md"
            _hover={{ bg: "accent.600" }}
          >
            <NextLink href={ROUTES[cta.href][locale]}>
              {cta.button}
              <ArrowRight size={18} aria-hidden="true" />
            </NextLink>
          </Button>
        </Flex>
      </PageContainer>
    </Box>
  );
}

/**
 * A page that is still being written: breadcrumbs, H1, intro, a "content
 * coming" note, optional extra content (`children`) and the CTA band.
 */
export function PageShell({
  routeKey,
  locale,
  content,
  children,
}: {
  routeKey: RouteKey;
  locale: Locale;
  content: ShellContent;
  children?: ReactNode;
}) {
  return (
    <>
      <Box as="section" pt={{ base: 8, md: 12 }} pb={sectionPy}>
        <PageContainer>
          <Stack gap={{ base: 8, md: 12 }}>
            {routeKey !== "home" && <Breadcrumbs routeKey={routeKey} locale={locale} />}
            <PageHero h1={content.h1} intro={content.intro} />
            {content.placeholder && (
              <Box
                maxW="820px"
                bg="white"
                borderWidth="1px"
                borderColor="line"
                borderRadius="16px"
                p={{ base: 6, md: 8 }}
              >
                <Text fontWeight="semibold" color="ink" mb={2}>
                  {siteContent[locale].placeholderTitle}
                </Text>
                <Text color="inkSoft" lineHeight="1.6">
                  {content.placeholder}
                </Text>
              </Box>
            )}
            {children}
          </Stack>
        </PageContainer>
      </Box>
      {content.cta && <CtaBand cta={content.cta} locale={locale} />}
    </>
  );
}
