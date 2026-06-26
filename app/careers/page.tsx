import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, Clock3, Code2, Palette, ServerCog, Sparkles, Workflow } from "lucide-react";
import { ApplicationForm } from "./application-form";
import { FadeUp, PageTransition } from "../components/motion";
import { ButtonLink, SectionIntro, Shell } from "../components/ui";
import { createPageMetadata, jsonLd, trainingServiceSchema } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers & Internships at Enlivo | Internship Programs",
  description:
    "Apply for Enlivo internship programs across web development, UI UX, AI automation, AWS, cloud and DevOps training, and digital business systems.",
  path: "/careers",
  keywords: [
    "Enlivo careers",
    "internships at Enlivo",
    "internship program",
    "web development internship",
    "UI UX design internship",
    "AWS training",
    "cloud and DevOps training",
    "AI automation internship",
  ],
});

const internshipTracks = [
  {
    title: "Web Development Intern",
    description: "Build responsive websites, landing pages, and front-end systems with disciplined implementation standards.",
    skills: "HTML, CSS, JavaScript, React, Next.js basics",
    icon: Code2,
  },
  {
    title: "UI/UX Design Intern",
    description: "Shape clean interface flows, wireframes, visual systems, and premium digital experience details.",
    skills: "Figma, layout, typography, user flows, responsive design",
    icon: Palette,
  },
  {
    title: "AI Automation Intern",
    description: "Support practical automation workflows for leads, support, operations, and business response systems.",
    skills: "Prompting, workflow tools, APIs, logic mapping, documentation",
    icon: Workflow,
  },
  {
    title: "Cloud & DevOps Intern",
    description: "Learn deployment foundations, cloud environments, Linux workflows, and operational delivery habits.",
    skills: "Linux, Git, cloud basics, CI/CD concepts, monitoring basics",
    icon: ServerCog,
  },
  {
    title: "Digital Business Intern",
    description: "Work on digital presence planning, market research, lead systems, client context, and business documentation.",
    skills: "Research, communication, business writing, CRM basics, digital strategy",
    icon: BriefcaseBusiness,
  },
];

export default function CareersPage() {
  return (
    <PageTransition>
      <Shell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(trainingServiceSchema) }}
        />
        <section className="relative overflow-hidden px-5 pb-14 pt-[180px] md:pb-[4.5rem] md:pt-[4.5rem]">
          <div className="pointer-events-none absolute left-[-20rem] top-0 h-[44rem] w-[58rem] rounded-full bg-[#E6A86A]/10 blur-[150px]" />
          <div className="pointer-events-none absolute right-[-20rem] bottom-[-16rem] h-[44rem] w-[58rem] rounded-full bg-[#F4C88B]/7 blur-[150px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <FadeUp>
                <p className="inline-flex rounded-full border border-[#F4C88B]/18 bg-white/[0.045] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C88B]/82 shadow-sm shadow-black/20">
                  Internships at Enlivo
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h1 className="mt-7 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.028em] text-white md:text-7xl">
                  Build real digital systems with Enlivo.
                </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-400 md:text-xl">
                  Apply for internship opportunities in web development, UI/UX, AI automation, cloud, DevOps, and digital business systems.
                </p>
              </FadeUp>

              <FadeUp delay={0.22} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#F4C88B]/62">
                <span>1-3 months</span>
                <span className="text-[#D4AF6E]/42">•</span>
                <span>Hybrid</span>
                <span className="text-[#D4AF6E]/42">•</span>
                <span>Hybrid</span>
                <span className="text-[#D4AF6E]/42">•</span>
                <span>Real systems</span>
              </FadeUp>

              <FadeUp delay={0.28} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#application">Apply for Internship</ButtonLink>
                <ButtonLink href="#openings" variant="secondary">View Openings</ButtonLink>
              </FadeUp>
              <FadeUp delay={0.34} className="mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]/85 sm:justify-start">
                <span>50+ Student Applications</span>
                <span className="text-[#D4AF37]/55">•</span>
                <span>Real Client Projects</span>
                <span className="text-[#D4AF37]/55">•</span>
                <span>Hybrid Learning</span>
              </FadeUp>
            </div>

            <FadeUp delay={0.18} className="relative lg:pl-8">
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-[#F4C88B]/12 blur-[90px]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#F4C88B]/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(5,13,24,0.55))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/38 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F4C88B]/68">Learning model</p>
                <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.024em] text-white md:text-4xl">
                  Student-friendly experience with professional delivery context.
                </h2>
                <div className="mt-7 grid gap-4">
                  {[
                    "Work on practical digital systems, not generic exercises.",
                    "Understand how premium websites, automation flows, and business tools are shaped.",
                    "Build portfolio-ready confidence through guided execution and review.",
                  ].map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <Sparkles className="mt-1 shrink-0 text-[#F4C88B]" size={16} />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section id="openings" className="relative px-5 py-15 md:py-[3.8rem]">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Internship openings"
              title="Choose a track built around useful skills and real project exposure."
              text="Each internship follows a 1-3 month structure with hybrid participation."
            />

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {internshipTracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <FadeUp
                    key={track.title}
                    delay={index * 0.05}
                    className="group relative grid min-h-[31rem] grid-rows-[auto_auto_1fr_auto_auto] overflow-hidden rounded-[1.75rem] border border-[#F4C88B]/12 bg-white/[0.035] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)] transition duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[rgba(212,175,55,0.25)] hover:bg-white/[0.052] hover:shadow-[0_34px_105px_rgba(0,0,0,0.36),0_0_68px_rgba(212,175,55,0.16)]"
                  >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/22 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="career-icon-pulse grid h-12 w-12 place-items-center rounded-2xl border border-[#F4C88B]/18 bg-[#F4C88B]/10 text-[#F4C88B] transition duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[rgba(212,175,55,0.3)] group-hover:bg-[#F4C88B]/14 group-hover:shadow-[0_0_28px_rgba(212,175,55,0.22)]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] text-white">{track.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{track.description}</p>
                    <div className="mt-5 grid content-start gap-3 border-t border-white/8 pt-5 text-sm text-slate-300">
                      <p><span className="text-[#F4C88B]/78">Skills preferred:</span> {track.skills}</p>
                      <p className="flex items-center gap-2"><Clock3 size={15} className="text-[#F4C88B]/78" /> Duration: 1-3 months</p>
                      <p>Mode: Hybrid / Remote</p>
                    </div>
                    <a
                      href="#application"
                      className="mt-6 inline-flex w-fit items-center gap-2 self-end rounded-full border border-[#F4C88B]/16 bg-[#050D18]/40 px-5 py-3 text-sm font-semibold text-[#F8F6F1] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#F4C88B]/30 hover:bg-[#F4C88B]/10 hover:text-[#F4C88B]"
                    >
                      Apply
                      <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        <section id="application" className="relative px-5 py-15 md:py-[3.8rem]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <FadeUp className="lg:sticky lg:top-32">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F4C88B]">Application</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.024em] text-white md:text-5xl">
                Share your resume and preferred internship path.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                Enlivo reviews applications for fit, learning readiness, and track availability before contacting shortlisted candidates.
              </p>
              <div className="mt-7 grid gap-3 text-sm font-medium text-slate-300 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Live project exposure", "Guided implementation", "Portfolio review", "Internship certificate"].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#F4C88B]/18 bg-[#F4C88B]/8 text-[#F4C88B] shadow-[0_0_18px_rgba(244,200,139,0.08)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/80" />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <ApplicationForm />
            </FadeUp>
          </div>
        </section>

        <section className="relative px-5 py-18 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/24 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-[58%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[92px]" />
          <FadeUp className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F4C88B]/72">OPPORTUNITIES</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.024em] text-white md:text-6xl">
              Ready to learn by building real systems?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-400 md:text-lg">
              Limited internship slots are reviewed monthly for students ready to build practical delivery experience.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#application"
                className="group inline-flex min-h-[3.4rem] items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#F4C88B,#D4AF37)] px-8 py-4 text-[0.95rem] font-semibold text-[#07111F] shadow-[0_22px_70px_rgba(212,175,55,0.26),0_0_42px_rgba(244,200,139,0.16)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_28px_92px_rgba(212,175,55,0.34),0_0_64px_rgba(244,200,139,0.24)]"
              >
                Apply for Internship
                <ArrowRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]" />
              </a>
            </div>
          </FadeUp>
        </section>
      </Shell>
    </PageTransition>
  );
}
