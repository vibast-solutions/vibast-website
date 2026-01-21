"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Rocket,
  Code,
  Blocks,
  ShieldCheck,
  Search,
  Wrench,
  Check,
  ArrowRight,
  Target,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Results", href: "#results" },
];

const stats = [
  { label: "Projects delivered", value: "120+", detail: "End-to-end product launches" },
  { label: "Client retention", value: "94%", detail: "Long-term partnerships" },
  { label: "Time to first release", value: "2 weeks", detail: "From kickoff to production" },
];

const services = [
  {
    title: "Product Delivery",
    description: "Idea to launch, end-to-end. We turn concepts into shipped products with clear scope and predictable execution.",
    icon: Rocket,
  },
  {
    title: "Software Development",
    description: "Reliable web, backend, and mobile systems built for maintainability, security, and long-term evolution.",
    icon: Code,
  },
  {
    title: "Blockchain & Web3",
    description: "Production blockchain features and integrations—transaction flows, indexing, wallet experiences, and scalable architecture.",
    icon: Blocks,
  },
  {
    title: "Smart Contracts",
    description: "Correct, tested, deployment-ready contracts with disciplined security practices and upgrade considerations.",
    icon: ShieldCheck,
  },
  {
    title: "Reviews & Due Diligence",
    description: "Validate vendors, code quality, and security posture with independent assessments and actionable recommendations.",
    icon: Search,
  },
  {
    title: "Support & Improvement",
    description: "Maintenance, performance tuning, and reliability upgrades—keeping your systems stable and efficient post-launch.",
    icon: Wrench,
  },
];

const capabilities = [
  {
    title: "Engineering depth",
    items: ["Full-stack web and mobile", "API design and integrations", "Infrastructure and DevOps"],
  },
  {
    title: "Security focus",
    items: ["Architecture reviews", "Secure design patterns", "Smart contract auditing"],
  },
  {
    title: "Delivery discipline",
    items: ["Clear scope and milestones", "Transparent communication", "Production-grade quality"],
  },
];

const timeline = [
  {
    title: "Scope",
    body: "We define outcomes, success metrics, and constraints before writing code—so there are no surprises.",
  },
  {
    title: "Build",
    body: "Iterative development with regular check-ins. You see progress weekly, not at the end.",
  },
  {
    title: "Ship",
    body: "Launch with monitoring, documentation, and a clean handoff. We stay available for what comes next.",
  },
];

export default function Home() {
  return (
    <Box bg="#fafbfc" color="#111827" minH="100vh">
      {/* Navigation */}
      <Box
        as="nav"
        position="sticky"
        top={0}
        zIndex={100}
        bg="white"
        borderBottomWidth="1px"
        borderColor="#e5e7eb"
      >
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <Flex align="center" justify="space-between" h="16">
            <HStack gap={3}>
              <Box w={{ base: "32", md: "40" }} h="10" position="relative">
                <Image
                  src="/vibast-logo-large.png"
                  alt="VIBAST SOLUTIONS logo"
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </HStack>
            <HStack gap={1} display={{ base: "none", md: "flex" }}>
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="#374151"
                    fontWeight="medium"
                    _hover={{ bg: "#f3f4f6" }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="#cta">
                <Button
                  size="sm"
                  bg="#c9a227"
                  color="white"
                  fontWeight="semibold"
                  ml={3}
                  px={5}
                  _hover={{ bg: "#a68219" }}
                >
                  Get in touch
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero - Dark Navy Full Width Centered */}
      <Box bg="#102a43" py={{ base: 20, md: 28 }}>
        <Container maxW="4xl" mx="auto" px={{ base: 4, md: 6 }} textAlign="center">
          <Stack gap={6} align="center">
            <Text
              color="#c9a227"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Custom Software Development & Consulting
            </Text>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "4xl" }}
              lineHeight="1.1"
              color="white"
              fontWeight="bold"
            >
              We bring ideas to life and deliver systems you can rely on.
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="#9fb3c8" maxW="2xl">
              VIBAST SOLUTIONS builds production-grade software with quality, security, and
              operational clarity. From concept to launch and beyond—we own the outcome.
            </Text>
            <HStack gap={4} pt={4} flexWrap="wrap" justify="center">
              <Link href="#cta">
                <Button
                  size="lg"
                  bg="#c9a227"
                  color="white"
                  fontWeight="semibold"
                  px={8}
                  _hover={{ bg: "#a68219" }}
                >
                  Start a project
                  <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="#627d98"
                  color="white"
                  fontWeight="medium"
                  px={8}
                  _hover={{ bg: "#243b53" }}
                >
                  View services
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* Stats - Full Bleed Dark Section */}
      <Box id="results" bg="#1f2937" py={{ base: 16, md: 20 }}>
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 10, md: 6 }} textAlign="center">
            {stats.map((stat) => (
              <GridItem key={stat.label}>
                <Text color="#9ca3af" fontSize="sm" fontWeight="medium" mb={2}>
                  {stat.label}
                </Text>
                <Heading size="3xl" color="#c9a227" fontWeight="bold">
                  {stat.value}
                </Heading>
                <Text color="#d1d5db" mt={2}>
                  {stat.detail}
                </Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services - 6-Item Grid */}
      <Box id="services" bg="white" py={{ base: 20, md: 24 }}>
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack gap={12}>
            <Stack gap={4} align="center" textAlign="center" maxW="2xl" mx="auto">
              <Text
                color="#627d98"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                What we do
              </Text>
              <Heading size="xl" color="#111827" fontWeight="bold">
                End-to-end software services
              </Heading>
              <Text color="#4b5563" fontSize="lg">
                From initial concept through production and ongoing support—we deliver reliable
                systems built to last.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Box
                    key={service.title}
                    bg="white"
                    borderWidth="1px"
                    borderColor="#e5e7eb"
                    borderRadius="lg"
                    p={7}
                    _hover={{ borderColor: "#c9a227", shadow: "sm" }}
                    transition="all 0.2s"
                  >
                    <Stack gap={4}>
                      <Box
                        w="11"
                        h="11"
                        bg="#f0f4f8"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconComponent size={22} color="#334e68" strokeWidth={1.5} />
                      </Box>
                      <Heading size="md" color="#111827" fontWeight="semibold">
                        {service.title}
                      </Heading>
                      <Text color="#4b5563" fontSize="sm" lineHeight="tall">
                        {service.description}
                      </Text>
                    </Stack>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* How We Work - Outcome-Based */}
      <Box id="how-we-work" bg="#102a43" py={{ base: 20, md: 24 }}>
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 16 }} alignItems="center">
            <Stack gap={6}>
              <Text
                color="#c9a227"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                How we work
              </Text>
              <Heading size="xl" color="white" fontWeight="bold" lineHeight="1.2">
                Delivery, end-to-end
              </Heading>
              <Text color="#9fb3c8" fontSize="lg" lineHeight="tall">
                We own the outcome from scoping to launch. When additional specialization is
                required, we coordinate the right expertise to meet the same quality and
                reliability standard.
              </Text>
              <Stack gap={4} pt={2}>
                <HStack gap={3} align="start">
                  <Box
                    w="6"
                    h="6"
                    bg="#243b53"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt="2px"
                  >
                    <Check size={14} color="#c9a227" strokeWidth={3} />
                  </Box>
                  <Text color="#bcccdc">Single point of accountability for your project</Text>
                </HStack>
                <HStack gap={3} align="start">
                  <Box
                    w="6"
                    h="6"
                    bg="#243b53"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt="2px"
                  >
                    <Check size={14} color="#c9a227" strokeWidth={3} />
                  </Box>
                  <Text color="#bcccdc">Transparent progress with weekly updates</Text>
                </HStack>
                <HStack gap={3} align="start">
                  <Box
                    w="6"
                    h="6"
                    bg="#243b53"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mt="2px"
                  >
                    <Check size={14} color="#c9a227" strokeWidth={3} />
                  </Box>
                  <Text color="#bcccdc">Clean handoff with documentation you can build on</Text>
                </HStack>
              </Stack>
            </Stack>

            {/* Process Timeline */}
            <Stack gap={0}>
              {timeline.map((item, index) => (
                <Flex key={item.title} gap={5}>
                  {/* Timeline indicator */}
                  <Flex direction="column" align="center" flexShrink={0}>
                    <Box
                      w="12"
                      h="12"
                      bg="#243b53"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderWidth="2px"
                      borderColor="#334e68"
                    >
                      <Text color="#c9a227" fontSize="lg" fontWeight="bold">
                        {index + 1}
                      </Text>
                    </Box>
                    {index < timeline.length - 1 && (
                      <Box w="2px" bg="#334e68" flex={1} minH="8" />
                    )}
                  </Flex>
                  {/* Content */}
                  <Stack gap={2} pb={index < timeline.length - 1 ? 8 : 0}>
                    <Heading size="md" color="white" fontWeight="semibold">
                      {item.title}
                    </Heading>
                    <Text color="#9fb3c8" lineHeight="tall">
                      {item.body}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Capabilities - Simple White Background with Checkmarks */}
      <Box bg="#f3f4f6" py={{ base: 20, md: 24 }}>
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack gap={12}>
            <Stack gap={4} align="center" textAlign="center" maxW="2xl" mx="auto">
              <Text
                color="#627d98"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Capabilities
              </Text>
              <Heading size="xl" color="#111827" fontWeight="bold">
                Built on strong fundamentals
              </Heading>
              <Text color="#4b5563" fontSize="lg">
                Technical depth combined with delivery discipline—so what we ship actually works.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {capabilities.map((capability) => (
                <Box
                  key={capability.title}
                  bg="white"
                  borderRadius="lg"
                  p={8}
                  borderWidth="1px"
                  borderColor="#e5e7eb"
                >
                  <Stack gap={5}>
                    <Heading size="md" color="#111827" fontWeight="semibold">
                      {capability.title}
                    </Heading>
                    <Stack gap={3}>
                      {capability.items.map((item) => (
                        <HStack key={item} align="start" gap={3}>
                          <Box
                            w="5"
                            h="5"
                            bg="#fef9e7"
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                            mt="1px"
                          >
                            <Check size={12} color="#c9a227" strokeWidth={3} />
                          </Box>
                          <Text color="#4b5563">{item}</Text>
                        </HStack>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA - Dark Section with High Contrast */}
      <Box id="cta" bg="#102a43" py={{ base: 20, md: 24 }}>
        <Container maxW="4xl" mx="auto" px={{ base: 4, md: 6 }} textAlign="center">
          <Stack gap={8} align="center">
            <Box
              w="16"
              h="16"
              bg="#243b53"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Target size={32} color="#c9a227" strokeWidth={1.5} />
            </Box>
            <Heading size={{ base: "xl", md: "2xl" }} lineHeight="1.2" color="white" fontWeight="bold">
              Ready to build something reliable?
            </Heading>
            <Text color="#9fb3c8" fontSize="lg" maxW="xl">
              Tell us about your project. We&apos;ll respond within one business day with an honest
              assessment and a clear path forward.
            </Text>
            <HStack gap={4} pt={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="#c9a227"
                color="white"
                fontWeight="semibold"
                px={8}
                _hover={{ bg: "#a68219" }}
              >
                Start a conversation
              </Button>
              <a href="mailto:hello@vibast.com" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="#627d98"
                  color="white"
                  fontWeight="medium"
                  px={8}
                  _hover={{ bg: "#243b53" }}
                >
                  hello@vibast.com
                </Button>
              </a>
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="#0d2137" py={8} borderTopWidth="1px" borderColor="#1f2937">
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <HStack gap={3}>
              <Box w="32" h="8" position="relative">
                <Image
                  src="/vibast-logo-large.png"
                  alt="VIBAST SOLUTIONS logo"
                  fill
                  sizes="128px"
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </Box>
            </HStack>
            <Text color="#627d98" fontSize="sm">
              VIBAST SOLUTIONS. Custom software, built to last.
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
