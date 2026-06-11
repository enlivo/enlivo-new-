import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AmbientMotion, FadeUp, PageTransition } from "../components/motion";
import { HeroBlock, Shell } from "../components/ui";
import { services } from "../lib/content";
import { createPageMetadata, jsonLd, serviceSchema } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services | Web, App, UI UX & AI Automation Company in Bangalore",
  description:
    "Explore Enlivo services for website development, app development, UI UX design, AI automation, and digital transformation systems in Bangalore.",
  path: "/services",
  keywords: [
    "website development company in Bangalore",
    "app development company in Bangalore",
    "UI UX design company in Bangalore",
    "business website development India",
    "AI automation services",
    "digital transformation company",
  ],
});

export default function ServicesPage() {
  const process = [
    ["Strategy", "Business priorities, audience memory, and market trust signals."],
    ["Interface", "Premium interaction systems shaped for clarity and conversion."],
    ["Systems", "Applications, automations, and workflows engineered to perform."],
    ["Market Trust", "Digital presence that compounds credibility and business momentum."],
  ];

  return (
    <PageTransition>
      <Shell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
        />
        <AmbientMotion />
        <style>{`
          @keyframes service-ecosystem-float {
            0%, 100% { transform: translateY(0); opacity: 0.84; }
            50% { transform: translateY(-4px); opacity: 1; }
          }

          @keyframes service-ecosystem-glow {
            0%, 100% { box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04); border-color: rgba(244, 200, 139, 0.12); }
            50% { box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28), 0 0 34px rgba(244, 200, 139, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.07); border-color: rgba(244, 200, 139, 0.24); }
          }

          @keyframes service-orbit-rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes service-orbit-counter {
            from { transform: rotate(calc(var(--angle) * -1)) rotate(0deg); }
            to { transform: rotate(calc(var(--angle) * -1)) rotate(-360deg); }
          }

          @keyframes service-core-breathe {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.92; box-shadow: 0 0 82px rgba(244, 200, 139, 0.2), inset 0 0 28px rgba(244, 200, 139, 0.08); }
            50% { transform: translate(-50%, -50%) scale(1.035); opacity: 1; box-shadow: 0 0 104px rgba(244, 200, 139, 0.26), inset 0 0 38px rgba(244, 200, 139, 0.12); }
          }

          @keyframes service-orbit-glow {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            50% { opacity: 0.38; transform: scale(1.045); }
          }

          @keyframes service-band-node {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.42; }
            50% { transform: translate3d(18px, -5px, 0) scale(1.08); opacity: 0.82; }
          }

          @keyframes service-trace {
            0% { stroke-dashoffset: 520; opacity: 0.22; }
            45% { opacity: 0.67; }
            100% { stroke-dashoffset: 0; opacity: 0.27; }
          }

          @keyframes process-pulse {
            0%, 100% { transform: translateX(-6px) scale(0.92); opacity: 0.28; }
            50% { transform: translateX(12px) scale(1.08); opacity: 0.78; }
          }

          @keyframes service-cta-sweep {
            0% { stroke-dashoffset: 620; opacity: 0.1; }
            45% { opacity: 0.18; }
            100% { stroke-dashoffset: 0; opacity: 0.11; }
          }

          @media (max-width: 767px) {
            .service-orbit-shell {
              width: 100%;
              max-width: 340px;
              margin: 0 auto;
              overflow: visible;
            }

            .service-orbit-position {
              transform: rotate(var(--angle)) translateX(9.25rem);
            }

            .service-orbit-node {
              font-size: 12px;
              padding: 8px 12px;
              gap: 0.5rem;
            }

            .service-orbit-core {
              width: 8.5rem;
              height: 8.5rem;
            }
          }

          .service-orbit-position {
            transform: rotate(var(--angle)) translateX(var(--orbit-translate));
            transform-origin: center;
          }

          @media (prefers-reduced-motion: reduce) {
            .service-ecosystem-row,
            .service-orbit-rotator,
            .service-orbit-counter,
            .service-orbit-glow,
            .service-core,
            .service-band-node,
            .service-trace,
            .process-pulse,
            .service-cta-sweep { animation: none !important; }
          }
        `}</style>
        <HeroBlock
          eyebrow="Services"
          title="Build systems your market trusts."
          text="Enlivo combines strategy, interface design, software engineering, and AI automation into premium digital systems for ambitious businesses."
          compact
        >
          <FadeUp className="relative min-h-[28rem] lg:min-h-[34rem]">
            <div className="service-orbit-shell pointer-events-none absolute inset-0 overflow-visible max-md:left-1/2 max-md:top-1/2 max-md:w-full max-md:max-w-[340px] max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:scale-[0.78] max-md:origin-center">
              <div className="service-orbit-glow absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4C88B]/9 blur-[112px]" style={{ animation: "service-orbit-glow 8s ease-in-out infinite" }} />
              <div className="service-orbit-glow absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6A86A]/12 blur-[70px]" style={{ animation: "service-orbit-glow 6.5s ease-in-out -1.8s infinite" }} />
              <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#08182B]/24 blur-[126px]" />
              <svg className="absolute left-1/2 top-1/2 h-[32.5rem] w-[32.5rem] -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-90" viewBox="0 0 520 520" aria-hidden="true">
                <defs>
                  <linearGradient id="service-orbit-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                    <stop offset="48%" stopColor="#F4C88B" stopOpacity="0.42" />
                    <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="260" cy="260" r="178" fill="none" stroke="#F4C88B" strokeDasharray="2 16" strokeOpacity="0.25" strokeWidth="1.12" />
                <circle cx="260" cy="260" r="116" fill="none" stroke="#F4C88B" strokeOpacity="0.14" strokeWidth="1.05" />
                <path d="M92 258 C152 102 360 96 428 252 C378 398 158 410 92 258Z" fill="none" stroke="url(#service-orbit-line)" strokeWidth="1.35" />
                <path d="M260 84 C348 154 360 336 260 436 C152 338 156 154 260 84Z" fill="none" stroke="url(#service-orbit-line)" strokeOpacity="0.72" strokeWidth="1.05" />
              </svg>

              <div className="service-core absolute left-1/2 top-1/2 z-10 grid h-[9.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#F4C88B]/34 bg-[radial-gradient(circle_at_50%_38%,rgba(244,200,139,0.18),rgba(8,10,14,0.56)_58%,rgba(8,10,14,0.42))] text-center shadow-[0_0_88px_rgba(244,200,139,0.22),inset_0_0_34px_rgba(244,200,139,0.1)] backdrop-blur-2xl" style={{ animation: "service-core-breathe 7s ease-in-out infinite" }}>
                <div>
                  <span className="mx-auto mb-3 block h-2.5 w-2.5 rounded-full bg-[#F4C88B] shadow-[0_0_28px_rgba(244,200,139,0.9)]" />
                  <p className="font-display text-lg font-medium leading-tight tracking-[-0.02em] text-white">Enlivo Systems</p>
                </div>
              </div>

              <div className="service-orbit-rotator absolute left-1/2 top-1/2 h-px w-px" style={{ animation: "service-orbit-rotate 34s linear infinite" }}>
                {[
                  ["Website Engineering", "0deg"],
                  ["Mobile Products", "88deg"],
                  ["AI Automation", "184deg"],
                  ["Digital Foundations", "276deg"],
                ].map(([label, angle]) => (
                  <div
                    key={label}
                    className="service-orbit-position absolute left-0 top-0"
                    style={{ "--angle": angle, "--orbit-translate": "14.55rem" } as CSSProperties}
                  >
                    <div className="service-orbit-counter" style={{ "--angle": angle, animation: "service-orbit-counter 34s linear infinite" } as CSSProperties}>
                      <div className="service-orbit-node group flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-[#F4C88B]/26 bg-[linear-gradient(180deg,rgba(248,241,228,0.08),rgba(8,10,14,0.38))] px-[1.08rem] py-[0.58rem] text-[0.92rem] font-medium text-[#F8F1E4]/84 shadow-[0_20px_60px_rgba(0,0,0,0.28),0_0_34px_rgba(244,200,139,0.11),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-[#F4C88B]/42 hover:text-[#F4C88B]">
                        <span className="h-2 w-2 rounded-full bg-[#F4C88B] shadow-[0_0_20px_rgba(244,200,139,0.82)]" />
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </HeroBlock>

        <section className="relative overflow-hidden px-5 py-24 md:py-28">
          <div className="pointer-events-none absolute left-[-16rem] top-16 h-[38rem] w-[48rem] rounded-full bg-[#E6A86A]/8 blur-[170px]" />
          <div className="pointer-events-none absolute right-[-18rem] bottom-[-12rem] h-[34rem] w-[54rem] rounded-full bg-[#F4C88B]/6 blur-[190px]" />
          <svg className="pointer-events-none absolute inset-x-0 top-10 h-[44rem] w-full opacity-65" viewBox="0 0 1440 680" aria-hidden="true">
            <defs>
              <linearGradient id="service-band-signal" x1="0" x2="1">
                <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                <stop offset="48%" stopColor="#F4C88B" stopOpacity="0.41" />
                <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="service-architecture-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F8F1E4" stopOpacity="0.74" />
                <stop offset="34%" stopColor="#F4C88B" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#E6A86A" stopOpacity="0" />
              </radialGradient>
              <filter id="service-signal-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#D4AF6E" floodOpacity="0.16" />
              </filter>
            </defs>
            <circle cx="138" cy="326" r="58" fill="url(#service-architecture-core)" opacity="0.78" />
            <circle cx="138" cy="326" r="4.5" fill="#F8F1E4" opacity="0.62" />
            <path className="service-trace" id="service-path-website" d="M138 326 C248 118 456 322 690 208 C880 108 1014 188 1320 74" fill="none" filter="url(#service-signal-glow)" stroke="url(#service-band-signal)" strokeDasharray="10 18" strokeWidth="1.38" />
            <path className="service-trace" id="service-path-systems" d="M138 326 C300 354 452 560 672 404 C856 274 1016 438 1360 292" fill="none" filter="url(#service-signal-glow)" stroke="url(#service-band-signal)" strokeDasharray="8 20" strokeWidth="1.15" />
            <path className="service-trace" id="service-path-trust" d="M138 326 C330 210 520 160 720 304 C910 438 1128 396 1338 500" fill="none" filter="url(#service-signal-glow)" stroke="url(#service-band-signal)" strokeDasharray="7 18" strokeWidth="1" />
            <circle cx="0" cy="0" r="4" fill="#F4C88B" opacity="0.62">
              <animateMotion dur="15s" repeatCount="indefinite" path="M138 326 C248 118 456 322 690 208 C880 108 1014 188 1320 74" />
            </circle>
            <circle cx="0" cy="0" r="3.4" fill="#F8F1E4" opacity="0.5">
              <animateMotion dur="18s" begin="-5s" repeatCount="indefinite" path="M138 326 C300 354 452 560 672 404 C856 274 1016 438 1360 292" />
            </circle>
            <circle cx="0" cy="0" r="3.2" fill="#D9B27A" opacity="0.48">
              <animateMotion dur="21s" begin="-9s" repeatCount="indefinite" path="M138 326 C330 210 520 160 720 304 C910 438 1128 396 1338 500" />
            </circle>
          </svg>

          <div className="relative mx-auto max-w-7xl">
            <FadeUp className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/70">Service Architecture</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-[-0.026em] text-white md:text-6xl">
                Four disciplines. One engineered growth system.
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
                {["Website", "Mobile", "AI", "Systems", "Trust"].map((step, index) => (
                  <span key={step} className="inline-flex items-center gap-3">
                    <span className="text-[#F4C88B]/70">{step}</span>
                    {index < 4 ? <span className="h-px w-8 bg-gradient-to-r from-[#F4C88B]/34 to-transparent" /> : null}
                  </span>
                ))}
              </div>
            </FadeUp>

            <div className="mt-20 grid gap-16">
              {services.map((service, index) => (
                <FadeUp
                  key={service.title}
                  delay={index * 0.12}
                  className={`relative ${index % 2 === 0 ? "lg:pr-[16%]" : "lg:pl-[16%]"}`}
                >
                  <div className="group relative grid items-center gap-8 border-t border-[#F4C88B]/10 py-9 transition duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#F4C88B]/28 lg:grid-cols-[0.44fr_0.56fr]">
                    <span
                      className={`service-band-node pointer-events-none absolute top-8 h-3 w-3 rounded-full bg-[#F4C88B] shadow-[0_0_34px_rgba(244,200,139,0.72)] transition duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12] group-hover:shadow-[0_0_46px_rgba(244,200,139,0.97)] ${
                        index % 2 === 0 ? "left-[34%]" : "right-[34%]"
                      }`}
                      style={{ animation: `service-band-node ${7 + index}s ease-in-out ${index * 0.35}s infinite` }}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F4C88B]/54">0{index + 1}</p>
                      <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.024em] text-white transition duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:text-[#FFF1D4] md:text-5xl">
                        {service.title === "Mobile Product Engineering" ? (
                          <>
                            <span className="block">Mobile Product</span>
                            <span className="block">Engineering</span>
                          </>
                        ) : (
                          service.title
                        )}
                      </h3>
                    </div>
                    <div className="relative">
                      <p className="max-w-2xl text-pretty text-lg leading-8 text-white/68 transition duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/76">{service.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {service.items.slice(0, 4).map((item) => (
                          <span key={item} className="rounded-full border border-[#F4C88B]/14 bg-white/[0.035] px-4 py-2 text-sm text-white/62 backdrop-blur-md transition duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#F4C88B]/26 group-hover:bg-white/[0.055] group-hover:text-white/82">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 md:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/8 to-transparent" />
          <div className="pointer-events-none absolute left-[20%] top-12 h-[28rem] w-[52rem] rounded-full bg-[#08182B]/80 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-10rem] top-[-8rem] h-[34rem] w-[40rem] rounded-full bg-[#E6A86A]/8 blur-[170px]" />
          <div className="relative mx-auto max-w-7xl">
            <FadeUp className="ml-auto max-w-3xl text-left lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/70">Execution Flow</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-[-0.026em] text-white md:text-6xl">
                From intent to market trust.
              </h2>
            </FadeUp>

            <div className="relative mt-20">
              <svg className="pointer-events-none absolute inset-x-0 top-5 hidden h-28 w-full overflow-visible lg:block" viewBox="0 0 1180 120" aria-hidden="true">
                <defs>
                  <linearGradient id="service-process-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                    <stop offset="18%" stopColor="#F4C88B" stopOpacity="0.22" />
                    <stop offset="58%" stopColor="#D9B27A" stopOpacity="0.34" />
                    <stop offset="100%" stopColor="#E6A86A" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M28 68 C210 12 350 104 532 58 C714 12 842 94 1016 50 C1080 34 1128 36 1152 44" fill="none" stroke="url(#service-process-line)" strokeWidth="1.4" />
              </svg>
              <div className="grid gap-10 lg:grid-cols-4">
                {process.map(([title, text], index) => (
                  <FadeUp key={title} delay={index * 0.08} className={index % 2 === 0 ? "lg:pt-3" : "lg:pt-16"}>
                    <div className="group relative min-h-48 border-l border-[#F4C88B]/12 pl-6 transition duration-300 hover:border-[#F4C88B]/30 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-8">
                      <span className="process-pulse absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#F4C88B] shadow-[0_0_30px_rgba(244,200,139,0.64)] lg:left-0 lg:top-[-0.45rem]" style={{ animation: `process-pulse 6s ease-in-out ${index * 0.3}s infinite` }} />
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F4C88B]/56">0{index + 1}</p>
                      <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-white transition duration-300 group-hover:text-[#F4C88B]">{title}</h3>
                      <p className="mt-4 max-w-xs leading-7 text-white/58">{text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-28 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050D18]/10 to-transparent" />
          <div className="pointer-events-none absolute left-[43%] top-[46%] h-[34rem] w-[68rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF6E]/12 blur-[150px]" />
          <div className="pointer-events-none absolute left-[56%] top-[58%] h-[28rem] w-[76rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6A86A]/6 blur-[210px]" />
          <div className="pointer-events-none absolute right-[8%] top-10 h-[18rem] w-[30rem] rotate-[-14deg] rounded-full bg-[#F4C88B]/8 blur-[150px]" />
          <svg className="pointer-events-none absolute inset-x-0 top-1/2 h-[30rem] w-full -translate-y-1/2 opacity-100" viewBox="0 0 1440 480" aria-hidden="true">
            <defs>
              <linearGradient id="service-cta-line" x1="0" x2="1">
                <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                <stop offset="44%" stopColor="#F4C88B" stopOpacity="0.62" />
                <stop offset="100%" stopColor="#D4AF6E" stopOpacity="0" />
              </linearGradient>
              <filter id="service-cta-glow" x="-20%" y="-40%" width="140%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D4AF6E" floodOpacity="0.14" />
              </filter>
            </defs>
            <path d="M-110 322 C214 96 444 402 724 208 C960 44 1184 174 1540 72" fill="none" stroke="#F4C88B" strokeOpacity="0.055" strokeWidth="1.1" />
            <path d="M-160 386 C126 160 406 462 724 276 C1038 92 1220 268 1540 138" fill="none" stroke="#D4AF6E" strokeOpacity="0.05" strokeWidth="0.9" />
            <path d="M-96 268 C214 136 404 328 688 210 C960 96 1124 184 1536 74" fill="none" stroke="url(#service-cta-line)" strokeDasharray="18 26" strokeWidth="1" filter="url(#service-cta-glow)" className="service-cta-sweep" style={{ animation: "service-cta-sweep 13s ease-in-out infinite" }} />
            <circle cx="1030" cy="220" r="360" fill="none" stroke="#F4C88B" strokeOpacity="0.07" strokeWidth="1" />
            <circle cx="1030" cy="220" r="250" fill="none" stroke="#D4AF6E" strokeOpacity="0.045" strokeWidth="0.8" />
          </svg>
          <FadeUp className="relative mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/62">Ready when the market is</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.04] tracking-[-0.028em] text-white md:text-6xl">
              Build what your market remembers.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/62">Share the business context. Enlivo will help shape the right technology path.</p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#F4C88B,#D9B27A)] px-6 py-3 text-sm font-semibold text-[#07111F] shadow-xl shadow-[#F4C88B]/20 transition duration-300 hover:scale-[1.02] hover:shadow-[0_22px_70px_rgba(244,200,139,0.3)]"
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        </section>
      </Shell>
    </PageTransition>
  );
}
