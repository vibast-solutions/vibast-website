import type { MetadataRoute } from "next";
import { brand } from "@/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIBAST Labs",
    short_name: "VIBAST Labs",
    start_url: "/",
    display: "browser",
    theme_color: brand.ink,
    background_color: brand.paper,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
