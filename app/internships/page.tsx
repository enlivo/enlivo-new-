import type { Metadata } from "next";
import { Award, Cloud, GitBranch, LifeBuoy, Server, Terminal } from "lucide-react";
import { AmbientMotion, FadeUp, PageTransition } from "../components/motion";
import { ButtonLink, HeroBlock, SectionIntro, Shell } from "../components/ui";

export const metadata: Metadata = {
  title: { absolute: "Internships at Enlivo | Build Real Digital Systems" },
  description:
    "Premium AWS, DevOps, Linux, and Cloud internship programs in Bangalore with real project exposure, mentorship, certification, and career guidance.",
  keywords: [
    "internship programs Bangalore",
    "AWS DevOps internship",
    "Linux internship",
    "Cloud internship Bangalore",
  ],
  openGraph: {
    title: "Internships at Enlivo | Build Real Digital Systems",
    description:
      "Premium AWS, DevOps, Linux, and Cloud internship programs in Bangalore with real project exposure, mentorship, certification, and career guidance.",
    url: "/internships",
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
    title: "Internships at Enlivo | Build Real Digital Systems",
    description:
      "Premium AWS, DevOps, Linux, and Cloud internship programs in Bangalore with real project exposure, mentorship, certification, and career guidance.",
    images: ["/references/hero-main.png"],
  },
};

export default function InternshipsPage() {
  const tracks = [
    ["AWS and DevOps", Cloud],
    ["Linux and Cloud", Terminal],
    ["Real project exposure", Server],
    ["Mentorship", LifeBuoy],
    ["Certification", Award],
    ["Career guidance", GitBranch],
  ];

  return (
    <PageTransition>
      <Shell>
        <AmbientMotion />
        <HeroBlock
          eyebrow="Industry-ready internships"
          title="Premium training programs for cloud, DevOps, Linux, and real project exposure."
          text="Enlivo internships are positioned for students who want disciplined mentorship, hands-on practice, certification support, and career-ready technical confidence."
          primary="Apply Now"
          primaryHref="/contact"
          secondary="View Tracks"
          secondaryHref="#tracks"
        >
          <FadeUp className="blue-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Training model</p>
            <h2 className="mt-4 text-3xl font-semibold">Learn by building with guided industry context.</h2>
            <p className="mt-4 leading-8 text-slate-400">Programs combine fundamentals, tools, project workflows, review cycles, and career guidance.</p>
          </FadeUp>
        </HeroBlock>

        <section id="tracks" className="relative px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Program pillars"
              title="Built for students who want practical exposure, not only classroom theory."
              text="AWS, DevOps, Linux, cloud, real-time projects, certification, mentorship, and career guidance are organized into a professional training experience."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tracks.map(([label, Icon], index) => (
                <FadeUp key={label as string} delay={index * 0.06} className="premium-card rounded-[2rem] p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-blue-300/20 bg-blue-500/12 text-blue-200 shadow-lg shadow-blue-950/30">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold">{label as string}</h2>
                  <p className="mt-3 leading-7 text-slate-400">Structured learning with practical assignments, guided review, and professional expectations.</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-5 py-24">
          <FadeUp className="blue-panel mx-auto max-w-5xl rounded-[2rem] p-8 text-center md:p-14">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Apply for an internship program built around real industry readiness.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Choose the internship inquiry option on the contact page and share your preferred track.</p>
            <div className="mt-8"><ButtonLink href="/contact">Apply Now</ButtonLink></div>
          </FadeUp>
        </section>
      </Shell>
    </PageTransition>
  );
}
