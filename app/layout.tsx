import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "Eurin Hash — Digital Architect", template: "%s — Eurin Hash" },
  description: "Digital systems, intelligent products and technology ecosystems.",
  metadataBase: new URL("https://hub.eurinhash.com"),
  openGraph: { title: "Eurin Hash — Digital Architect", description: "Digital systems, intelligent products and technology ecosystems.", url: "https://hub.eurinhash.com", siteName: "Eurin Hash", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}