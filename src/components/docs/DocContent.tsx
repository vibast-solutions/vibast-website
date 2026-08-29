import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  List,
  Table,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Info, AlertTriangle, Sparkles } from "lucide-react";
import type { Block, DocPage, Locale } from "@/content/docs";
import { TIERS, UNLIMITED, formatPrice, CONTACT_ANCHOR } from "@/content/docs";

const NOTE_STYLES = {
  info: { bg: "#f0f4f8", border: "#bcccdc", icon: Info, iconColor: "#486581" },
  warn: { bg: "#fef9e7", border: "#f5d67a", icon: AlertTriangle, iconColor: "#a68219" },
  accent: { bg: "#102a43", border: "#334e68", icon: Sparkles, iconColor: "#c9a227" },
} as const;

function localizedLimit(value: string, locale: Locale): string {
  if (value !== UNLIMITED) return value;
  return locale === "ro" ? "nelimitat" : "unlimited";
}

function TierTable({ locale }: { locale: Locale }) {
  const t = (ro: string, en: string) => (locale === "ro" ? ro : en);
  const rows: { key: string; label: string; get: (id: string) => string }[] = [
    { key: "storage", label: t("Spațiu", "Storage"), get: (id) => byId(id).storage },
    { key: "domains", label: t("Domenii", "Domains"), get: (id) => byId(id).domains },
    { key: "mailboxes", label: t("Căsuțe de email", "Mailboxes"), get: (id) => byId(id).mailboxes },
    { key: "forwarders", label: t("Redirecționări", "Forwarders"), get: (id) => byId(id).forwarders },
    { key: "pointers", label: t("Pointeri de domeniu", "Domain pointers"), get: (id) => byId(id).pointers },
  ];
  function byId(id: string) {
    return TIERS.find((x) => x.id === id)!;
  }
  const named = TIERS.filter((x) => !x.custom);
  const custom = TIERS.find((x) => x.custom)!;

  return (
    <Stack gap={5}>
      <Box overflowX="auto">
        <Table.Root size="sm" variant="outline" borderColor="#e5e7eb">
          <Table.Header>
            <Table.Row bg="#f0f4f8">
              <Table.ColumnHeader color="#334e68" fontWeight="semibold">
                {t("Caracteristică", "Feature")}
              </Table.ColumnHeader>
              {named.map((tier) => (
                <Table.ColumnHeader
                  key={tier.id}
                  color={tier.featured ? "#102a43" : "#334e68"}
                  fontWeight="bold"
                  textAlign="center"
                >
                  <Stack gap={0} align="center">
                    <Text textTransform="capitalize">{tier.id}</Text>
                    <Text fontSize="xs" color="#627d98" fontWeight="medium">
                      {formatPrice(tier, locale)}
                    </Text>
                  </Stack>
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((row) => (
              <Table.Row key={row.key}>
                <Table.Cell color="#4b5563" fontWeight="medium">
                  {row.label}
                </Table.Cell>
                {named.map((tier) => (
                  <Table.Cell key={tier.id} textAlign="center" color="#1f2937">
                    {localizedLimit(row.get(tier.id), locale)}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
            <Table.Row bg="#fafbfc">
              <Table.Cell color="#4b5563" fontWeight="medium">
                {t("Facturare", "Billing")}
              </Table.Cell>
              {named.map((tier) => (
                <Table.Cell key={tier.id} textAlign="center" color="#1f2937">
                  {t("anual", "yearly")}
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>

      {/* Custom tier — presented as a call to action, no fixed limits. */}
      <Box borderWidth="1px" borderColor="#334e68" bg="#102a43" borderRadius="lg" p={5}>
        <Stack gap={2}>
          <HStack gap={2}>
            <Sparkles size={18} color="#c9a227" />
            <Heading size="sm" color="white" textTransform="capitalize">
              {custom.id} — {t("ofertă personalizată", "tailored offer")}
            </Heading>
          </HStack>
          <Text color="#9fb3c8" fontSize="sm">
            {t(
              "Fără limite fixe. Spune-ne de ce ai nevoie — spațiu, domenii, căsuțe, redirecționări, pointeri — și îți facem o ofertă pe măsură.",
              "No fixed limits. Tell us what you need — storage, domains, mailboxes, forwarders, pointers — and we'll build you a tailored offer.",
            )}
          </Text>
          <NextLink href={CONTACT_ANCHOR}>
            <Text
              color="#c9a227"
              fontWeight="semibold"
              fontSize="sm"
              _hover={{ color: "#e8c547" }}
            >
              {t("Cere o ofertă →", "Request an offer →")}
            </Text>
          </NextLink>
        </Stack>
      </Box>
    </Stack>
  );
}

function NoteBlock({ block }: { block: Extract<Block, { k: "note" }> }) {
  const style = NOTE_STYLES[block.tone ?? "info"];
  const Icon = style.icon;
  const isAccent = (block.tone ?? "info") === "accent";
  return (
    <Box bg={style.bg} borderWidth="1px" borderColor={style.border} borderRadius="lg" p={4}>
      <HStack gap={3} align="start">
        <Box color={style.iconColor} mt="2px" flexShrink={0}>
          <Icon size={18} />
        </Box>
        <Stack gap={1}>
          {block.title && (
            <Text fontWeight="semibold" color={isAccent ? "white" : "#1f2937"} fontSize="sm">
              {block.title}
            </Text>
          )}
          <Text color={isAccent ? "#9fb3c8" : "#4b5563"} fontSize="sm" lineHeight="tall">
            {block.text}
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.k) {
    case "p":
      return (
        <Text color="#4b5563" fontSize="md" lineHeight="tall">
          {block.text}
        </Text>
      );
    case "h":
      return (
        <Heading as="h3" size="md" color="#111827" fontWeight="semibold" pt={2}>
          {block.text}
        </Heading>
      );
    case "ul":
      return (
        <List.Root gap={2} pl={1}>
          {block.items.map((item, i) => (
            <List.Item key={i} color="#4b5563" lineHeight="tall" ml={4}>
              {item}
            </List.Item>
          ))}
        </List.Root>
      );
    case "steps":
      return (
        <List.Root as="ol" gap={2} pl={1}>
          {block.items.map((item, i) => (
            <List.Item key={i} color="#4b5563" lineHeight="tall" ml={5}>
              {item}
            </List.Item>
          ))}
        </List.Root>
      );
    case "note":
      return <NoteBlock block={block} />;
    case "define":
      return (
        <Box
          borderLeftWidth="3px"
          borderColor="#c9a227"
          bg="#fafbfc"
          borderRadius="md"
          px={4}
          py={3}
        >
          <Stack gap={1}>
            <Text fontWeight="semibold" color="#102a43">
              {block.term}
            </Text>
            <Text color="#4b5563" fontSize="sm" lineHeight="tall">
              {block.text}
            </Text>
            {block.example && (
              <Text color="#627d98" fontSize="sm" fontStyle="italic">
                {locale === "ro" ? "Exemplu: " : "Example: "}
                {block.example}
              </Text>
            )}
          </Stack>
        </Box>
      );
    case "tiers":
      return <TierTable locale={locale} />;
    default:
      return null;
  }
}

export function DocContent({ page, locale }: { page: DocPage; locale: Locale }) {
  return (
    <Stack gap={12} maxW="3xl">
      <Stack gap={3}>
        <Heading as="h1" size="2xl" color="#111827" fontWeight="bold">
          {page.navLabel}
        </Heading>
        <Text color="#4b5563" fontSize="lg" lineHeight="tall">
          {page.intro}
        </Text>
      </Stack>

      {page.sections.map((section) => (
        <Stack
          as="section"
          key={section.id}
          id={section.id}
          gap={4}
          scrollMarginTop="80px"
        >
          <Heading as="h2" size="xl" color="#102a43" fontWeight="bold">
            {section.title}
          </Heading>
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} locale={locale} />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
