import type { ReactNode } from "react";
import { Box, Container, Flex, Text, type BoxProps } from "@chakra-ui/react";
import { Check } from "lucide-react";
import { brand } from "@/brand";

/** Page-width container shared by the header, sections and footer. */
export function PageContainer({ children, ...rest }: { children: ReactNode } & BoxProps) {
  return (
    <Container maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} {...rest}>
      {children}
    </Container>
  );
}

/** Small uppercase label above a section heading. */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <Text
      fontSize="13px"
      fontWeight="semibold"
      letterSpacing="0.12em"
      textTransform="uppercase"
      color={onDark ? "accent.400" : "accent.600"}
    >
      {children}
    </Text>
  );
}

/** A check-marked line of text. */
export function CheckItem({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <Flex gap={3} align="flex-start" fontSize="md" lineHeight="1.5">
      <Box flexShrink={0} mt="3px" aria-hidden="true">
        <Check size={18} strokeWidth={2.5} color={onDark ? brand.onDark.teal : brand.teal} />
      </Box>
      <Text>{children}</Text>
    </Flex>
  );
}
