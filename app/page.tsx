import type { Metadata } from "next";
import { ImmersiveJourney } from "./components/immersive-journey";
import { AmbientMotion, PageTransition } from "./components/motion";
import { Shell } from "./components/ui";
import { createPageMetadata } from "./lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enlivo Global Tech Solutions | Website Development Company",
  description:
    "Enlivo Global Tech Solutions builds websites, apps, UI UX systems, AI automation, and digital transformation workflows for businesses across India.",
  path: "/",
  keywords: [
    "website development company",
    "app development company",
    "UI UX design company",
    "business website development India",
    "AI automation services",
    "digital transformation company",
  ],
});

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
