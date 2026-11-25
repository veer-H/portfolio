import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: "./fonts/dm-sans.woff2",
  variable: "--font-body",
  weight: "100 1000",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

const headingFont = localFont({
  src: "./fonts/space-grotesk.woff2",
  variable: "--font-heading",
  weight: "300 700",
  display: "swap",
  fallback: ["Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veer-h.github.io/portfolio/"),
  title: "Virbhadra Haibatpure — Software Engineer",
  description:
    "Portfolio of Virbhadra Haibatpure, a software engineer building secure Java and Node.js backends, HL7 FHIR integrations and full-stack healthcare software.",
  openGraph: {
    title: "Virbhadra Haibatpure — Software Engineer",
    description: "Secure APIs. Connected care.",
  },
  twitter: {
    card: "summary",
    title: "Virbhadra Haibatpure — Software Engineer",
    description: "Secure APIs. Connected care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
