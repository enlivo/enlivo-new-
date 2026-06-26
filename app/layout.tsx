import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";
import {
  absoluteOgImage,
  jsonLd,
  legalName,
  localBusinessSchema,
  ogImage,
  organizationSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: legalName,
    template: `%s | ${siteName}`,
  },
  description:
    "Enlivo Global Tech Solutions Private Limited is a digital engineering company for websites, apps, UI UX design, AI automation, and digital transformation.",
  keywords: [
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions Private Limited",
    "website development company",
    "app development company",
    "UI UX design company",
    "business website development India",
    "AI automation solutions",
    "AWS training",
    "internship program",
    "cloud and DevOps training",
    "digital transformation company",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: legalName,
    description:
      "Enlivo Global Tech Solutions Private Limited is a digital engineering company for websites, apps, UI UX design, AI automation, and digital transformation.",
    type: "website",
    locale: "en_IN",
    siteName,
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1216,
        height: 880,
        alt: "Enlivo digital systems interface preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: legalName,
    description:
      "Enlivo Global Tech Solutions Private Limited is a digital engineering company for websites, apps, UI UX design, AI automation, and digital transformation.",
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
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=cabinet-grotesk:400,500,600,700,800&display=swap" rel="stylesheet" />
        <meta property="og:image:secure_url" content={absoluteOgImage} />
      </head>
      <body className="min-h-full bg-[#050D18] text-[#F8F6F1]">
        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@graph": [organizationSchema, localBusinessSchema, websiteSchema],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
