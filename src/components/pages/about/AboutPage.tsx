"use client";

import type { ReactNode } from "react";
import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { Locale } from "@/i18n/locales";
import { aboutContent } from "@/content/pages/about";
import { siteContent } from "@/content/site";
import { COMPANY, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/content/company";
import { CheckItem } from "@/components/site/primitives";
import { PageShell, h2Size } from "../PageShell";

function SectionTitle({ children }: { children: string }) {
  return (
    <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" letterSpacing="-0.02em" color="ink">
      {children}
    </Heading>
  );
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Grid
      templateColumns={{ base: "minmax(0,1fr)", sm: "160px minmax(0,1fr)" }}
      gap={{ base: 0.5, sm: 4 }}
      py={3}
      borderTopWidth="1px"
      borderColor="line"
    >
      <Text as="dt" fontSize="sm" fontWeight="semibold" color="brand.500">
        {label}
      </Text>
      <Text as="dd" color="ink" overflowWrap="anywhere">
        {children}
      </Text>
    </Grid>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];
  const { whoWeAre, stats, howWeThink, howWeWork, companyDetails } = content;
  const footer = siteContent[locale].footer;

  return (
    <PageShell routeKey="about" locale={locale} content={content}>
      <Stack gap={4} maxW="820px">
        <SectionTitle>{whoWeAre.title}</SectionTitle>
        {whoWeAre.paragraphs.map((p) => (
          <Text key={p} color="inkSoft" fontSize="17px" lineHeight="1.65">
            {p}
          </Text>
        ))}
      </Stack>

      <SimpleGrid as="dl" columns={{ base: 1, sm: 3 }} gap={{ base: 6, md: 8 }}>
        {stats.map((s) => (
          <Stack key={s.label} gap={1} borderTopWidth="2px" borderColor="accent.500" pt={4}>
            <Text as="dt" order={2} color="brand.500">
              {s.label}
            </Text>
            <Text as="dd" order={1} fontFamily="heading" fontWeight="bold" fontSize={{ base: "32px", md: "40px" }} color="ink" lineHeight="1.1">
              {s.value}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>

      <Stack gap={6}>
        <SectionTitle>{howWeThink.title}</SectionTitle>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          {howWeThink.items.map((item) => (
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

      <Stack gap={5} maxW="820px">
        <SectionTitle>{howWeWork.title}</SectionTitle>
        <Text color="inkSoft" fontSize="17px" lineHeight="1.65">
          {howWeWork.intro}
        </Text>
        <Stack gap={3} color="inkSoft">
          {howWeWork.items.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </Stack>
        <Text color="ink" fontWeight="semibold">
          {howWeWork.note}
        </Text>
      </Stack>

      <Stack gap={5} maxW="820px">
        <SectionTitle>{companyDetails.title}</SectionTitle>
        <Box as="dl" borderBottomWidth="1px" borderColor="line">
          <DetailRow label={companyDetails.brandLabel}>{COMPANY.name}</DetailRow>
          <DetailRow label={companyDetails.legalNameLabel}>{COMPANY.legalName}</DetailRow>
          <DetailRow label={companyDetails.addressLabel}>{footer.address}</DetailRow>
          {COMPANY.ids.map((id) => (
            <DetailRow key={id.key} label={footer.idLabels[id.key]}>
              {id.value}
            </DetailRow>
          ))}
          <DetailRow label={companyDetails.emailLabel}>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Text as="span" color="accent.600" _hover={{ textDecoration: "underline" }}>
                {CONTACT_EMAIL}
              </Text>
            </a>
          </DetailRow>
          {CONTACT_PHONE && (
            <DetailRow label={companyDetails.phoneLabel}>
              <a href={CONTACT_PHONE_HREF}>
                <Text as="span" color="accent.600" _hover={{ textDecoration: "underline" }}>
                  {CONTACT_PHONE}
                </Text>
              </a>
            </DetailRow>
          )}
        </Box>
      </Stack>
    </PageShell>
  );
}
