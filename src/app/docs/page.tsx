import { redirect } from "next/navigation";

// Docs index → first (and currently only) tool. When more tools are added,
// this can become a proper landing page listing them.
export default function DocsIndexRoPage() {
  redirect("/docs/mailbox");
}
