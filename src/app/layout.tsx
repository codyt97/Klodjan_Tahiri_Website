import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Klodjan Tahiri — Operations & Systems",
  description:
    "Operations & Systems leader focused on ERP/WMS workflows, process automation, clean data, and measurable performance.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Klodjan Tahiri — Operations & Systems",
    description:
      "I build scalable operational systems that eliminate inefficiency and drive measurable performance.",
    url: "https://example.com",
    siteName: "Klodjan Tahiri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
