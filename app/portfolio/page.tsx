import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AmbientMotion, FadeUp, PageTransition } from "../components/motion";
import { HeroBlock, Shell } from "../components/ui";
import { portfolio } from "../lib/content";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Enlivo Web, App & Digital Systems Work",
  description:
    "See Enlivo portfolio work across websites, UI UX design, healthcare, pharma, recruitment, automation, and business systems built for trust and clarity.",
  path: "/portfolio",
  keywords: [
    "Enlivo Technologies",
    "pharma website development",
    "website development company",
    "app development company",
    "UI UX design company",
    "portfolio",
  ],
});

const filters = ["All", "Healthcare", "Pharma", "Recruitment", "Business", "Automation"];

const constellationNodes = [
  { name: "Cadell", x: 112, y: 126, active: true },
  { name: "Adshine", x: 308, y: 82, active: false },
  { name: "Cadomack", x: 466, y: 164, active: true },
  { name: "East Theory", x: 232, y: 286, active: false },
  { name: "CareerPlanet", x: 510, y: 322, active: false },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
      <Shell>
        <AmbientMotion />
        <style>{`
          @keyframes portfolio-signal-drift {
            0% { stroke-dashoffset: 520; opacity: 0; }
            18% { opacity: 0.28; }
            52% { opacity: 0.62; }
            82% { opacity: 0.26; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }

          @keyframes portfolio-network-breathe {
            0%, 100% { opacity: 0.62; }
            50% { opacity: 0.88; }
          }

          @keyframes portfolio-preview-breathe {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.012); }
          }

          @keyframes portfolio-constellation-pulse {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            48% { opacity: 0.72; transform: scale(1.08); }
          }

          @keyframes portfolio-node-breathe {
            0%, 100% { opacity: 0.56; transform: scale(1); }
            50% { opacity: 0.82; transform: scale(1.12); }
          }

          @keyframes portfolio-active-node {
            0%, 100% { opacity: 0.64; transform: scale(1); }
            42% { opacity: 0.95; transform: scale(1.18); }
            68% { opacity: 0.78; transform: scale(1.05); }
          }

          @keyframes portfolio-signal-sweep {
            0% { transform: translateX(-18%); opacity: 0; }
            20%, 68% { opacity: 1; }
            100% { transform: translateX(118%); opacity: 0; }
          }

          @keyframes portfolio-signal-line {
            0% { transform: scaleX(0.18); opacity: 0.18; }
            50% { transform: scaleX(1); opacity: 0.72; }
            100% { transform: scaleX(0.18); opacity: 0.18; }
          }

          @media (prefers-reduced-motion: reduce) {
            .portfolio-signal,
            .portfolio-network-line,
            .portfolio-preview,
            .portfolio-node-breathe,
            .portfolio-node-glow,
            .portfolio-closing-sweep,
            .portfolio-closing-line { animation: none !important; }
          }
        `}</style>

        <HeroBlock
          eyebrow="Portfolio"
          title="Digital systems engineered for trust, precision, and business momentum."
          text="A focused archive of websites and digital systems built across healthcare, pharma, recruitment, business, and technology-led brands."
          primary="Start a Project"
          secondary="Explore Services"
          afterActions={
            <div className="mt-6 flex flex-col gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/48 sm:flex-row sm:flex-wrap sm:items-center">
              <span className="text-[#F4C88B]/72">6+ Digital Systems Delivered</span>
              <span className="hidden h-3 w-px bg-[#D4AF6E]/34 sm:block" />
              <span>Healthcare <span className="px-1.5 text-[#D4AF6E]/58">•</span> Pharma <span className="px-1.5 text-[#D4AF6E]/58">•</span> Recruitment <span className="px-1.5 text-[#D4AF6E]/58">•</span> Automation</span>
            </div>
          }
          compact
        >
          <FadeUp className="relative min-h-[25rem] overflow-hidden">
            <div className="pointer-events-none absolute right-[-6rem] top-1/2 h-[30rem] w-[36rem] -translate-y-1/2 rounded-full bg-[#E6A86A]/10 blur-[120px]" />
            <div className="pointer-events-none absolute left-10 top-16 h-40 w-40 rounded-full bg-[#F4C88B]/7 blur-3xl" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-95" viewBox="0 0 620 420" aria-hidden="true">
              <defs>
                <linearGradient id="portfolio-hero-line" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F4C88B" stopOpacity="0.46" />
                  <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="portfolio-hero-pulse" x1="0" x2="1">
                  <stop offset="0%" stopColor="#F4C88B" stopOpacity="0" />
                  <stop offset="42%" stopColor="#F8F1E4" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#F4C88B" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="portfolio-hero-node" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F8F1E4" stopOpacity="0.7" />
                  <stop offset="42%" stopColor="#F4C88B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E6A86A" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path className="portfolio-network-line" d="M112 126 C190 62 234 68 308 82 C384 96 412 118 466 164 C512 204 524 250 510 322" fill="none" stroke="url(#portfolio-hero-line)" strokeWidth="1.1" style={{ animation: "portfolio-network-breathe 7.5s ease-in-out infinite" }} />
              <path className="portfolio-network-line" d="M112 126 C128 216 168 266 232 286 C330 318 418 332 510 322" fill="none" stroke="url(#portfolio-hero-line)" strokeWidth="0.9" strokeOpacity="0.78" style={{ animation: "portfolio-network-breathe 8.5s ease-in-out infinite reverse" }} />
              <path className="portfolio-network-line" d="M232 286 C268 210 356 144 466 164" fill="none" stroke="url(#portfolio-hero-line)" strokeWidth="0.85" strokeOpacity="0.72" style={{ animation: "portfolio-network-breathe 9s ease-in-out infinite" }} />
              <path className="portfolio-signal" d="M112 126 C190 62 234 68 308 82 C384 96 412 118 466 164 C512 204 524 250 510 322" fill="none" stroke="url(#portfolio-hero-pulse)" strokeDasharray="48 472" strokeLinecap="round" strokeWidth="1.65" style={{ animation: "portfolio-signal-drift 5.8s cubic-bezier(0.22,1,0.36,1) infinite" }} />
              <path className="portfolio-signal" d="M112 126 C128 216 168 266 232 286 C330 318 418 332 510 322" fill="none" stroke="url(#portfolio-hero-pulse)" strokeDasharray="42 428" strokeLinecap="round" strokeWidth="1.35" style={{ animation: "portfolio-signal-drift 6.8s cubic-bezier(0.22,1,0.36,1) infinite 1.1s" }} />
              <path className="portfolio-signal" d="M232 286 C268 210 356 144 466 164" fill="none" stroke="url(#portfolio-hero-pulse)" strokeDasharray="34 250" strokeLinecap="round" strokeWidth="1.2" style={{ animation: "portfolio-signal-drift 5.2s cubic-bezier(0.22,1,0.36,1) infinite 2.2s" }} />
              {constellationNodes.map((node, index) => {
                const x = Number.isFinite(node.x) ? node.x : 0;
                const y = Number.isFinite(node.y) ? node.y : 0;
                const glowRadius = node.active ? 42 : 30;
                const nodeRadius = node.active ? 4.8 : 3.7;

                return (
                  <g key={node.name}>
                    <circle
                      className={node.active ? "portfolio-node-glow" : "portfolio-node-breathe"}
                      cx={x}
                      cy={y}
                      r={glowRadius}
                      fill="url(#portfolio-hero-node)"
                      style={{
                        transformOrigin: `${x}px ${y}px`,
                        animation: node.active
                          ? `portfolio-active-node ${4.4 + index * 0.25}s ease-in-out infinite`
                          : `portfolio-node-breathe ${5.6 + index * 0.3}s ease-in-out infinite`,
                      }}
                    />
                    <circle
                      className="portfolio-node-breathe"
                      cx={x}
                      cy={y}
                      r={nodeRadius}
                      fill="#F4C88B"
                      opacity={node.active ? "0.9" : "0.56"}
                      style={{
                        transformOrigin: `${x}px ${y}px`,
                        animation: `portfolio-node-breathe ${4.8 + index * 0.35}s ease-in-out infinite`,
                      }}
                    />
                    <text x={x + 14} y={y + 5} fill="#F8F6F1" fillOpacity={node.active ? "0.78" : "0.52"} fontSize="13" fontWeight="600" letterSpacing="0">
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </FadeUp>
        </HeroBlock>

        <section className="relative overflow-hidden px-5 py-24 md:py-28">
          <div className="pointer-events-none absolute left-[-18rem] top-20 h-[38rem] w-[50rem] rounded-full bg-[#E6A86A]/7 blur-[180px]" />
          <div className="pointer-events-none absolute right-[-16rem] bottom-[-12rem] h-[34rem] w-[54rem] rounded-full bg-[#F4C88B]/5 blur-[190px]" />
          <svg className="pointer-events-none absolute inset-x-0 top-8 h-[38rem] w-full opacity-55" viewBox="0 0 1440 600" aria-hidden="true">
            <path d="M-80 340 C220 110 454 450 720 250 C996 42 1148 236 1520 104" fill="none" stroke="#F4C88B" strokeOpacity="0.08" strokeWidth="1" />
            <path d="M-60 500 C260 302 498 548 786 372 C1044 214 1208 402 1500 260" fill="none" stroke="#D4AF6E" strokeOpacity="0.06" strokeWidth="0.9" />
          </svg>

          <div className="relative mx-auto max-w-7xl">
            <FadeUp className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/70">Case Study Archive</p>
                <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-[-0.026em] text-white md:text-6xl">
                  Curated proof of digital systems built for market confidence.
                </h2>
              </div>
              <div className="flex max-w-xl flex-wrap gap-3">
                {filters.map((filter, index) => (
                  <span
                    key={filter}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md transition duration-300 ${
                      index === 0
                        ? "border-[#F4C88B]/28 bg-[#F4C88B]/10 text-[#F4C88B]"
                        : "border-[#F4C88B]/12 bg-white/[0.025] text-white/52 hover:border-[#F4C88B]/24 hover:text-[#F4C88B]/82"
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </FadeUp>

            <div className="mt-16">
              {portfolio.map((project, index) => {
                const featured = project.title === "Cadell Healthcare";
                const liveUrl = project.liveUrl ?? "/contact";
                const metric = project.metric ?? "3 system layers";

                return (
                  <FadeUp key={project.title} delay={index * 0.08} className="relative">
                    <div
                      className={`group relative grid gap-8 overflow-hidden border-t py-8 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#F4C88B]/46 md:grid-cols-[0.8fr_0.95fr_0.72fr] md:items-center ${
                        featured
                          ? "border-[#F4C88B]/22 py-11 shadow-[0_-1px_0_rgba(244,200,139,0.05),0_40px_120px_rgba(244,200,139,0.055)]"
                          : "border-[#F4C88B]/10"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(244,200,139,0.12),transparent_36%),radial-gradient(circle_at_82%_50%,rgba(230,168,106,0.085),transparent_34%)] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/82 to-transparent opacity-0 shadow-[0_0_34px_rgba(244,200,139,0.62)] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
                      <div className="relative">
                        {featured ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#F4C88B]/78">Featured Work</p> : null}
                        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F4C88B]/48">0{index + 1}</p>
                        <h3 className={`mt-4 font-display font-medium tracking-[-0.024em] text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[10px] group-hover:text-[#FFF1D4] ${featured ? "text-3xl md:text-5xl" : "text-[1.7rem] md:text-[2.75rem]"}`}>
                          {project.title}
                        </h3>
                      </div>
                      <div className="relative">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">{project.industry}</p>
                        <p className="mt-4 max-w-2xl leading-8 text-white/62 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/74">{project.description}</p>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/48">
                          <span className="mr-2 font-semibold uppercase tracking-[0.18em] text-[#F4C88B]/76">Outcome</span>
                          {project.outcome}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          {project.services.map((service) => (
                            <span key={service} className="rounded-full border border-[#F4C88B]/14 bg-white/[0.03] px-3.5 py-2 text-xs text-white/58 backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#F4C88B]/28 group-hover:bg-white/[0.055] group-hover:text-white/82">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`portfolio-preview relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,20,34,0.84),rgba(5,13,24,0.7))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[#F4C88B]/36 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_28px_94px_rgba(0,0,0,0.34),0_0_70px_rgba(244,200,139,0.16)] ${featured ? "min-h-[12.5rem]" : "min-h-[11rem]"}`} style={{ animation: "portfolio-preview-breathe 8s ease-in-out infinite" }}>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(244,200,139,0.14),transparent_34%),radial-gradient(circle_at_78%_68%,rgba(230,168,106,0.08),transparent_38%)] opacity-80" />
                          <div className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#F4C88B]/54 to-transparent" style={{ animation: "portfolio-signal-line 8s ease-in-out infinite" }} />
                          <div className="absolute left-[18%] top-[32%] h-2 w-2 rounded-full bg-[#F4C88B] shadow-[0_0_22px_rgba(244,200,139,0.52)]" />
                          <div className="absolute right-[20%] top-[62%] h-2 w-2 rounded-full bg-[#F4C88B]/72 shadow-[0_0_18px_rgba(244,200,139,0.34)]" />
                          <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/62">Project Metric</p>
                                <p className="mt-2 font-display text-3xl font-medium tracking-[-0.03em] text-white">{metric}</p>
                              </div>
                              <div className="rounded-full border border-[#F4C88B]/14 bg-white/[0.03] px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#F4C88B]/76 backdrop-blur-md">
                                Live Site
                              </div>
                            </div>
                            <p className="max-w-[18rem] text-sm leading-7 text-white/54">
                              A compact case-study panel replacing the screenshot with a live signal, a trust stat, and a cleaner premium frame.
                            </p>
                          </div>
                        </div>
                        <a href={liveUrl} target="_blank" rel="noreferrer noopener" className="group/link mt-5 inline-flex items-center gap-2 rounded-full border border-[#F4C88B]/22 bg-[#050D18]/30 px-5 py-3 text-sm font-semibold text-[#F4C88B] shadow-[0_0_34px_rgba(244,200,139,0.06)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#F4C88B]/42 hover:bg-[#F4C88B]/8 hover:text-[#FFF1D4]">
                          Visit Live Website
                          <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px] group-hover/link:translate-x-[5px]" />
                        </a>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 md:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/20 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-8 h-[28rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#E6A86A]/8 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl">
            <FadeUp className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/66">Project Signal</p>
                <h2 className="mt-5 font-display text-4xl font-medium leading-[1.06] tracking-[-0.026em] text-white md:text-6xl">
                  Built systems. Proven trust.
                </h2>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/56">
                  Every project is shaped to improve credibility, clarity, and business momentum.
                </p>
                <Link href="/contact" className="group/cta mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#F4C88B,#D9B27A)] px-6 py-3 text-sm font-semibold text-[#07111F] shadow-xl shadow-[#F4C88B]/18 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_54px_rgba(244,200,139,0.28)]">
                  Start Your Project
                  <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-[5px]" />
                </Link>
              </div>
              <div className="relative min-h-40 overflow-hidden">
                <div className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-[#F4C88B]/70 to-transparent portfolio-closing-line" style={{ animation: "portfolio-signal-line 7s ease-in-out infinite" }} />
                <div className="portfolio-closing-sweep absolute top-1/2 h-16 w-48 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,246,241,0.32),rgba(244,200,139,0.18)_34%,transparent_70%)]" style={{ animation: "portfolio-signal-sweep 6.5s cubic-bezier(0.22,1,0.36,1) infinite" }} />
                <div className="absolute left-[12%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F4C88B]/70 shadow-[0_0_26px_rgba(244,200,139,0.42)]" />
                <div className="absolute left-[46%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#F4C88B] shadow-[0_0_32px_rgba(244,200,139,0.5)]" />
                <div className="absolute right-[10%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#F4C88B]/66 shadow-[0_0_24px_rgba(244,200,139,0.36)]" />
              </div>
            </FadeUp>
          </div>
        </section>
      </Shell>
    </PageTransition>
  );
}
