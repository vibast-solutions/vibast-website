"use client";

import { Box, Grid, Heading, Link, Stack, Text } from "@chakra-ui/react";
import type { Locale } from "@/i18n/locales";
import { contactContent } from "@/content/pages/contact";
import { CONTACT_EMAIL } from "@/content/company";
import { ContactForm } from "@/components/site/ContactForm";
import { PhoneContact } from "@/components/site/PhoneContact";
import { PageShell } from "../PageShell";

function Direct({ prompt, href, value }: { prompt: string; href: string; value: string }) {
  return (
    <Stack gap={1}>
      <Text fontSize="sm" color="brand.500">
        {prompt}
      </Text>
      <Link href={href} fontFamily="heading" fontSize={{ base: "19px", md: "20px" }} fontWeight="bold" color="accent.600" w="fit-content">
        {value}
      </Link>
    </Stack>
  );
}

/** Contact page: what happens next, direct contacts and the form. No CTA band (it would point here). */
export function ContactPage({ locale }: { locale: Locale }) {
  const content = contactContent[locale];
  return (
    <PageShell routeKey="contact" locale={locale} content={content}>
      <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }} gap={{ base: 10, lg: 20 }}>
        <Stack gap={8}>
          <Stack gap={4}>
            <Heading as="h2" fontSize={{ base: "21px", md: "24px" }} fontWeight="bold" color="ink">
              {content.nextSteps.title}
            </Heading>
            <Box as="ol" listStyleType="none">
              {content.nextSteps.items.map((item, i) => (
                <Grid
                  as="li"
                  key={item}
                  templateColumns="40px minmax(0,1fr)"
                  gap={2}
                  py={4}
                  borderTopWidth="1px"
                  borderColor="line"
                >
                  <Text fontFamily="heading" fontWeight="bold" fontSize="15px" color="accent.600">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text color="inkSoft" lineHeight="1.6">
                    {item}
                  </Text>
                </Grid>
              ))}
            </Box>
          </Stack>
          <Stack gap={6} borderTopWidth="1px" borderColor="line" pt={6}>
            <Direct prompt={content.emailPrompt} href={`mailto:${CONTACT_EMAIL}`} value={CONTACT_EMAIL} />
            <PhoneContact prompt={content.phonePrompt} hours={content.phoneHours} whatsappLabel={content.whatsappLabel} />
          </Stack>
        </Stack>
        <ContactForm locale={locale} strings={content.form} />
      </Grid>
    </PageShell>
  );
}
