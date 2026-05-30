import type { Metadata } from "next";
import { ImmersiveJourney } from "./components/immersive-journey";
import { AmbientMotion, PageTransition } from "./components/motion";
import { Shell } from "./components/ui";

export const metadata: Metadata = {
  title: { absolute: "Enlivo Global Tech Solutions | Premium Web Development Company Bangalore" },
  description:
    "Premium web development company in Bangalore delivering business websites, UI/UX design, mobile apps, AI automation, and digital transformation for growth.",
  keywords: [
    "web development company Bangalore",
    "UI/UX design Bangalore",
    "business website development India",
    "AI automation services",
    "digital transformation company",
  ],
  openGraph: {
    title: "Enlivo Global Tech Solutions | Premium Web Development Company Bangalore",
    description:
      "Premium web development company in Bangalore delivering business websites, UI/UX design, mobile apps, AI automation, and digital transformation for growth.",
    url: "/",
    siteName: "Enlivo Global Tech Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/references/hero-main.png",
        width: 1216,
        height: 880,
        alt: "Enlivo premium digital systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlivo Global Tech Solutions | Premium Web Development Company Bangalore",
    description:
      "Premium web development company in Bangalore delivering business websites, UI/UX design, mobile apps, AI automation, and digital transformation for growth.",
    images: ["/references/hero-main.png"],
  },
};

export default function Home() {
  return (
    <PageTransition>
      <Shell>
        <AmbientMotion />
        <ImmersiveJourney />
      </Shell>
    </PageTransition>
  );
}
