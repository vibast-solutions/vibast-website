"use client";

import NextLink from "next/link";
import { Box, Button, Flex, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { ROUTES } from "@/i18n/routes";
import { mailboxContent, type MailboxContent } from "@/content/pages/mailbox";
// Prices and limits: the same table the docs render, so page and docs never disagree.
import { TIERS, UNLIMITED, type Tier } from "@/content/docs/shared";
import { CheckItem } from "@/components/site/primitives";
import { PageShell, h2Size } from "../PageShell";

function SectionTitle({ children }: { children: string }) {
  return (
    <Heading as="h2" fontSize={h2Size} lineHeight="1.15" fontWeight="bold" letterSpacing="-0.02em" color="ink">
      {children}
    </Heading>
  );
}

const tierName = (tier: Tier) => tier.id.charAt(0).toUpperCase() + tier.id.slice(1);
const price = (tier: Tier, locale: Locale) => (locale === "ro" ? `${tier.price} €` : `€${tier.price}`);

function PlanCard({ tier, plans, locale }: { tier: Tier; plans: MailboxContent["plans"]; locale: Locale }) {
  const limit = (v: string) => (v === UNLIMITED ? plans.unlimited : v);
  const rows: { label: string; value: string }[] = [
    { label: plans.rows.storage, value: tier.storage },
    { label: plans.rows.mailboxes, value: tier.mailboxes },
    { label: plans.rows.domains, value: tier.domains },
    { label: plans.rows.forwarders, value: tier.forwarders },
    { label: plans.rows.pointers, value: tier.pointers },
  ];
  return (
    <Stack
      gap={5}
      bg="white"
      borderWidth={tier.featured ? "2px" : "1px"}
      borderColor={tier.featured ? "accent.500" : "line"}
      borderRadius="16px"
      p={{ base: 6, md: 7 }}
    >
      <Stack gap={1}>
        <Flex align="center" justify="space-between" gap={3} wrap="wrap">
          <Heading as="h3" fontSize="20px" fontWeight="bold" color="ink">
            {tierName(tier)}
          </Heading>
          {tier.featured && (
            <Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="0.08em" color="accent.600">
              {plans.featured}
            </Text>
          )}
        </Flex>
        <Text>
          <Text as="span" fontFamily="heading" fontWeight="bold" fontSize="36px" color="ink">
            {price(tier, locale)}
          </Text>{" "}
          <Text as="span" color="brand.500">
            {plans.perYear}
          </Text>
        </Text>
      </Stack>
      <Box as="dl">
        {rows.map((r) => (
          <Flex key={r.label} justify="space-between" gap={4} py={2} borderTopWidth="1px" borderColor="line">
            <Text as="dt" color="brand.500" fontSize="sm">
              {r.label}
            </Text>
            <Text as="dd" color="ink" fontWeight="semibold" fontSize="sm" textAlign="right">
              {limit(r.value)}
            </Text>
          </Flex>
        ))}
      </Box>
    </Stack>
  );
}

function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <NextLink href={href}>
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

export function MailboxPage({ locale }: { locale: Locale }) {
  const content = mailboxContent[locale];
  const { heroLinks, forWho, whatYouGet, plans, howToStart, docs } = content;
  const named = TIERS.filter((t) => !t.custom);
  const [primary, secondary] = heroLinks;

  return (
    <PageShell routeKey="mailbox" locale={locale} content={content}>
      <Flex gap={{ base: 4, sm: 6 }} wrap="wrap" align="center" mt={{ base: -2, md: -4 }}>
        {primary && (
          <Button
            asChild
            h="52px"
            px={6}
            bg="accent.500"
            color="white"
            fontWeight="semibold"
            fontSize="md"
            _hover={{ bg: "accent.600" }}
          >
            <NextLink href={ROUTES[primary.route][locale]}>
              {primary.label}
              <ArrowRight size={18} aria-hidden="true" />
            </NextLink>
          </Button>
        )}
        {secondary && <TextLink href={ROUTES[secondary.route][locale]}>{secondary.label}</TextLink>}
      </Flex>

      <Stack gap={5} maxW="820px">
        <SectionTitle>{forWho.title}</SectionTitle>
        <Stack gap={3} color="inkSoft">
          {forWho.items.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </Stack>
      </Stack>

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

      <Stack gap={6}>
        <Stack gap={3} maxW="820px">
          <SectionTitle>{plans.title}</SectionTitle>
          <Text color="inkSoft" fontSize="17px" lineHeight="1.65">
            {plans.intro}
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 5, md: 6 }}>
          {named.map((tier) => (
            <PlanCard key={tier.id} tier={tier} plans={plans} locale={locale} />
          ))}
        </SimpleGrid>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap={4}
          bg="brand.50"
          borderRadius="16px"
          p={{ base: 6, md: 7 }}
        >
          <Stack gap={1} maxW="640px">
            <Heading as="h3" fontSize="20px" fontWeight="bold" color="ink">
              {plans.custom.title}
            </Heading>
            <Text color="inkSoft" lineHeight="1.6">
              {plans.custom.body}
            </Text>
          </Stack>
          <TextLink href={ROUTES.contact[locale]}>{plans.custom.button}</TextLink>
        </Flex>
      </Stack>

      <Stack gap={6}>
        <SectionTitle>{howToStart.title}</SectionTitle>
        <Box as="ol" listStyleType="none">
          {howToStart.steps.map((step, i) => (
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

      <Stack gap={3} maxW="820px" borderTopWidth="2px" borderColor="ink" pt={6}>
        <Heading as="h2" fontSize="24px" fontWeight="bold" color="ink">
          {docs.title}
        </Heading>
        <Text color="inkSoft" lineHeight="1.65">
          {docs.body}
        </Text>
        <Box>
          <TextLink href={ROUTES.docsMailbox[locale]}>{docs.button}</TextLink>
        </Box>
      </Stack>
    </PageShell>
  );
}
