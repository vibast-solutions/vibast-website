"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Box, Button, Flex, Heading, Input, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { brand } from "@/brand";

const fieldProps = {
  bg: "white",
  borderColor: brand.inputBorder,
  color: "ink",
  fontSize: "md",
  _placeholder: { color: "brand.500" },
  _hover: { borderColor: "brand.400" },
  _focus: { borderColor: "accent.500", boxShadow: `0 0 0 1px ${brand.teal}` },
} as const;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <Text asChild fontSize="sm" fontWeight="semibold" color="ink">
      <label htmlFor={htmlFor}>{children}</label>
    </Text>
  );
}

/**
 * Contact form posting to /api/contact (Turnstile + honeypot, SES on the server).
 * Behaviour is unchanged from the previous page; only the styling moved to the
 * light surface.
 */
export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      setErrorMessage("Please complete the captcha");
      return;
    }
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken, website: honeypot }),
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
            Message sent
          </Heading>
          <Text color="inkSoft">
            Thanks for reaching out. We&apos;ll get back to you as soon as possible.
          </Text>
          <Button
            variant="plain"
            color="accent.600"
            fontSize="sm"
            fontWeight="semibold"
            _hover={{ textDecoration: "underline" }}
            onClick={() => setFormStatus("idle")}
          >
            Send another message
          </Button>
        </Stack>
      ) : (
        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
              <Stack gap={2}>
                <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                <Input
                  id="contact-name"
                  type="text"
                  h="48px"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  {...fieldProps}
                />
              </Stack>
              <Stack gap={2}>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  id="contact-email"
                  type="email"
                  h="48px"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                  {...fieldProps}
                />
              </Stack>
            </SimpleGrid>
            <Stack gap={2}>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project..."
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
                options={{ theme: "light" }}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
              />
            ) : (
              <Text color="#9F1D1D" fontSize="sm">
                Captcha is not configured; the form is temporarily unavailable.
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
                "Sending..."
              ) : (
                <>
                  Send message
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
