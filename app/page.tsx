import type { Metadata } from "next";
import { ImmersiveJourney } from "./components/immersive-journey";
import { AmbientMotion, PageTransition } from "./components/motion";
import { Shell } from "./components/ui";
import { createPageMetadata } from "./lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enlivo Global Tech Solutions | Website Development Company in Bangalore",
  description:
    "Enlivo Global Tech Solutions builds websites, apps, UI UX systems, AI automation, and digital transformation workflows for businesses in Bangalore.",
  path: "/",
  keywords: [
    "website development company in Bangalore",
    "app development company in Bangalore",
    "UI UX design company in Bangalore",
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
