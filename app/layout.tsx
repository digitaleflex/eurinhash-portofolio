import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eurin Hash — Digital Architect",
  description:
    "Portfolio and digital hub of Eurin Hash — digital systems, intelligent platforms, architecture and technology.",
  metadataBase: new URL("https://hub.eurinhash.com"),
  openGraph: {
    title: "Eurin Hash — Digital Architect",
    description:
      "Digital systems, intelligent platforms, architecture and technology.",
    url: "https://hub.eurinhash.com",
    siteName: "Eurin Hash",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
