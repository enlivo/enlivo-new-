import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

const siteUrl = "https://enlivo.com";
const ogImage = "/references/hero-main.png";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enlivo Global Tech Solutions Private Limited",
  legalName: "Enlivo Global Tech Solutions Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
  email: "contact@enlivotechnologies.com",
  telephone: ["+91 89713 63921", "+91 77278 67878"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@enlivotechnologies.com",
      telephone: "+91 89713 63921",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@enlivotechnologies.com",
      telephone: "+91 77278 67878",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enlivo Global Tech Solutions Private Limited",
    template: "%s | Enlivo Global Tech Solutions",
  },
  description:
    "Bangalore-based digital engineering company for premium websites, UI/UX design, business website development, AI automation, and digital transformation.",
  keywords: [
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions Private Limited",
    "website development Bangalore",
    "UI/UX design Bangalore",
    "business website development India",
    "mobile app development Bangalore",
    "AI automation solutions",
    "AI automation services",
    "pharma website development",
    "digital transformation company",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Enlivo Global Tech Solutions Private Limited",
    description:
      "Bangalore-based digital engineering company for premium websites, UI/UX design, business website development, AI automation, and digital transformation.",
    type: "website",
    locale: "en_IN",
    siteName: "Enlivo Global Tech Solutions",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1216,
        height: 880,
        alt: "Enlivo premium digital systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlivo Global Tech Solutions Private Limited",
    description:
      "Bangalore-based digital engineering company for premium websites, UI/UX design, business website development, AI automation, and digital transformation.",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full bg-[#050D18] text-[#F8F6F1]">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
