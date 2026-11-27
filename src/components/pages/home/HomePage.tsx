"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Grid, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
  ArrowRight,
  Blocks,
  ChevronDown,
  Code,
  Layers,
  Mail,
  Puzzle,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { brand } from "@/brand";
import type { Locale } from "@/i18n/locales";
import { SERVICE_KEYS, routePath, type RouteKey } from "@/i18n/routes";
import { CONTACT_EMAIL } from "@/content/company";
import { PhoneContact } from "@/components/site/PhoneContact";
import { contactContent } from "@/content/pages/contact";
import { homeContent, type CardCopy, type HomePageContent } from "@/content/pages/home";
import { ContactForm } from "@/components/site/ContactForm";
import { CheckItem, Eyebrow, PageContainer } from "@/components/site/primitives";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/seo/jsonld";

// In-page anchors. Keep `cta`: old links to /#cta land on the contact form.
const SECTION_IDS = { services: "services", howWeWork: "how-we-work", contact: "cta" } as const;
const contactHref = `#${SECTION_IDS.contact}`;

const sectionPy = { base: 16, md: 24 };
const h2Size = { base: "30px", md: "42px" };
const leadSize = { base: "17px", md: "19px" };

const SERVICE_ICONS: Record<(typeof SERVICE_KEYS)[number], LucideIcon> = {
  webDevelopment: Code,
  mobileApps: Smartphone,
  customSoftware: Puzzle,
  appModernization: Wrench,
  hostingMaintenance: Server,
  blockchain: Blocks,
};

/** "Where are you starting from?" card → the page it links to. */
const STARTING_POINT_LINKS = [
  { key: "new", href: "services", icon: Sparkles },
  { key: "stuck", href: "appModernization", icon: Wrench },
  { key: "run", href: "hostingMaintenance", icon: Layers },
] as const satisfies readonly { key: keyof HomePageContent["startingPoints"]["cards"]; href: RouteKey; icon: LucideIcon }[];

function SectionHeading({ eyebrow, title, onDark = false }: { eyebrow: string; title: string; onDark?: boolean }) {
  return (
    <Stack gap={4}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <Heading
        as="h2"
        fontSize={h2Size}
        lineHeight="1.12"
        fontWeight="bold"
        letterSpacing="-0.02em"
        color={onDark ? brand.onDark.paper : "ink"}
      >
        {title}
      </Heading>
    </Stack>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
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
      <NextLink href={href}>
        {children}
        <ArrowRight size={18} aria-hidden="true" />
      </NextLink>
    </Button>
  );
}

function IconTile({ icon: Icon, onDark = false }: { icon: LucideIcon; onDark?: boolean }) {
  return (
    <Flex w="11" h="11" borderRadius="10px" bg={onDark ? "brand.800" : "fog"} align="center" justify="center" flexShrink={0}>
      <Icon size={22} color={onDark ? brand.onDark.teal : brand.teal} strokeWidth={1.75} aria-hidden="true" />
    </Flex>
  );
}

/** Text link with an arrow, used at the bottom of linked cards. */
function CardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link asChild color="accent.600" fontWeight="semibold" fontSize="15px" mt="auto" w="fit-content">
      <NextLink href={href}>
        {children}
        <ArrowRight size={16} aria-hidden="true" />
      </NextLink>
    </Link>
  );
}

/** Hero illustration: the logo's three bars, labelled with what we do. */
function LayersPanel({ labels }: { labels: [string, string, string] }) {
  const bars = [
    { label: labels[0], w: "100%", bg: "lagoon", color: "ink" },
    { label: labels[1], w: "76%", bg: "teal", color: "white" },
    { label: labels[2], w: "54%", bg: "ink", color: brand.onDark.paper },
  ];
  return (
    <Stack
      aria-hidden="true"
      bg="white"
      borderWidth="1px"
      borderColor="line"
      borderRadius={{ base: "16px", md: "20px" }}
      px={{ base: 5, md: 9 }}
      py={{ base: 6, md: 11 }}
      gap={{ base: 2.5, md: 3.5 }}
      align="center"
    >
      {bars.map((bar) => (
        <Flex
          key={bar.label}
          w={bar.w}
          minW="fit-content"
          h={{ base: "48px", md: "68px" }}
          px={5}
          borderRadius="full"
          bg={bar.bg}
          color={bar.color}
          align="center"
          justify="center"
          fontFamily="heading"
          fontWeight="bold"
          fontSize={{ base: "15px", md: "17px" }}
          whiteSpace="nowrap"
        >
          {bar.label}
        </Flex>
      ))}
    </Stack>
  );
}

/** Home page (plan §5), same layout in both languages. */
export function HomePage({ locale }: { locale: Locale }) {
  const c = homeContent[locale];
  const contact = contactContent[locale];

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />

      {/* 1. Hero */}
      <Box as="section" pt={{ base: 14, md: "96px" }} pb={{ base: 14, md: 20 }}>
        <PageContainer>
          <Grid
            templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,7fr) minmax(0,5fr)" }}
            gap={{ base: 10, lg: 16 }}
            alignItems="center"
          >
            <Stack gap={{ base: 5, md: 7 }}>
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <Heading
                as="h1"
                fontSize={{ base: "36px", md: "50px", xl: "56px" }}
                lineHeight="1.08"
                fontWeight="bold"
                letterSpacing="-0.02em"
                color="ink"
              >
                {c.hero.h1}
              </Heading>
              <Text fontSize={leadSize} lineHeight="1.6" color="inkSoft" maxW="600px">
                {c.hero.sub}
              </Text>
              <Flex gap={3} wrap="wrap" direction={{ base: "column", sm: "row" }} pt={2}>
                <PrimaryButton href={contactHref}>{c.hero.primaryCta}</PrimaryButton>
                <Button
                  asChild
                  h="52px"
                  px={6}
                  variant="outline"
                  borderColor="ink"
                  color="ink"
                  fontWeight="semibold"
                  fontSize="md"
                  _hover={{ bg: "fog" }}
                >
                  <NextLink href={`#${SECTION_IDS.howWeWork}`}>{c.hero.secondaryCta}</NextLink>
                </Button>
              </Flex>
              <Text fontSize="15px" color="brand.500">
                {c.hero.emailPrompt}{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`} color="accent.600">
                  {CONTACT_EMAIL}
                </Link>
              </Text>
            </Stack>
            <LayersPanel labels={c.hero.layers} />
          </Grid>
        </PageContainer>
      </Box>

      {/* 2. Proof row */}
      <Box as="section" aria-label={c.proof.label} bg="white" borderYWidth="1px" borderColor="line" py={{ base: 10, md: 14 }}>
        <PageContainer>
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: 6, md: 10 }}>
            {[...c.proof.stats, c.proof.reach].map((s) => (
              <Stack key={s.label} gap={1} borderTopWidth="2px" borderColor="ink" pt={4}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "30px", md: "42px" }}
                  fontWeight="bold"
                  letterSpacing="-0.02em"
                  lineHeight="1.1"
                  color="ink"
                >
                  {s.value}
                </Text>
                <Text fontSize={{ base: "15px", md: "md" }} color="inkSoft">
                  {s.label}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </PageContainer>
      </Box>

      {/* 3. Where are you starting from? */}
      <Box as="section" py={sectionPy}>
        <PageContainer>
          <Stack gap={{ base: 8, md: 12 }}>
            <SectionHeading eyebrow={c.startingPoints.eyebrow} title={c.startingPoints.title} />
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 4, md: 6 }}>
              {STARTING_POINT_LINKS.map(({ key, href, icon }) => {
                const card = c.startingPoints.cards[key];
                return (
                  <Stack
                    key={key}
                    bg="white"
                    borderWidth="1px"
                    borderColor="line"
                    borderRadius="16px"
                    p={{ base: 6, md: 8 }}
                    gap={4}
                  >
                    <IconTile icon={icon} />
                    <Heading as="h3" fontSize={{ base: "19px", md: "21px" }} lineHeight="1.3" fontWeight="bold" color="ink">
                      {card.title}
                    </Heading>
                    <Text fontSize="md" lineHeight="1.6" color="brand.500">
                      {card.body}
                    </Text>
                    <CardLink href={routePath(href, locale)}>{card.cta}</CardLink>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </Stack>
        </PageContainer>
      </Box>

      {/* 4. What we build */}
      <Box as="section" id={SECTION_IDS.services} bg="white" borderTopWidth="1px" borderColor="line" py={sectionPy}>
        <PageContainer>
          <Stack gap={{ base: 8, md: 12 }}>
            <Grid
              templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
              gap={{ base: 4, lg: 20 }}
              alignItems="end"
            >
              <SectionHeading eyebrow={c.services.eyebrow} title={c.services.title} />
              <Text fontSize={leadSize} lineHeight="1.6" color="inkSoft">
                {c.services.lead}
              </Text>
            </Grid>
            {/* Hairline grid: 1px gaps over the line colour. */}
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              gap="1px"
              bg="line"
              borderWidth="1px"
              borderColor="line"
              borderRadius="16px"
              overflow="hidden"
            >
              {SERVICE_KEYS.map((key) => {
                const card: CardCopy = c.services.cards[key];
                return (
                  <Stack key={key} bg="white" p={{ base: 6, md: 8 }} gap={3.5}>
                    <IconTile icon={SERVICE_ICONS[key]} />
                    <Heading as="h3" fontSize={{ base: "18px", md: "19px" }} fontWeight="bold" color="ink">
                      {card.title}
                    </Heading>
                    <Text fontSize="15px" lineHeight="1.65" color="brand.500">
                      {card.body}
                    </Text>
                    <CardLink href={routePath(key, locale)}>
                      {c.services.more}
                      <Box as="span" srOnly>
                        : {card.title}
                      </Box>
                    </CardLink>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </Stack>
        </PageContainer>
      </Box>

      {/* 5. The range */}
      <Box as="section" py={sectionPy}>
        <PageContainer>
          <Stack gap={{ base: 8, md: 12 }}>
            <SectionHeading eyebrow={c.range.eyebrow} title={c.range.title} />
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }}>
              {c.range.items.map((item) => (
                <Stack key={item.title} gap={3} borderTopWidth="2px" borderColor="ink" pt={6}>
                  <Heading as="h3" fontSize={{ base: "20px", md: "24px" }} lineHeight="1.25" fontWeight="bold" color="ink">
                    {item.title}
                  </Heading>
                  <Text fontSize={{ base: "16px", md: "17px" }} lineHeight="1.65" color="inkSoft">
                    {item.body}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
            <Text fontSize="md" color="brand.500">
              {c.range.note}
            </Text>
          </Stack>
        </PageContainer>
      </Box>

      {/* 6. How we work */}
      <Box as="section" id={SECTION_IDS.howWeWork} bg="ink" py={sectionPy}>
        <PageContainer>
          <Grid
            templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
            gap={{ base: 10, lg: 20 }}
          >
            <Stack gap={{ base: 5, md: 6 }}>
              <SectionHeading eyebrow={c.howWeWork.eyebrow} title={c.howWeWork.title} onDark />
              <Text fontSize={{ base: "17px", md: "18px" }} lineHeight="1.65" color="brand.300">
                {c.howWeWork.payment}
              </Text>
            </Stack>
            <Box as="ol" listStyleType="none">
              {c.howWeWork.steps.map((step, i) => (
                <Grid
                  as="li"
                  key={step.title}
                  templateColumns={{ base: "minmax(0,1fr)", md: "64px minmax(0,1fr)" }}
                  gap={{ base: 1.5, md: 4 }}
                  py={{ base: 6, md: 7 }}
                  borderTopWidth="1px"
                  borderBottomWidth={i === c.howWeWork.steps.length - 1 ? "1px" : 0}
                  borderColor="brand.700"
                >
                  <Text fontFamily="heading" fontWeight="bold" fontSize="15px" color="accent.400" pt={{ md: "5px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Stack gap={2}>
                    <Heading as="h3" fontSize={{ base: "21px", md: "24px" }} fontWeight="bold" color={brand.onDark.paper}>
                      {step.title}
                    </Heading>
                    <Text fontSize="md" lineHeight="1.65" color="brand.300">
                      {step.body}
                    </Text>
                  </Stack>
                </Grid>
              ))}
            </Box>
          </Grid>
        </PageContainer>
      </Box>

      {/* 7. What does it cost? */}
      <Box as="section" py={sectionPy}>
        <PageContainer>
          <Grid
            templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
            gap={{ base: 6, lg: 20 }}
          >
            <SectionHeading eyebrow={c.cost.eyebrow} title={c.cost.title} />
            <Stack gap={4}>
              {c.cost.paragraphs.map((p) => (
                <Text key={p} fontSize={{ base: "17px", md: "18px" }} lineHeight="1.65" color="inkSoft">
                  {p}
                </Text>
              ))}
              <Box pt={3}>
                <PrimaryButton href={contactHref}>{c.cost.cta}</PrimaryButton>
              </Box>
            </Stack>
          </Grid>
        </PageContainer>
      </Box>

      {/* 8. Why VIBAST Labs */}
      <Box as="section" bg="white" borderTopWidth="1px" borderColor="line" py={sectionPy}>
        <PageContainer>
          <Stack gap={{ base: 8, md: 12 }}>
            <SectionHeading eyebrow={c.whyUs.eyebrow} title={c.whyUs.title} />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
              {c.whyUs.items.map((item) => (
                <Stack key={item.title} gap={2} borderTopWidth="2px" borderColor="ink" pt={5}>
                  <Heading as="h3" fontSize={{ base: "18px", md: "19px" }} fontWeight="bold" color="ink">
                    {item.title}
                  </Heading>
                  <Text fontSize="15px" lineHeight="1.65" color="brand.500">
                    {item.body}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </PageContainer>
      </Box>

      {/* 9. MailBox band */}
      <Box as="section" pt={sectionPy} bg="white">
        <PageContainer>
          <Flex
            bg="ink"
            borderRadius={{ base: "16px", md: "20px" }}
            px={{ base: 6, md: 12 }}
            py={{ base: 7, md: 10 }}
            direction={{ base: "column", lg: "row" }}
            align={{ base: "stretch", lg: "center" }}
            justify="space-between"
            gap={{ base: 6, lg: 10 }}
          >
            <Stack gap={4} maxW="680px">
              <Flex align="center" gap={3.5}>
                <IconTile icon={Mail} onDark />
                <Eyebrow onDark>{c.mailbox.eyebrow}</Eyebrow>
              </Flex>
              <Heading as="h2" fontSize={{ base: "23px", md: "28px" }} fontWeight="bold" color={brand.onDark.paper}>
                {c.mailbox.title}
              </Heading>
              <Text fontSize={{ base: "15px", md: "md" }} lineHeight="1.65" color="brand.300">
                {c.mailbox.body}
              </Text>
            </Stack>
            <Box flexShrink={0}>
              <PrimaryButton href={routePath("mailbox", locale)}>{c.mailbox.cta}</PrimaryButton>
            </Box>
          </Flex>
        </PageContainer>
      </Box>

      {/* 10. FAQ */}
      <Box as="section" bg="white" py={sectionPy}>
        <PageContainer>
          <Grid
            templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
            gap={{ base: 8, lg: 20 }}
          >
            <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} />
            <Box>
              {c.faq.items.map((item, i) => (
                <Box
                  as="details"
                  key={item.q}
                  borderTopWidth="1px"
                  borderBottomWidth={i === c.faq.items.length - 1 ? "1px" : 0}
                  borderColor="line"
                  css={{
                    "& > summary::-webkit-details-marker": { display: "none" },
                    "&[open] .faq-chevron": { transform: "rotate(180deg)" },
                  }}
                >
                  <Flex
                    as="summary"
                    listStyleType="none"
                    cursor="pointer"
                    align="center"
                    justify="space-between"
                    gap={4}
                    py={5}
                  >
                    <Heading as="h3" fontSize={{ base: "17px", md: "19px" }} fontWeight="bold" color="ink">
                      {item.q}
                    </Heading>
                    <Box className="faq-chevron" flexShrink={0} transition="transform 0.2s" color="brand.500">
                      <ChevronDown size={20} aria-hidden="true" />
                    </Box>
                  </Flex>
                  <Text pb={5} fontSize="md" lineHeight="1.65" color="inkSoft" maxW="720px">
                    {item.a}
                  </Text>
                </Box>
              ))}
            </Box>
          </Grid>
        </PageContainer>
      </Box>

      {/* 11. Final CTA + contact form */}
      <Box as="section" id={SECTION_IDS.contact} borderTopWidth="1px" borderColor="line" py={sectionPy}>
        <PageContainer>
          <Grid
            templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
            gap={{ base: 10, lg: 20 }}
          >
            <Stack gap={{ base: 5, md: 6 }}>
              <SectionHeading eyebrow={c.contact.eyebrow} title={c.contact.title} />
              <Text fontSize={{ base: "17px", md: "18px" }} lineHeight="1.6" color="inkSoft">
                {c.contact.body}
              </Text>
              <Stack gap={3}>
                {contact.nextSteps.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </Stack>
              <Stack gap={4} borderTopWidth="1px" borderColor="line" mt={3} pt={6}>
                <Stack gap={1}>
                  <Text fontSize="sm" color="brand.500">
                    {c.contact.emailPrompt}
                  </Text>
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    fontFamily="heading"
                    fontSize={{ base: "19px", md: "20px" }}
                    fontWeight="bold"
                    color="accent.600"
                    w="fit-content"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                </Stack>
                <PhoneContact
                  prompt={c.contact.phonePrompt}
                  hours={c.contact.phoneHours}
                  whatsappLabel={c.contact.whatsappLabel}
                />
              </Stack>
            </Stack>
            <ContactForm locale={locale} strings={contact.form} />
          </Grid>
        </PageContainer>
      </Box>
    </>
  );
}
