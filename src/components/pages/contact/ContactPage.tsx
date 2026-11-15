"use client";

import { Grid, Link, Stack, Text } from "@chakra-ui/react";
import type { Locale } from "@/i18n/locales";
import { contactContent } from "@/content/pages/contact";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/content/company";
import { ContactForm } from "@/components/site/ContactForm";
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

/** Contact page. The form is live already so the header CTA never lands on an empty page. */
export function ContactPage({ locale }: { locale: Locale }) {
  const content = contactContent[locale];
  return (
    <PageShell routeKey="contact" locale={locale} content={content}>
      <Grid templateColumns={{ base: "minmax(0,1fr)", lg: "minmax(0,5fr) minmax(0,7fr)" }} gap={{ base: 10, lg: 20 }}>
        <Stack gap={6}>
          <Direct prompt={content.emailPrompt} href={`mailto:${CONTACT_EMAIL}`} value={CONTACT_EMAIL} />
          {/* Rendered only once a phone number is set in src/content/company.ts. */}
          {CONTACT_PHONE && (
            <Direct prompt={content.phonePrompt} href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`} value={CONTACT_PHONE} />
          )}
        </Stack>
        <ContactForm locale={locale} strings={content.form} />
      </Grid>
    </PageShell>
  );
}
