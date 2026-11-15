"use client";

import NextLink from "next/link";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { ROUTES, SERVICE_KEYS } from "@/i18n/routes";
import { servicesContent } from "@/content/pages/services";
import { CheckItem } from "@/components/site/primitives";
import { PageShell, h2Size } from "../PageShell";

/** Anchor of the service cards; the "something new" starting point links here. */
const SERVICES_ID = "what-we-build";

function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <Stack gap={3} maxW="820px">
      <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" letterSpacing="-0.02em" color="ink">
        {title}
      </Heading>
      {lead && (
        <Text fontSize={{ base: "16px", md: "18px" }} lineHeight="1.6" color="inkSoft">
          {lead}
        </Text>
      )}
    </Stack>
  );
}

function CardLink({ href, children, ariaLabel }: { href: string; children: string; ariaLabel?: string }) {
  return (
    <NextLink href={href} aria-label={ariaLabel}>
      <Text
        as="span"
        display="inline-flex"
        alignItems="center"
        gap={1.5}
        fontWeight="semibold"
        color="accent.600"
        _hover={{ textDecoration: "underline" }}
      >
        {children}
        <ArrowRight size={16} aria-hidden="true" />
      </Text>
    </NextLink>
  );
}

export function ServicesHubPage({ locale }: { locale: Locale }) {
  const content = servicesContent[locale];
  const { startingPoints, services, approach } = content;
  return (
    <PageShell routeKey="services" locale={locale} content={content}>
      <Stack gap={6}>
        <SectionHeading title={startingPoints.title} lead={startingPoints.lead} />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
          {startingPoints.items.map((item) => (
            <Stack
              key={item.title}
              gap={3}
              bg="white"
              borderWidth="1px"
              borderColor="line"
              borderRadius="16px"
              p={{ base: 6, md: 7 }}
              justify="space-between"
            >
              <Stack gap={2}>
                <Heading as="h3" fontSize="20px" fontWeight="bold" color="ink">
                  {item.title}
                </Heading>
                <Text color="inkSoft" lineHeight="1.6">
                  {item.body}
                </Text>
              </Stack>
              <CardLink href={item.href ? ROUTES[item.href][locale] : `#${SERVICES_ID}`}>{item.link}</CardLink>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>

      <Stack gap={6} id={SERVICES_ID} scrollMarginTop="96px">
        <SectionHeading title={services.title} lead={services.lead} />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {SERVICE_KEYS.map((key) => {
            const card = services.items[key];
            return (
              <Stack key={key} gap={3} borderTopWidth="2px" borderColor="ink" pt={5}>
                <Heading as="h3" fontSize="19px" fontWeight="bold" color="ink">
                  <NextLink href={ROUTES[key][locale]}>{card.title}</NextLink>
                </Heading>
                <Text color="brand.500" lineHeight="1.6">
                  {card.body}
                </Text>
                <Box>
                  <CardLink href={ROUTES[key][locale]} ariaLabel={`${services.linkLabel}: ${card.title}`}>
                    {services.linkLabel}
                  </CardLink>
                </Box>
              </Stack>
            );
          })}
        </SimpleGrid>
      </Stack>

      <Stack gap={5} maxW="820px">
        <SectionHeading title={approach.title} />
        <Stack gap={3} color="inkSoft">
          {approach.items.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </Stack>
      </Stack>
    </PageShell>
  );
}
