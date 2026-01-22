"use client";

import { useState, useEffect } from "react";
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
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
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
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
];

const stats = [
  { label: "Projects delivered", value: "120+", detail: "End-to-end product launches" },
  { label: "Client retention", value: "94%", detail: "Long-term partnerships" },
  { label: "Time to first release", value: "2 weeks", detail: "From kickoff to production" },
];

const services = [
  {
    title: "Custom Blockchain Development",
    description: "Purpose-built blockchains tailored to your requirements. UTXO or account-based, custom consensus, any architecture. We build the chain that fits your use case.",
    icon: Blocks,
  },
  {
    title: "Cosmos SDK & Appchains",
    description: "Production-ready Cosmos SDK appchains with custom modules, IBC connectivity, and seamless integration with the interchain ecosystem.",
    icon: Rocket,
  },
  {
    title: "Smart Contracts",
    description: "Secure, audited smart contracts for EVM chains and CosmWasm. From DeFi protocols to NFT platforms with disciplined security practices.",
    icon: ShieldCheck,
  },
  {
    title: "Backend & Infrastructure",
    description: "Reliable APIs, databases, and cloud infrastructure. Data migrations, system integrations, and backend services built for scale and maintainability.",
    icon: Code,
  },
  {
    title: "Security & Auditing",
    description: "Smart contract audits, code reviews, and security assessments. Independent analysis with actionable recommendations for blockchain and traditional systems.",
    icon: Search,
  },
  {
    title: "Ongoing Support",
    description: "Maintenance, upgrades, monitoring, and incident response. Keep your systems—blockchain or otherwise—secure and performant post-launch.",
    icon: Wrench,
  },
];

const capabilities = [
  {
    title: "Blockchain expertise",
    items: ["Custom chains, any architecture", "Cosmos SDK & IBC integration", "Smart contract development"],
  },
  {
    title: "Engineering depth",
    items: ["Backend systems & APIs", "Data migrations & ETL", "Cloud infrastructure"],
  },
  {
    title: "Production ready",
    items: ["High-availability systems", "Security-first approach", "Long-term support"],
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

const heroSlides = [
  {
    tag: "Blockchain Development",
    headline: "Custom blockchains. Any architecture.",
    description: "From Cosmos SDK appchains to UTXO-based networks and beyond. We design and build the blockchain that fits your specific use case.",
  },
  {
    tag: "Web Development",
    headline: "Modern web applications. Designed to scale.",
    description: "Full-stack web development with React, Next.js, and Node.js. APIs, databases, and cloud infrastructure built for performance.",
  },
  {
    tag: "Reliable Infrastructure",
    headline: "Systems that work. And keep working.",
    description: "High-availability backends, data migrations, and production-grade infrastructure. Built with security and maintainability in mind.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

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
            <Link href="/">
              <Box w={{ base: "140px", md: "160px" }} h="10" position="relative">
                <Image
                  src="/vibast-labs-logo.svg"
                  alt="VIBAST Labs"
                  fill
                  sizes="160px"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                  priority
                />
              </Box>
            </Link>
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

      {/* Hero - Dark Navy Full Width Centered with Sliding Content */}
      <Box bg="#102a43" py={{ base: 20, md: 28 }}>
        <Container maxW="4xl" mx="auto" px={{ base: 4, md: 6 }} textAlign="center">
          <Stack gap={6} align="center">
            {/* Sliding content */}
            <Box minH={{ base: "220px", md: "200px" }} w="full">
              <Stack gap={6} align="center">
                <Text
                  key={`tag-${currentSlide}`}
                  color="#c9a227"
                  fontSize="sm"
                  fontWeight="semibold"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  opacity={1}
                  animation="fadeIn 0.5s ease-in-out"
                >
                  {heroSlides[currentSlide].tag}
                </Text>
                <Heading
                  key={`headline-${currentSlide}`}
                  as="h1"
                  size={{ base: "2xl", md: "4xl" }}
                  lineHeight="1.1"
                  color="white"
                  fontWeight="bold"
                  animation="fadeIn 0.5s ease-in-out"
                >
                  {heroSlides[currentSlide].headline}
                </Heading>
                <Text
                  key={`desc-${currentSlide}`}
                  fontSize={{ base: "lg", md: "xl" }}
                  color="#9fb3c8"
                  maxW="2xl"
                  animation="fadeIn 0.5s ease-in-out"
                >
                  {heroSlides[currentSlide].description}
                </Text>
              </Stack>
            </Box>

            {/* Slide indicators */}
            <HStack gap={2} pt={2}>
              {heroSlides.map((_, index) => (
                <Box
                  key={index}
                  as="button"
                  w={currentSlide === index ? "24px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={currentSlide === index ? "#c9a227" : "#334e68"}
                  transition="all 0.3s ease"
                  onClick={() => setCurrentSlide(index)}
                  cursor="pointer"
                  _hover={{ bg: currentSlide === index ? "#c9a227" : "#486581" }}
                />
              ))}
            </HStack>

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
                What We Build
              </Text>
              <Heading size="xl" color="#111827" fontWeight="bold">
                Blockchain expertise. Full-stack capability.
              </Heading>
              <Text color="#4b5563" fontSize="lg">
                Deep specialization in custom blockchains and Cosmos SDK, backed by solid
                engineering across the entire stack.
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
                Why VIBAST Labs
              </Text>
              <Heading size="xl" color="#111827" fontWeight="bold">
                Specialists who ship
              </Heading>
              <Text color="#4b5563" fontSize="lg">
                Deep blockchain expertise combined with battle-tested engineering practices.
                We build systems that work—and keep working.
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

      {/* CTA - Contact Form Section */}
      <Box id="cta" bg="#102a43" py={{ base: 20, md: 24 }}>
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 16 }} alignItems="start">
            {/* Left side - Text */}
            <Stack gap={6}>
              <Text
                color="#c9a227"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Get in touch
              </Text>
              <Heading size={{ base: "xl", md: "2xl" }} lineHeight="1.2" color="white" fontWeight="bold">
                Let&apos;s build something that lasts
              </Heading>
              <Text color="#9fb3c8" fontSize="lg" lineHeight="tall">
                Custom blockchain, backend infrastructure, or complex migration—tell us what you need.
                We&apos;ll give you an honest assessment and a clear path forward.
              </Text>
              <Stack gap={4} pt={2}>
                <HStack gap={3}>
                  <Box color="#c9a227">
                    <Check size={20} strokeWidth={2.5} />
                  </Box>
                  <Text color="#bcccdc">Free initial consultation</Text>
                </HStack>
                <HStack gap={3}>
                  <Box color="#c9a227">
                    <Check size={20} strokeWidth={2.5} />
                  </Box>
                  <Text color="#bcccdc">Fast response</Text>
                </HStack>
                <HStack gap={3}>
                  <Box color="#c9a227">
                    <Check size={20} strokeWidth={2.5} />
                  </Box>
                  <Text color="#bcccdc">No obligation estimate</Text>
                </HStack>
              </Stack>
              <Box pt={4}>
                <Text color="#627d98" fontSize="sm">
                  Or email directly:{" "}
                  <a href="mailto:stefan@vibast.ro" style={{ color: "#9fb3c8", textDecoration: "underline" }}>
                    stefan@vibast.ro
                  </a>
                </Text>
              </Box>
            </Stack>

            {/* Right side - Form */}
            <Box
              bg="#0d2137"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              borderWidth="1px"
              borderColor="#1f2937"
            >
              {formStatus === "success" ? (
                <Stack gap={6} align="center" py={8} textAlign="center">
                  <Box
                    w="16"
                    h="16"
                    bg="#243b53"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <CheckCircle size={32} color="#22c55e" />
                  </Box>
                  <Heading size="lg" color="white" fontWeight="semibold">
                    Message sent
                  </Heading>
                  <Text color="#9fb3c8">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </Text>
                  <Text
                    as="button"
                    color="#627d98"
                    fontSize="sm"
                    cursor="pointer"
                    _hover={{ color: "#9fb3c8", textDecoration: "underline" }}
                    onClick={() => setFormStatus("idle")}
                  >
                    Send another message
                  </Text>
                </Stack>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Stack gap={5}>
                    <Stack gap={2}>
                      <Text color="#9fb3c8" fontSize="sm" fontWeight="medium">
                        Name
                      </Text>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        bg="#102a43"
                        borderColor="#334e68"
                        color="white"
                        _placeholder={{ color: "#627d98" }}
                        _hover={{ borderColor: "#486581" }}
                        _focus={{ borderColor: "#c9a227", boxShadow: "0 0 0 1px #c9a227" }}
                        required
                      />
                    </Stack>
                    <Stack gap={2}>
                      <Text color="#9fb3c8" fontSize="sm" fontWeight="medium">
                        Email
                      </Text>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        bg="#102a43"
                        borderColor="#334e68"
                        color="white"
                        _placeholder={{ color: "#627d98" }}
                        _hover={{ borderColor: "#486581" }}
                        _focus={{ borderColor: "#c9a227", boxShadow: "0 0 0 1px #c9a227" }}
                        required
                      />
                    </Stack>
                    <Stack gap={2}>
                      <Text color="#9fb3c8" fontSize="sm" fontWeight="medium">
                        Message
                      </Text>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        bg="#102a43"
                        borderColor="#334e68"
                        color="white"
                        _placeholder={{ color: "#627d98" }}
                        _hover={{ borderColor: "#486581" }}
                        _focus={{ borderColor: "#c9a227", boxShadow: "0 0 0 1px #c9a227" }}
                        rows={5}
                        required
                      />
                    </Stack>

                    {formStatus === "error" && (
                      <HStack bg="#7f1d1d" p={3} borderRadius="md" gap={3}>
                        <AlertCircle size={18} color="#fca5a5" />
                        <Text color="#fca5a5" fontSize="sm">
                          {errorMessage}
                        </Text>
                      </HStack>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      bg="#c9a227"
                      color="white"
                      fontWeight="semibold"
                      _hover={{ bg: "#a68219" }}
                      _disabled={{ opacity: 0.7, cursor: "not-allowed" }}
                      disabled={formStatus === "loading"}
                    >
                      {formStatus === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <Send size={18} style={{ marginLeft: "8px" }} />
                        </>
                      )}
                    </Button>
                  </Stack>
                </form>
              )}
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="#0d2137" py={10} borderTopWidth="1px" borderColor="#1f2937">
        <Container maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack gap={8}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={4}
            >
              <Link href="/">
                <Box w="140px" h="8" position="relative">
                  <Image
                    src="/vibast-labs-logo-white.svg"
                    alt="VIBAST Labs"
                    fill
                    sizes="140px"
                    style={{ objectFit: "contain", objectPosition: "left" }}
                  />
                </Box>
              </Link>
              <Text color="#627d98" fontSize="sm">
                Blockchain & software engineering. Built to last.
              </Text>
            </Flex>

            {/* Company Details */}
            <Box borderTopWidth="1px" borderColor="#1f2937" pt={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 8 }}>
                <Stack gap={1}>
                  <Text color="#9fb3c8" fontSize="sm" fontWeight="semibold">
                    VIBAST SOLUTIONS SRL
                  </Text>
                  <Text color="#627d98" fontSize="xs">
                    B. P. Hasdeu 23, Campina, Prahova, Romania
                  </Text>
                </Stack>
                <SimpleGrid columns={{ base: 2, sm: 4 }} gap={{ base: 3, md: 4 }}>
                  <Stack gap={0}>
                    <Text color="#627d98" fontSize="xs">
                      VAT No.
                    </Text>
                    <Text color="#9fb3c8" fontSize="xs">
                      RO51459106
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text color="#627d98" fontSize="xs">
                      Reg. No.
                    </Text>
                    <Text color="#9fb3c8" fontSize="xs">
                      J2025012011008
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text color="#627d98" fontSize="xs">
                      EUID
                    </Text>
                    <Text color="#9fb3c8" fontSize="xs">
                      ROONRC.J2025012011008
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text color="#627d98" fontSize="xs">
                      CUI
                    </Text>
                    <Text color="#9fb3c8" fontSize="xs">
                      51317810
                    </Text>
                  </Stack>
                </SimpleGrid>
              </SimpleGrid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
