import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { AmbientMotion, FadeUp, MagneticLink, PageTransition } from "../components/motion";
import { Shell } from "../components/ui";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Enlivo | Digital Engineering Company in Bangalore",
  description:
    "Learn about Enlivo Global Tech Solutions Private Limited, a Bangalore digital engineering company for websites, apps, UI UX design, automation, and business systems.",
  path: "/about",
  keywords: [
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions Private Limited",
    "website development company in Bangalore",
    "app development company in Bangalore",
    "UI UX design company in Bangalore",
    "digital transformation company",
  ],
});

export default function AboutPage() {
  const principles = [
    {
      title: "Who We Are",
      text: "We are a Bangalore-based technology company focused on building digital systems that combine strategy, interface design, engineering, and automation.",
    },
    {
      title: "Vision",
      text: "To help ambitious businesses create digital experiences that are trusted, remembered, and built for growth.",
    },
    {
      title: "Mission",
      text: "To deliver premium technology execution across websites, applications, AI automation, and digital business systems with clarity, craft, and measurable business impact.",
    },
  ];
  const flow = ["Strategy", "Design Intelligence", "Engineering", "Automation", "Scale"];
  const flowPositions = [
    { left: "6%", top: "76%" },
    { left: "24%", top: "58%" },
    { left: "44%", top: "42%" },
    { left: "64%", top: "28%" },
    { left: "82%", top: "15%" },
  ];

  return (
    <PageTransition>
      <Shell>
        <AmbientMotion />

        <section className="relative overflow-hidden px-5 pb-24 pt-24 md:pb-28 md:pt-32">
          <div className="pointer-events-none absolute right-[-10rem] top-0 h-[40rem] w-[50rem] rounded-full bg-[#E6A86A]/13 blur-[156px]" />
          <div className="pointer-events-none absolute left-[-12rem] bottom-0 h-[36rem] w-[46rem] rounded-full bg-[#F4C88B]/7 blur-[168px]" />
          <div className="pointer-events-none absolute right-[4%] top-24 hidden h-[30rem] w-[48%] max-w-[44rem] md:block">
            <svg className="h-full w-full overflow-visible opacity-80" viewBox="0 0 640 440" aria-hidden="true">
              <defs>
                <radialGradient id="about-node-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F4C88B" stopOpacity="0.72" />
                  <stop offset="42%" stopColor="#E6A86A" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#E6A86A" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="about-hero-mesh-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="#F4C88B" stopOpacity="0" />
                  <stop offset="52%" stopColor="#F4C88B" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
                </linearGradient>
                <filter id="about-node-soft-glow" x="-160%" y="-160%" width="420%" height="420%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g opacity="0.22">
                <path d="M82 316 C178 156 282 242 374 134 C442 54 528 84 596 42" fill="none" stroke="url(#about-hero-mesh-line)" strokeWidth="0.8" />
                <path d="M118 370 C230 260 266 292 376 214 C456 158 500 164 588 112" fill="none" stroke="url(#about-hero-mesh-line)" strokeWidth="0.7" />
                <path d="M168 102 L284 236 L418 132 L536 202" fill="none" stroke="#F4C88B" strokeOpacity="0.055" strokeWidth="0.8" />
                <path d="M116 318 L258 288 L378 216 L520 112" fill="none" stroke="#F8F6F1" strokeOpacity="0.04" strokeWidth="0.8" />
                <circle cx="168" cy="102" r="2" fill="#F4C88B" opacity="0.16" />
                <circle cx="284" cy="236" r="2" fill="#F4C88B" opacity="0.12" />
                <circle cx="418" cy="132" r="2" fill="#F4C88B" opacity="0.14" />
                <circle cx="536" cy="202" r="2" fill="#F4C88B" opacity="0.1" />
              </g>
              <g filter="url(#about-node-soft-glow)">
                <circle cx="0" cy="0" r="18" fill="url(#about-node-glow)" opacity="0.36">
                  <animateMotion dur="18s" repeatCount="indefinite" path="M82 316 C178 156 282 242 374 134 C442 54 528 84 596 42" />
                </circle>
                <circle cx="0" cy="0" r="5" fill="#F8F1E4" opacity="0.52">
                  <animateMotion dur="18s" repeatCount="indefinite" path="M82 316 C178 156 282 242 374 134 C442 54 528 84 596 42" />
                </circle>
                <circle cx="0" cy="0" r="13" fill="url(#about-node-glow)" opacity="0.26">
                  <animateMotion dur="22s" begin="-6s" repeatCount="indefinite" path="M118 370 C230 260 266 292 376 214 C456 158 500 164 588 112" />
                </circle>
                <circle cx="0" cy="0" r="4" fill="#F4C88B" opacity="0.42">
                  <animateMotion dur="22s" begin="-6s" repeatCount="indefinite" path="M118 370 C230 260 266 292 376 214 C456 158 500 164 588 112" />
                </circle>
                <circle cx="0" cy="0" r="10" fill="url(#about-node-glow)" opacity="0.22">
                  <animateMotion dur="25s" begin="-12s" repeatCount="indefinite" path="M168 102 L284 236 L418 132 L536 202" />
                </circle>
                <circle cx="0" cy="0" r="3.5" fill="#F4C88B" opacity="0.36">
                  <animateMotion dur="25s" begin="-12s" repeatCount="indefinite" path="M168 102 L284 236 L418 132 L536 202" />
                </circle>
                <circle cx="0" cy="0" r="12" fill="url(#about-node-glow)" opacity="0.24">
                  <animateMotion dur="20s" begin="-3s" repeatCount="indefinite" path="M116 318 L258 288 L378 216 L520 112" />
                </circle>
              </g>
            </svg>
          </div>
          <svg className="pointer-events-none absolute inset-x-0 top-28 h-[34rem] w-full opacity-70" viewBox="0 0 1440 560" aria-hidden="true">
            <defs>
              <linearGradient id="about-signal" x1="0" x2="1">
                <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                <stop offset="48%" stopColor="#F4C88B" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M82 382 C300 122 526 486 760 238 C944 44 1128 128 1360 94" fill="none" stroke="url(#about-signal)" strokeWidth="1.4" />
            <path d="M160 164 C420 38 540 318 820 262 C1050 216 1138 352 1320 286" fill="none" stroke="url(#about-signal)" strokeWidth="0.9" opacity="0.68" />
          </svg>

          <div className="relative mx-auto max-w-7xl">
            <FadeUp className="max-w-[52rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#F4C88B]/72">About Enlivo</p>
              <h1 className="mt-7 text-balance font-display text-5xl font-semibold leading-[1.01] tracking-[-0.028em] text-white md:text-7xl lg:text-8xl">
                A technology partner for businesses built to move.
              </h1>
              <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-white/76 md:text-xl">
                Enlivo Global Tech Solutions Private Limited engineers premium websites, scalable applications, AI-powered automation systems, and digital transformation experiences for ambitious businesses.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-20 pt-20 md:px-12 md:pb-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-5 top-[6.35rem] mx-auto hidden max-w-6xl lg:block lg:top-[5.5rem]">
            <svg className="h-24 w-full overflow-visible" viewBox="0 0 1200 96" aria-hidden="true">
              <defs>
                <linearGradient id="about-values-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                  <stop offset="18%" stopColor="#F4C88B" stopOpacity="0.29" />
                  <stop offset="52%" stopColor="#D9B27A" stopOpacity="0.22" />
                  <stop offset="84%" stopColor="#F4C88B" stopOpacity="0.26" />
                  <stop offset="100%" stopColor="#E6A86A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M78 48 C242 16 356 82 520 48 C694 12 786 82 940 48 C1038 26 1100 32 1126 44" fill="none" stroke="url(#about-values-line)" strokeWidth="1.38" strokeLinecap="round" />
              <circle cx="0" cy="0" r="3.5" fill="#F4C88B" opacity="0.5">
                <animateMotion dur="7.5s" repeatCount="indefinite" path="M78 48 C242 16 356 82 520 48 C694 12 786 82 940 48 C1038 26 1100 32 1126 44" />
              </circle>
            </svg>
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-4 md:hidden">
            <div className="grid gap-4">
              {principles.map((item, index) => (
                <FadeUp key={item.title} delay={index * 0.1} className="relative overflow-hidden rounded-2xl border border-[#F4C88B]/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(5,13,24,0.58))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(244,200,139,0.14),transparent_32%),radial-gradient(circle_at_86%_84%,rgba(230,168,106,0.08),transparent_34%)]" />
                  <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#F4C88B]/8 blur-2xl" />
                  <div className="relative">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4C88B]/66">0{index + 1}</span>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h2>
                    <p className="mt-4 max-w-none text-sm leading-7 text-white/66">{item.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden max-w-6xl gap-8 md:grid md:grid-cols-3 lg:gap-10">
            {principles.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.08} className="relative">
                <span className="pointer-events-none absolute -left-8 -top-10 h-44 w-44 rounded-full bg-[#F4C88B]/[0.07] blur-[90px]" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.28em] text-[#F4C88B]/58">0{index + 1}</span>
                <span className="mt-4 block h-1.5 w-1.5 rounded-full bg-[#F4C88B]/52 shadow-[0_0_16px_rgba(244,200,139,0.24)]" />
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-white">{item.title}</h2>
                <p className="mt-8 max-w-md text-pretty leading-8 text-white/64">{item.text}</p>
              </FadeUp>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-[6.6rem] pt-24">
          <style>{`
            @keyframes about-stage-illumination {
              0%, 100% { opacity: 0.78; border-color: rgba(244, 200, 139, 0.2); box-shadow: 0 0 30px rgba(244, 200, 139, 0.07); transform: translateY(0); }
              18%, 30% { opacity: 1; border-color: rgba(244, 200, 139, 0.4); box-shadow: 0 0 34px rgba(244, 200, 139, 0.15); transform: translateY(-2px); }
            }
          `}</style>
          <div className="pointer-events-none absolute left-[57%] top-1/2 h-[62rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6A86A]/6 blur-[234px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/66">Execution Standard</p>
              <h2 className="mt-6 max-w-[36rem] text-balance font-display text-[2.75rem] font-medium leading-[1.08] tracking-[-0.026em] text-white md:text-[3.4rem]">
                <span className="block">Premium engineering</span>
                <span className="block">with business</span>
                <span className="block">discipline.</span>
              </h2>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/68">
                Enlivo is built beyond a freelancer-style execution model. We combine design intelligence, modern technology, and structured delivery to help businesses create digital presence and systems that support real growth.
              </p>
            </FadeUp>

            <div className="relative min-h-[28rem] lg:translate-x-10">
              <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 760 420" aria-hidden="true">
                <defs>
                  <linearGradient id="about-flow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                    <stop offset="48%" stopColor="#F4C88B" stopOpacity="0.72" />
                    <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M52 322 C150 276 196 248 236 230 C330 188 344 164 418 150 C502 132 536 96 616 82 C664 74 692 60 724 48" fill="none" stroke="rgba(244,200,139,0.1)" strokeWidth="5" strokeLinecap="round" />
                <path d="M52 322 C150 276 196 248 236 230 C330 188 344 164 418 150 C502 132 536 96 616 82 C664 74 692 60 724 48" fill="none" stroke="url(#about-flow)" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {flow.map((item, index) => {
                const isEngineering = item === "Engineering";

                return (
                  <FadeUp
                    key={item}
                    delay={index * 0.25}
                    className={isEngineering ? "absolute z-10" : "absolute z-[1]"}
                    style={flowPositions[index]}
                  >
                    <div
                      className={`group inline-flex items-center gap-3 rounded-full border backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:text-[#F4C88B] ${
                        isEngineering
                          ? "border-[#F4C88B]/38 bg-[#F4C88B]/12 px-6 py-3 text-base font-semibold text-[#FFF4D9] shadow-[0_0_46px_rgba(244,200,139,0.16)] hover:border-[#F4C88B]/52"
                          : "border-[#F4C88B]/20 bg-white/[0.055] px-4 py-2.5 text-sm font-medium text-[#F8F1E4] shadow-[0_0_30px_rgba(244,200,139,0.07)] hover:border-[#F4C88B]/36"
                      }`}
                      style={{
                        animation: `about-stage-illumination 6.5s ease-in-out ${index * 0.25}s infinite`,
                      }}
                    >
                      <span className={`${isEngineering ? "h-2.5 w-2.5" : "h-2 w-2"} rounded-full bg-[#F4C88B] shadow-[0_0_18px_rgba(244,200,139,0.62)]`} />
                      {item}
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-24 pt-[6.6rem]">
          <div className="pointer-events-none absolute right-[-12rem] top-6 h-[34rem] w-[58rem] -rotate-12 rounded-full bg-[#F4C88B]/8 blur-[190px]" />
          <div className="pointer-events-none absolute left-[12%] bottom-[-16rem] h-[28rem] w-[42rem] rotate-6 rounded-full bg-[#E6A86A]/5 blur-[160px]" />
          <FadeUp className="relative mx-auto max-w-5xl text-center">
            <h2 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.028em] text-white md:text-7xl">
              Build technology that becomes remembered.
            </h2>
            <div className="mt-10">
              <MagneticLink href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F8F1E4] px-7 py-3 text-sm font-semibold text-[#111827] shadow-[0_18px_58px_rgba(244,200,139,0.12)] transition duration-300 hover:bg-white hover:shadow-[0_22px_70px_rgba(244,200,139,0.22)]">
                Talk to Enlivo
                <ArrowRight size={16} />
              </MagneticLink>
            </div>
          </FadeUp>
        </section>
      </Shell>
    </PageTransition>
  );
}
