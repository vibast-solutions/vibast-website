import { Manrope } from "next/font/google";

// Brand font for the logo wordmark and headings; body text stays Inter (globals.css).
export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
