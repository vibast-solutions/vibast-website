"use client";

import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/i18n/routes";
import type { ServicePageContent } from "@/content/types";
import { CheckItem } from "@/components/site/primitives";
import { PageShell, h2Size } from "../PageShell";

function SectionTitle({ children }: { children: string }) {
  return (
    <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" letterSpacing="-0.02em" color="ink">
      {children}
    </Heading>
  );
}

/**
 * The shared template for the six service pages (plan §6). It renders only the
 * sections present in the content, in the plan's order, so S3 and S4 fill
 * their pages by editing content files alone. Template changes belong to S3;
 * S4 asks S3 (or the parent session) instead of editing this file.
 */
export function ServicePage({
  routeKey,
  locale,
  content,
}: {
  routeKey: RouteKey;
  locale: Locale;
  content: ServicePageContent;
}) {
  const { isThisYou, whatYouGet, howItWorks, cost, technologies, faq } = content;
  return (
    <PageShell routeKey={routeKey} locale={locale} content={content}>
      {isThisYou && (
        <Stack gap={5} maxW="820px">
          <SectionTitle>{isThisYou.title}</SectionTitle>
          <Stack gap={3} color="inkSoft">
            {isThisYou.items.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </Stack>
        </Stack>
      )}

      {whatYouGet && (
        <Stack gap={6}>
          <SectionTitle>{whatYouGet.title}</SectionTitle>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
            {whatYouGet.items.map((item) => (
              <Stack key={item.title} gap={2} borderTopWidth="2px" borderColor="ink" pt={5}>
                <Heading as="h3" fontSize="19px" fontWeight="bold" color="ink">
                  {item.title}
                </Heading>
                <Text color="brand.500" lineHeight="1.6">
                  {item.body}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      )}

      {howItWorks && (
        <Stack gap={6}>
          <SectionTitle>{howItWorks.title}</SectionTitle>
          <Box as="ol" listStyleType="none">
            {howItWorks.steps.map((step, i) => (
              <Grid
                as="li"
                key={step.title}
                templateColumns={{ base: "minmax(0,1fr)", md: "56px minmax(0,1fr)" }}
                gap={{ base: 1, md: 4 }}
                py={5}
                borderTopWidth="1px"
                borderColor="line"
              >
                <Text fontFamily="heading" fontWeight="bold" color="accent.600">
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Stack gap={1.5}>
                  <Heading as="h3" fontSize="19px" fontWeight="bold" color="ink">
                    {step.title}
                  </Heading>
                  <Text color="brand.500" lineHeight="1.6">
                    {step.body}
                  </Text>
                </Stack>
              </Grid>
            ))}
          </Box>
        </Stack>
      )}

      {cost && (
        <Stack gap={4} maxW="820px">
          <SectionTitle>{cost.title}</SectionTitle>
          {cost.paragraphs.map((p) => (
            <Text key={p} color="inkSoft" fontSize="17px" lineHeight="1.65">
              {p}
            </Text>
          ))}
        </Stack>
      )}

      {technologies && (
        <Text fontSize="sm" color="brand.500">
          <Text as="span" fontWeight="semibold">
            {technologies.label}:
          </Text>{" "}
          {technologies.items.join(" · ")}
        </Text>
      )}

      {faq && (
        <Stack gap={5} maxW="820px">
          <SectionTitle>{faq.title}</SectionTitle>
          <Stack gap={0}>
            {faq.items.map((item) => (
              <Box key={item.q} as="details" borderTopWidth="1px" borderColor="line" py={4}>
                <Text as="summary" fontWeight="semibold" color="ink" cursor="pointer">
                  {item.q}
                </Text>
                <Text mt={2} color="inkSoft" lineHeight="1.65">
                  {item.a}
                </Text>
              </Box>
            ))}
          </Stack>
        </Stack>
      )}
    </PageShell>
  );
}
