import type { Metadata } from "next";
import { Award, Cloud, GitBranch, LifeBuoy, Server, Terminal } from "lucide-react";
import { AmbientMotion, FadeUp, PageTransition } from "../components/motion";
import { ButtonLink, SectionIntro, Shell } from "../components/ui";
import { createPageMetadata, jsonLd, trainingServiceSchema } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Internship Programs at Enlivo | AWS, Cloud & DevOps Training",
  description:
    "Explore Enlivo internship programs in Bangalore with AWS training, cloud and DevOps training, Linux fundamentals, mentorship, and real project exposure.",
  path: "/internships",
  keywords: [
    "internship program in Bangalore",
    "AWS training in Bangalore",
    "cloud and DevOps training",
    "AWS DevOps internship",
    "Linux internship",
    "Cloud internship Bangalore",
  ],
});

export default function InternshipsPage() {
  const heroMeta = ["1-3 Months", "Hybrid", "Bangalore Preferred", "Real Systems"];
  const heroMetrics = [
    ["6", "program pillars"],
    ["Real", "project exposure"],
    ["Guided", "reviews"],
  ];
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd({ ...trainingServiceSchema, "@id": "https://enlivo.com/internships#internship-training", url: "https://enlivo.com/internships" }) }}
        />
        <AmbientMotion />
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-[180px] md:overflow-visible md:pb-28 md:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F4C88B]/12 blur-3xl md:h-[34rem] md:w-[34rem] md:bg-blue-500/10" />
          <div className="pointer-events-none absolute right-[-8rem] top-36 -z-10 hidden h-96 w-96 rounded-full bg-blue-500/10 blur-3xl md:block" />

          <div className="ml-0 grid w-full max-w-[350px] items-center gap-14 sm:mx-auto sm:max-w-xl md:max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <FadeUp>
                <p className="inline-flex rounded-full border border-[#F4C88B]/24 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C88B] shadow-sm shadow-black/20">
                  Internships at Enlivo
                </p>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="mt-8 max-w-5xl break-words font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.028em] text-white md:text-balance md:text-7xl md:leading-[1.02]">
                  Premium training programs for cloud, DevOps, Linux, and real project exposure.
                </h1>
              </FadeUp>

              <FadeUp delay={0.16}>
                <p className="mt-8 max-w-3xl text-pretty text-base leading-8 text-slate-300/90 md:text-xl md:leading-9">
                  Enlivo internships are positioned for students who want disciplined mentorship, hands-on practice, certification support, and career-ready technical confidence.
                </p>
              </FadeUp>

              <FadeUp delay={0.22}>
                <div className="mt-8 grid grid-cols-1 gap-2.5 sm:flex sm:flex-wrap">
                  {heroMeta.map((item) => (
                    <span
                      key={item}
                      className="min-w-0 rounded-full border border-[#F4C88B]/18 bg-[#07111F]/70 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200 shadow-sm shadow-black/20 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={0.28} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Apply Now</ButtonLink>
                <ButtonLink href="#tracks" variant="secondary">View Tracks</ButtonLink>
              </FadeUp>

              <FadeUp delay={0.34}>
                <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:gap-3">
                  {heroMetrics.map(([value, label], index) => (
                    <div key={label} className={`min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] px-2 py-4 text-center shadow-sm shadow-black/20 sm:col-span-1 md:px-5 ${index === 2 ? "sm:col-span-1" : ""}`}>
                      <p className="truncate font-display text-lg font-semibold tracking-[-0.02em] text-white md:text-2xl">{value}</p>
                      <p className="mt-1 text-[10px] font-medium uppercase leading-5 tracking-[0.1em] text-slate-400 md:text-[11px] md:tracking-[0.14em]">{label}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.18} className="blue-panel min-w-0 rounded-[2rem] p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Training model</p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-3xl">Learn by building with guided industry context.</h2>
              <p className="mt-5 leading-8 text-slate-300/85">
                Programs combine fundamentals, tools, project workflows, review cycles, and career guidance.
              </p>
            </FadeUp>
          </div>
        </section>

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
