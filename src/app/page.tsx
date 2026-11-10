"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Grid, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, BookOpen } from "lucide-react";
import { brand } from "@/brand";
import { ContactForm } from "@/components/site/ContactForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CheckItem, Eyebrow, PageContainer } from "@/components/site/primitives";
import {
  CONTACT_EMAIL,
  SECTION_IDS,
  capabilities,
  contact,
  hero,
  howWeWork,
  mailbox,
  practices,
  services,
  stats,
} from "@/content/home";

const contactHref = `#${SECTION_IDS.contact}`;
const sectionPy = { base: 16, md: 28 };
const h2Size = { base: "30px", md: "42px" };

/** Two-column section intro: eyebrow + heading on the left, lead text on the right. */
function SectionIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <Grid
      templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
      gap={{ base: 4, lg: 20 }}
      alignItems="end"
    >
      <Stack gap={4}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2" fontSize={h2Size} lineHeight="1.12" fontWeight="bold" letterSpacing="-0.02em" color="ink">
          {title}
        </Heading>
      </Stack>
      <Text fontSize={{ base: "17px", md: "19px" }} lineHeight="1.6" color="inkSoft">
        {lead}
      </Text>
    </Grid>
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
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
}

/** Hero illustration: the logo's three bars, labelled with the practice areas. */
function LayersPanel() {
  const bars = [
    { label: "Web applications", w: "100%", bg: "lagoon", color: "ink" },
    { label: "Backend & infrastructure", w: "76%", bg: "teal", color: "white" },
    { label: "Blockchain", w: "50%", bg: "ink", color: brand.onDark.paper },
  ];
  return (
    <Stack
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
      <Flex
        display={{ base: "none", md: "flex" }}
        w="full"
        justify="space-between"
        borderTopWidth="1px"
        borderColor="fog"
        mt={5}
        pt={4}
        fontSize="sm"
        color="brand.500"
      >
        <Text>{howWeWork.title}</Text>
        <Text>{howWeWork.steps.map((s) => s.title).join(" · ")}</Text>
      </Flex>
    </Stack>
  );
}

export default function Home() {
  return (
    <Box bg="paper" color="ink" minH="100vh">
      <SiteHeader />

      <main>
        {/* Hero */}
        <Box as="section" pt={{ base: 14, md: "104px" }} pb={{ base: 16, md: 28 }}>
          <PageContainer>
            <Grid
              templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,7fr) minmax(0,5fr)" }}
              gap={{ base: 10, lg: 16 }}
              alignItems="center"
            >
              <Stack gap={{ base: 5, md: 7 }}>
                <Eyebrow>{hero.eyebrow}</Eyebrow>
                <Heading
                  as="h1"
                  fontSize={{ base: "40px", md: "56px", xl: "64px" }}
                  lineHeight="1.04"
                  fontWeight="bold"
                  letterSpacing="-0.02em"
                  color="ink"
                >
                  {hero.headline[0]}
                  <br />
                  {hero.headline[1]}
                </Heading>
                <Text fontSize={{ base: "17px", md: "19px" }} lineHeight="1.6" color="inkSoft" maxW="560px">
                  {hero.description}
                </Text>
                <Flex gap={3} wrap="wrap" direction={{ base: "column", sm: "row" }} pt={2}>
                  <PrimaryButton href={contactHref}>
                    Start a project
                    <ArrowRight size={18} aria-hidden="true" />
                  </PrimaryButton>
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
                    <NextLink href={`#${SECTION_IDS.services}`}>View services</NextLink>
                  </Button>
                </Flex>
                <Text fontSize="15px" color="brand.500">
                  Or email directly:{" "}
                  <Link href={`mailto:${CONTACT_EMAIL}`} color="accent.600">
                    {CONTACT_EMAIL}
                  </Link>
                </Text>
              </Stack>
              <LayersPanel />
            </Grid>
          </PageContainer>
        </Box>

        {/* Practice areas */}
        <Box as="section" aria-label="Practice areas" bg="white" borderYWidth="1px" borderColor="line">
          <PageContainer>
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              {practices.map((p, i) => (
                <Stack
                  key={p.tag}
                  gap={3}
                  py={{ base: 9, md: 14 }}
                  pl={{ base: 0, md: i === 0 ? 0 : 10 }}
                  pr={{ base: 0, md: i === practices.length - 1 ? 0 : 10 }}
                  borderLeftWidth={{ base: 0, md: i === 0 ? 0 : "1px" }}
                  borderTopWidth={{ base: i === 0 ? 0 : "1px", md: 0 }}
                  borderColor="line"
                >
                  <Text
                    fontSize="13px"
                    fontWeight="semibold"
                    letterSpacing="0.12em"
                    textTransform="uppercase"
                    color="accent.600"
                  >
                    {String(i + 1).padStart(2, "0")} · {p.tag}
                  </Text>
                  <Heading as="h3" fontSize={{ base: "20px", md: "22px" }} lineHeight="1.3" fontWeight="bold" color="ink">
                    {p.headline}
                  </Heading>
                  <Text fontSize="md" lineHeight="1.6" color="brand.500">
                    {p.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </PageContainer>
        </Box>

        {/* Stats */}
        <Box as="section" aria-label="In numbers" py={{ base: 14, md: "72px" }}>
          <PageContainer>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 8, md: 10 }}>
              {stats.map((s) => (
                <Stack key={s.label} gap={1.5} borderTopWidth="2px" borderColor="ink" pt={5}>
                  <Text
                    fontFamily="heading"
                    fontSize={{ base: "40px", md: "48px" }}
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                    lineHeight="1.1"
                  >
                    {s.value}
                  </Text>
                  <Text fontWeight="semibold">{s.label}</Text>
                  <Text fontSize="15px" color="brand.500">
                    {s.detail}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </PageContainer>
        </Box>

        {/* Services */}
        <Box as="section" id={SECTION_IDS.services} bg="white" borderTopWidth="1px" borderColor="line" py={sectionPy}>
          <PageContainer>
            <Stack gap={{ base: 8, md: 14 }}>
              <SectionIntro
                eyebrow="What we build"
                title="Blockchain expertise. Full-stack capability."
                lead="Deep specialization in custom blockchains and Cosmos SDK, backed by solid engineering across the entire stack."
              />

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
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Stack key={service.title} bg="white" p={{ base: 6, md: 8 }} gap={3.5}>
                      <Flex w="11" h="11" borderRadius="10px" bg="fog" align="center" justify="center">
                        <Icon size={22} color={brand.teal} strokeWidth={1.75} aria-hidden="true" />
                      </Flex>
                      <Heading as="h3" fontSize={{ base: "18px", md: "19px" }} fontWeight="bold" color="ink">
                        {service.title}
                      </Heading>
                      <Text fontSize="15px" lineHeight="1.65" color="brand.500">
                        {service.description}
                      </Text>
                    </Stack>
                  );
                })}
              </SimpleGrid>

              {/* MailBox: our own product, with links to its documentation. */}
              <Flex
                bg="ink"
                borderRadius={{ base: "16px", md: "20px" }}
                px={{ base: 6, md: 12 }}
                py={{ base: 7, md: 11 }}
                direction={{ base: "column", lg: "row" }}
                align={{ base: "stretch", lg: "center" }}
                justify="space-between"
                gap={{ base: 6, lg: 10 }}
              >
                <Stack gap={4} maxW="680px">
                  <Flex align="center" gap={3.5}>
                    <Flex w="11" h="11" borderRadius="10px" bg="brand.800" align="center" justify="center" flexShrink={0}>
                      <mailbox.icon size={22} color={brand.onDark.teal} strokeWidth={1.75} aria-hidden="true" />
                    </Flex>
                    <Eyebrow onDark>Our product</Eyebrow>
                  </Flex>
                  <Heading as="h3" fontSize={{ base: "23px", md: "28px" }} fontWeight="bold" color={brand.onDark.paper}>
                    {mailbox.title}
                  </Heading>
                  <Text fontSize={{ base: "15px", md: "md" }} lineHeight="1.65" color="brand.300">
                    {mailbox.description}
                  </Text>
                </Stack>
                <Stack gap={3} flexShrink={0} minW={{ lg: "240px" }}>
                  <PrimaryButton href={mailbox.docsHref}>
                    <BookOpen size={18} aria-hidden="true" />
                    View documentation
                  </PrimaryButton>
                  <Button
                    asChild
                    h="52px"
                    px={6}
                    variant="outline"
                    borderColor={brand.outlineOnDark}
                    color={brand.onDark.paper}
                    fontWeight="semibold"
                    fontSize="md"
                    _hover={{ bg: "brand.800" }}
                  >
                    <NextLink href={contactHref}>Get in touch</NextLink>
                  </Button>
                </Stack>
              </Flex>
            </Stack>
          </PageContainer>
        </Box>

        {/* How we work */}
        <Box as="section" id={SECTION_IDS.howWeWork} bg="ink" py={sectionPy}>
          <PageContainer>
            <Grid
              templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
              gap={{ base: 10, lg: 20 }}
            >
              <Stack gap={{ base: 5, md: 6 }}>
                <Eyebrow onDark>How we work</Eyebrow>
                <Heading as="h2" fontSize={h2Size} lineHeight="1.12" fontWeight="bold" letterSpacing="-0.02em" color={brand.onDark.paper}>
                  {howWeWork.title}
                </Heading>
                <Text fontSize={{ base: "17px", md: "18px" }} lineHeight="1.65" color="brand.300">
                  {howWeWork.body}
                </Text>
                <Stack gap={3.5} pt={2} color={brand.textOnDark}>
                  {howWeWork.points.map((point) => (
                    <CheckItem key={point} onDark>
                      {point}
                    </CheckItem>
                  ))}
                </Stack>
              </Stack>
              <Box as="ol" listStyleType="none">
                {howWeWork.steps.map((step, i) => (
                  <Grid
                    as="li"
                    key={step.title}
                    templateColumns={{ base: "minmax(0,1fr)", md: "64px minmax(0,1fr)" }}
                    gap={{ base: 1.5, md: 4 }}
                    py={{ base: 6, md: 8 }}
                    borderTopWidth="1px"
                    borderBottomWidth={i === howWeWork.steps.length - 1 ? "1px" : 0}
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

        {/* Why VIBAST Labs */}
        <Box as="section" py={sectionPy}>
          <PageContainer>
            <Stack gap={{ base: 8, md: 14 }}>
              <SectionIntro
                eyebrow="Why VIBAST Labs"
                title="Specialists who ship"
                lead="Deep blockchain expertise combined with battle-tested engineering practices. We build systems that work—and keep working."
              />
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 8, md: 10 }}>
                {capabilities.map((capability) => (
                  <Stack key={capability.title} gap={5} borderTopWidth="2px" borderColor="ink" pt={6}>
                    <Heading as="h3" fontSize={{ base: "19px", md: "20px" }} fontWeight="bold" color="ink">
                      {capability.title}
                    </Heading>
                    <Stack gap={3} color="inkSoft">
                      {capability.items.map((item) => (
                        <CheckItem key={item}>{item}</CheckItem>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </SimpleGrid>
            </Stack>
          </PageContainer>
        </Box>

        {/* Contact */}
        <Box as="section" id={SECTION_IDS.contact} bg="white" borderTopWidth="1px" borderColor="line" py={sectionPy}>
          <PageContainer>
            <Grid
              templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }}
              gap={{ base: 10, lg: 20 }}
            >
              <Stack gap={{ base: 5, md: 6 }}>
                <Eyebrow>Get in touch</Eyebrow>
                <Heading as="h2" fontSize={h2Size} lineHeight="1.12" fontWeight="bold" letterSpacing="-0.02em" color="ink">
                  {contact.title}
                </Heading>
                <Text fontSize={{ base: "17px", md: "18px" }} lineHeight="1.6" color="inkSoft">
                  {contact.body}
                </Text>
                <Stack gap={3}>
                  {contact.points.map((point) => (
                    <CheckItem key={point}>{point}</CheckItem>
                  ))}
                </Stack>
                <Stack gap={1} borderTopWidth="1px" borderColor="line" mt={3} pt={6}>
                  <Text fontSize="sm" color="brand.500">
                    Or email directly
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
              </Stack>
              <ContactForm />
            </Grid>
          </PageContainer>
        </Box>
      </main>

      <SiteFooter />
    </Box>
  );
}
