import type { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { brand } from "@/brand";
import { VibastLabsLogo } from "@/components/brand/VibastLabsLogo";
import type { Locale } from "@/i18n/locales";
import { SERVICE_KEYS, routePath, type RouteKey } from "@/i18n/routes";
import { siteContent } from "@/content/site";
import { COMPANY, CONTACT_EMAIL, CONTACT_PHONE } from "@/content/company";
import { PageContainer } from "./primitives";

const COMPANY_KEYS: RouteKey[] = ["services", "work", "about", "contact", "mailbox"];

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const style = { color: "inherit", textDecoration: "none" };
  const external = href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <Text
      as="span"
      fontSize="15px"
      color={brand.linkOnDark}
      css={{ "& a:hover": { color: brand.onDark.paper, textDecoration: "underline" } }}
    >
      {external ? (
        <a href={href} style={style}>
          {children}
        </a>
      ) : (
        <NextLink href={href} style={style}>
          {children}
        </NextLink>
      )}
    </Text>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <Text fontSize="13px" fontWeight="semibold" letterSpacing="0.12em" textTransform="uppercase" color="brand.400">
      {children}
    </Text>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = siteContent[locale];
  const f = t.footer;
  const link = (key: RouteKey) => ({ label: t.routeLabels[key], href: routePath(key, locale) });

  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    { title: f.columns.company, links: COMPANY_KEYS.map(link) },
    { title: f.columns.services, links: SERVICE_KEYS.map(link) },
    { title: f.columns.docs, links: f.docsLinks },
  ];

  return (
    <Box as="footer" bg="ink" pt={{ base: 12, md: "72px" }} pb={{ base: 8, md: 10 }}>
      <PageContainer>
        <Stack gap={{ base: 8, md: 12 }}>
          <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} gap={{ base: 7, md: 10 }}>
            <Stack gap={4} gridColumn={{ base: "1 / -1", lg: "span 2" }}>
              <NextLink href={routePath("home", locale)} aria-label={t.header.homeAria}>
                <Box w={{ base: "200px", md: "220px", lg: "260px" }} ml={{ base: "-5px", md: "-6px", lg: "-7px" }}>
                  <VibastLabsLogo variant="dark" width="100%" />
                </Box>
              </NextLink>
              <Text fontSize="15px" color="brand.300" maxW="300px">
                {f.tagline}
              </Text>
            </Stack>
            {columns.map((col) => (
              <Stack key={col.title} gap={3}>
                <ColumnTitle>{col.title}</ColumnTitle>
                {col.links.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </Stack>
            ))}
            <Stack gap={3}>
              <ColumnTitle>{f.columns.contact}</ColumnTitle>
              <FooterLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</FooterLink>
              {/* Rendered only once a phone number is set in src/content/company.ts. */}
              {CONTACT_PHONE && (
                <FooterLink href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}>{CONTACT_PHONE}</FooterLink>
              )}
            </Stack>
          </SimpleGrid>

          <Stack gap={5} borderTopWidth="1px" borderColor="brand.700" pt={{ base: 6, md: 7 }}>
            <Flex justify="space-between" gap={2} wrap="wrap" direction={{ base: "column", md: "row" }}>
              <Text fontSize="sm" fontWeight="semibold" color={brand.textOnDark}>
                {COMPANY.legalName}
              </Text>
              <Text fontSize="sm" color="brand.400">
                {f.address}
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 2, md: 5 }} gap={{ base: 3.5, md: 6 }} fontSize="13px">
              {COMPANY.ids.map((id) => (
                <Box key={id.key}>
                  <Text color="brand.400">{f.idLabels[id.key]}</Text>
                  <Text color={brand.linkOnDark}>{id.value}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </PageContainer>
    </Box>
  );
}
