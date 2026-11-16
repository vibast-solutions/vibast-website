"use client";

import NextLink from "next/link";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { ROUTES } from "@/i18n/routes";
import { workContent, type WorkContent, type WorkEntry, type WorkLink } from "@/content/pages/work";
import { PageShell, h2Size } from "../PageShell";

function EntryLink({ link, locale }: { link: WorkLink; locale: Locale }) {
  const inner = (external: boolean) => (
    <Text
      as="span"
      display="inline-flex"
      alignItems="center"
      gap={1.5}
      fontWeight="semibold"
      color="accent.600"
      _hover={{ textDecoration: "underline" }}
    >
      {link.label}
      {external ? <ExternalLink size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
    </Text>
  );
  if ("route" in link) {
    return <NextLink href={ROUTES[link.route][locale]}>{inner(false)}</NextLink>;
  }
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      {inner(true)}
    </a>
  );
}

function EntryCard({ entry, labels, locale }: { entry: WorkEntry; labels: WorkContent["labels"]; locale: Locale }) {
  const details = [
    { label: labels.problem, text: entry.problem },
    { label: labels.whatWeDid, text: entry.whatWeDid },
    { label: labels.result, text: entry.result },
  ].filter((d): d is { label: string; text: string } => Boolean(d.text));

  return (
    <Stack
      as="article"
      gap={4}
      bg="white"
      borderWidth="1px"
      borderColor="line"
      borderRadius="16px"
      p={{ base: 6, md: 8 }}
    >
      <Stack gap={1}>
        <Heading as="h3" fontSize="22px" fontWeight="bold" color="ink">
          {entry.name}
        </Heading>
        {entry.client && (
          <Text fontSize="sm" color="brand.500">
            {labels.client}: {entry.client}
          </Text>
        )}
      </Stack>
      <Text color="inkSoft" lineHeight="1.65">
        {entry.summary}
      </Text>
      {details.length > 0 && (
        <Box as="dl">
          {details.map((d) => (
            <Box key={d.label} py={3} borderTopWidth="1px" borderColor="line">
              <Text as="dt" fontSize="sm" fontWeight="semibold" color="ink">
                {d.label}
              </Text>
              <Text as="dd" mt={1} color="brand.500" lineHeight="1.6">
                {d.text}
              </Text>
            </Box>
          ))}
        </Box>
      )}
      {entry.link && (
        <Box mt="auto" pt={1}>
          <EntryLink link={entry.link} locale={locale} />
        </Box>
      )}
    </Stack>
  );
}

export function WorkPage({ locale }: { locale: Locale }) {
  const content = workContent[locale];
  const sections = content.sections.filter((s) => s.entries.length > 0);

  return (
    <PageShell routeKey="work" locale={locale} content={content}>
      {sections.map((section) => (
        <Stack key={section.title} gap={6}>
          <Stack gap={3} maxW="820px">
            <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" letterSpacing="-0.02em" color="ink">
              {section.title}
            </Heading>
            {section.intro && (
              <Text color="inkSoft" fontSize="17px" lineHeight="1.65">
                {section.intro}
              </Text>
            )}
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
            {section.entries.map((entry) => (
              <EntryCard key={entry.name} entry={entry} labels={content.labels} locale={locale} />
            ))}
          </SimpleGrid>
        </Stack>
      ))}
    </PageShell>
  );
}
