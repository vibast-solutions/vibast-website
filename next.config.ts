import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // self-contained server bundle for the production Docker image
  output: "standalone",
  // Docs index → first (and currently only) tool. Temporary, as before: when
  // more tools exist, /docs can become a landing page.
  async redirects() {
    return [
      { source: "/docs", destination: "/docs/mailbox", permanent: false },
      { source: "/ro/docs", destination: "/ro/docs/mailbox", permanent: false },
    ];
  },
  experimental: {
    // Two root layouts (app/(en) and app/(ro)) leave no single layout for the
    // app-wide 404, so it lives in app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
