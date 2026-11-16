"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Box, Button, Flex, Heading, Input, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { brand } from "@/brand";
import type { Locale } from "@/i18n/locales";
import { STARTING_POINTS, type ContactFormStrings, type StartingPoint } from "@/content/pages/contact";

const fieldProps = {
  bg: "white",
  borderColor: brand.inputBorder,
  color: "ink",
  fontSize: "md",
  _placeholder: { color: "brand.500" },
  _hover: { borderColor: "brand.400" },
  _focus: { borderColor: "accent.500", boxShadow: `0 0 0 1px ${brand.teal}` },
} as const;

/** "Where are you starting from?": radio pills that wrap on narrow screens. */
function StartingPointPicker({
  legend,
  labels,
  value,
  onChange,
}: {
  legend: string;
  labels: Record<StartingPoint, string>;
  value: StartingPoint | "";
  onChange: (v: StartingPoint) => void;
}) {
  return (
    <Box as="fieldset" border={0} p={0} m={0} minW={0}>
      <Text as="legend" fontSize="sm" fontWeight="semibold" color="ink" mb={2} p={0}>
        {legend}
      </Text>
      <Flex wrap="wrap" gap={2}>
        {STARTING_POINTS.map((key) => {
          const checked = value === key;
          return (
            <Box
              as="label"
              key={key}
              position="relative"
              display="inline-flex"
              alignItems="center"
              h="40px"
              px={4}
              borderRadius="full"
              borderWidth="1px"
              borderColor={checked ? "accent.500" : brand.inputBorder}
              bg={checked ? "accent.50" : "white"}
              color={checked ? "accent.700" : "ink"}
              fontSize="sm"
              fontWeight={checked ? "semibold" : "medium"}
              cursor="pointer"
              _hover={{ borderColor: checked ? "accent.500" : "brand.400" }}
              _focusWithin={{ boxShadow: `0 0 0 2px ${brand.teal}` }}
            >
              <input
                type="radio"
                name="startingPoint"
                value={key}
                checked={checked}
                onChange={() => onChange(key)}
                style={{ position: "absolute", opacity: 0, width: 1, height: 1, margin: 0 }}
              />
              {labels[key]}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <Text asChild fontSize="sm" fontWeight="semibold" color="ink">
      <label htmlFor={htmlFor}>{children}</label>
    </Text>
  );
}

/**
 * Contact form posting to /api/contact (Turnstile + honeypot, SES on the server).
 * All visible strings come from the contact page content (`strings`). Server
 * error messages are English, so other languages show their own generic one.
 */
export function ContactForm({ locale, strings: t }: { locale: Locale; strings: ContactFormStrings }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [startingPoint, setStartingPoint] = useState<StartingPoint | "">("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      setFormStatus("error");
      setErrorMessage(t.captchaRequired);
      return;
    }
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, startingPoint, turnstileToken, website: honeypot }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error((locale === "en" && data.error) || t.sendFailed);
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setStartingPoint("");
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error && error.message ? error.message : t.sendFailed);
    } finally {
      // Turnstile tokens are single-use: get a fresh one for the next attempt.
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    }
  };

  return (
    <Box
      // On phones the form sits flush on the section so the inner width stays
      // ≥300px (the fixed-width Turnstile widget) down to a 340px viewport.
      bg={{ base: "transparent", sm: "paper" }}
      borderWidth={{ base: 0, sm: "1px" }}
      borderColor="line"
      borderRadius="20px"
      p={{ base: 0, sm: 8, md: 10 }}
    >
      {formStatus === "success" ? (
        <Stack gap={5} align="center" py={8} textAlign="center">
          <Flex w="16" h="16" bg="accent.50" borderRadius="full" align="center" justify="center">
            <CheckCircle size={32} color={brand.tealText} aria-hidden="true" />
          </Flex>
          <Heading as="h3" fontSize="2xl" fontWeight="bold" color="ink">
            {t.successTitle}
          </Heading>
          <Text color="inkSoft">
            {t.successBody}
          </Text>
          <Button
            variant="plain"
            color="accent.600"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{ textDecoration: "underline" }}
            onClick={() => setFormStatus("idle")}
          >
            {t.sendAnother}
          </Button>
        </Stack>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
              <Stack gap={2}>
                <FieldLabel htmlFor="contact-name">{t.nameLabel}</FieldLabel>
                <Input
                  id="contact-name"
                  type="text"
                  h="48px"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  required
                  {...fieldProps}
                />
              </Stack>
              <Stack gap={2}>
                <FieldLabel htmlFor="contact-email">{t.emailLabel}</FieldLabel>
                <Input
                  id="contact-email"
                  type="email"
                  h="48px"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.emailPlaceholder}
                  required
                  {...fieldProps}
                />
              </Stack>
            </SimpleGrid>
            <StartingPointPicker
              legend={t.startingPointLabel}
              labels={t.startingPoints}
              value={startingPoint}
              onChange={setStartingPoint}
            />
            <Stack gap={2}>
              <FieldLabel htmlFor="contact-message">{t.messageLabel}</FieldLabel>
              <Textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.messagePlaceholder}
                rows={6}
                required
                {...fieldProps}
              />
            </Stack>

            {/* Honeypot: hidden from humans, bots tend to fill it */}
            <Box
              position="absolute"
              left="-10000px"
              top="auto"
              width="1px"
              height="1px"
              overflow="hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </Box>

            {turnstileSiteKey ? (
              <Turnstile
                ref={turnstileRef}
                siteKey={turnstileSiteKey}
                options={{ theme: "light", language: locale }}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
              />
            ) : (
              <Text color="#9F1D1D" fontSize="sm">
                {t.captchaMissing}
              </Text>
            )}

            {formStatus === "error" && (
              <Flex
                role="alert"
                bg="#FDF0EF"
                borderWidth="1px"
                borderColor="#F3C9C6"
                p={3}
                borderRadius="md"
                gap={3}
                align="flex-start"
              >
                <Box flexShrink={0} mt="1px">
                  <AlertCircle size={18} color="#9F1D1D" aria-hidden="true" />
                </Box>
                <Text color="#9F1D1D" fontSize="sm">
                  {errorMessage}
                </Text>
              </Flex>
            )}

            <Button
              type="submit"
              h="52px"
              w="full"
              bg="accent.500"
              color="white"
              fontWeight="semibold"
              fontSize="md"
              _hover={{ bg: "accent.600" }}
              _disabled={{ opacity: 0.6, cursor: "not-allowed" }}
              disabled={formStatus === "loading" || !turnstileToken}
            >
              {formStatus === "loading" ? (
                t.sending
              ) : (
                <>
                  {t.submit}
                  <Send size={18} aria-hidden="true" />
                </>
              )}
            </Button>
          </Stack>
        </form>
      )}
    </Box>
  );
}
