import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "Eurin Hash — Architecte digital", template: "%s — Eurin Hash" },
  description: "Systèmes numériques, produits intelligents et écosystèmes technologiques.",
  metadataBase: new URL("https://hub.eurinhash.com"),
  openGraph: { title: "Eurin Hash — Architecte digital", description: "Systèmes numériques, produits intelligents et écosystèmes technologiques.", url: "https://hub.eurinhash.com", siteName: "Eurin Hash", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><SiteShell>{children}</SiteShell></body></html>;
}
