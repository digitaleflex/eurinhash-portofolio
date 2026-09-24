import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Eurin Hash — Architecte digital", template: "%s — Eurin Hash" },
  description: "Systèmes numériques, produits intelligents et écosystèmes technologiques.",
  metadataBase: new URL("https://hub.eurinhash.com"),
  openGraph: {
    title: "Eurin Hash — Architecte digital",
    description: "Systèmes numériques, produits intelligents et écosystèmes technologiques.",
    url: "https://hub.eurinhash.com",
    siteName: "Eurin Hash",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
