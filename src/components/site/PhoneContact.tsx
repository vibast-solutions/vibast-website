"use client";

import { Link, Stack, Text } from "@chakra-ui/react";
import { MessageCircle } from "lucide-react";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF } from "@/content/company";

interface PhoneContactProps {
  prompt: string;
  hours: string;
  whatsappLabel: string;
}

/**
 * Phone number with its answering hours and a WhatsApp link, used next to the
 * contact form. Renders nothing while CONTACT_PHONE is empty.
 */
export function PhoneContact({ prompt, hours, whatsappLabel }: PhoneContactProps) {
  if (!CONTACT_PHONE) return null;
  return (
    <Stack gap={1}>
      <Text fontSize="sm" color="brand.500">
        {prompt}
      </Text>
      <Link
        href={CONTACT_PHONE_HREF}
        fontFamily="heading"
        fontSize={{ base: "19px", md: "20px" }}
        fontWeight="bold"
        color="accent.600"
        w="fit-content"
      >
        {CONTACT_PHONE}
      </Link>
      <Text fontSize="sm" color="inkSoft">
        {hours}
      </Text>
      <Link
        href={CONTACT_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        fontSize="sm"
        fontWeight="semibold"
        color="accent.600"
        w="fit-content"
        mt={1}
      >
        <MessageCircle size={16} aria-hidden />
        {whatsappLabel}
      </Link>
    </Stack>
  );
}
