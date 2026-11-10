import type { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { brand } from "@/brand";
import { VibastLabsLogo } from "@/components/brand/VibastLabsLogo";
import { CONTACT_EMAIL, SECTION_IDS, company } from "@/content/home";
import { PageContainer } from "./primitives";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Services", href: `/#${SECTION_IDS.services}` },
      { label: "How we work", href: `/#${SECTION_IDS.howWeWork}` },
      { label: "Contact", href: `/#${SECTION_IDS.contact}` },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "MailBox (English)", href: "/docs/mailbox" },
      { label: "MailBox (Română)", href: "/ro/docs/mailbox" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
  },
];

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const style = { color: "inherit", textDecoration: "none" };
  return (
    <Text
      as="span"
      fontSize="15px"
      color={brand.linkOnDark}
      css={{ "& a:hover": { color: brand.onDark.paper, textDecoration: "underline" } }}
    >
      {href.startsWith("mailto:") ? (
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

export function SiteFooter() {
  return (
    <Box as="footer" bg="ink" pt={{ base: 12, md: "72px" }} pb={{ base: 8, md: 10 }}>
      <PageContainer>
        <Stack gap={{ base: 8, md: 12 }}>
          <SimpleGrid
            columns={{ base: 2, md: 5 }}
            gap={{ base: 7, md: 12 }}
          >
            <Stack gap={4} gridColumn={{ base: "1 / -1", md: "span 2" }}>
              <NextLink href="/" aria-label="VIBAST Labs home">
                <Box w={{ base: "200px", md: "220px", lg: "260px" }} ml={{ base: "-5px", md: "-6px", lg: "-7px" }}>
                  <VibastLabsLogo variant="dark" width="100%" />
                </Box>
              </NextLink>
              <Text fontSize="15px" color="brand.300" maxW="300px">
                {company.tagline}
              </Text>
            </Stack>
            {columns.map((col) => (
              <Stack
                key={col.title}
                gap={3}
                gridColumn={col.title === "Contact" ? { base: "1 / -1", md: "auto" } : undefined}
              >
                <Text
                  fontSize="13px"
                  fontWeight="semibold"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  color="brand.400"
                >
                  {col.title}
                </Text>
                {col.links.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </Stack>
            ))}
          </SimpleGrid>

          <Stack gap={5} borderTopWidth="1px" borderColor="brand.700" pt={{ base: 6, md: 7 }}>
            <Flex justify="space-between" gap={2} wrap="wrap" direction={{ base: "column", md: "row" }}>
              <Text fontSize="sm" fontWeight="semibold" color={brand.textOnDark}>
                {company.legalName}
              </Text>
              <Text fontSize="sm" color="brand.400">
                {company.address}
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 2, md: 5 }} gap={{ base: 3.5, md: 6 }} fontSize="13px">
              {company.ids.map((id) => (
                <Box key={id.label}>
                  <Text color="brand.400">{id.label}</Text>
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
