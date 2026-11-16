import { NextResponse } from "next/server";

/**
 * The visitor's country as Cloudflare sees it (the CF-IPCountry header Cloudflare
 * adds to every proxied request; nginx passes it through). Used only by the
 * language banner. Returns null when the header is missing (local runs, or a
 * request that didn't come through Cloudflare). Never cached: the answer is
 * per visitor.
 */
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const raw = request.headers.get("cf-ipcountry")?.trim().toUpperCase() ?? "";
  // Cloudflare uses XX for unknown and T1 for Tor; neither is a real country.
  const country = /^[A-Z]{2}$/.test(raw) && raw !== "XX" && raw !== "T1" ? raw : null;
  return NextResponse.json({ country }, { headers: { "Cache-Control": "private, no-store" } });
}
