"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Globe2, Smartphone, Workflow } from "lucide-react";
import { CinematicHero } from "./cinematic-hero";
import { MagneticLink, fadeUp, premiumEase, sectionReveal, sectionViewport, staggerContainer, useIsMobile } from "./motion";

const serviceNodes = [
  { label: "Web Platforms", Icon: Globe2, x: "50%", y: "3%" },
  { label: "Mobile Applications", Icon: Smartphone, x: "96%", y: "50%" },
  { label: "AI Automation", Icon: Bot, x: "50%", y: "97%" },
  { label: "Digital Transformation", Icon: Workflow, x: "4%", y: "50%" },
];

const transformationStages = [
  { label: "Perception", copy: "Brand trust", left: "6%", top: "60%" },
  { label: "Conversion", copy: "Lead flow", left: "29%", top: "24%" },
  { label: "Automation", copy: "Faster operations", left: "55%", top: "36%" },
  { label: "Scale", copy: "Growth systems", left: "80%", top: "54%" },
];

const outcomeEngineStages = [
  {
    number: "01",
    title: "Perception",
    copy: "Build brand trust",
  },
  {
    number: "02",
    title: "Conversion",
    copy: "Turn attention into qualified leads",
  },
  {
    number: "03",
    title: "Automation",
    copy: "Reduce manual work and speed up operations",
  },
  {
    number: "04",
    title: "Scale",
    copy: "Create repeatable growth systems",
  },
];

const marketLeaderJourney = [
  {
    number: "01",
    title: "Strategy",
    copy: "We map the market, audience, and growth direction.",
    side: "left",
  },
  {
    number: "02",
    title: "Design",
    copy: "We shape premium interfaces that build trust.",
    side: "right",
  },
  {
    number: "03",
    title: "Engineering",
    copy: "We build fast, scalable, production-ready systems.",
    side: "left",
  },
  {
    number: "04",
    title: "Scale",
    copy: "We automate, optimize, and prepare for growth.",
    side: "right",
  },
];

const capabilityModules = [
  {
    number: "01",
    title: "Web Platforms",
    copy: "Websites, dashboards, and web apps",
  },
  {
    number: "02",
    title: "Mobile Products",
    copy: "Mobile-first product experiences",
  },
  {
    number: "03",
    title: "AI Automation",
    copy: "Smarter workflows and operations",
  },
  {
    number: "04",
    title: "Digital Transformation",
    copy: "Systems that scale business growth",
  },
];

function stagePulse(index: number) {
  const peak = (index + 0.5) / transformationStages.length;
  return [0, Math.max(0, peak - 0.08), peak, Math.min(1, peak + 0.08), 1];
}

function SceneTitle({
  eyebrow,
  mobileEyebrow,
  title,
  text,
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  textClassName = "",
}: {
  eyebrow: string;
  mobileEyebrow?: string;
  title: string;
  text: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}) {
  const isMobile = useIsMobile();
  const revealTransition = { duration: isMobile ? 0.42 : 0.75, ease: premiumEase };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      className={className}
    >
      <motion.p
        variants={fadeUp}
        transition={revealTransition}
        className={`hidden text-xs font-semibold uppercase tracking-[0.28em] text-[#F4C88B]/64 md:block ${eyebrowClassName}`}
      >
        {eyebrow}
      </motion.p>
      <motion.p
        variants={fadeUp}
        transition={revealTransition}
        className={`text-xs font-semibold uppercase tracking-[0.34em] text-[#F4C88B]/64 md:hidden ${eyebrowClassName}`}
      >
        {mobileEyebrow ?? eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        transition={revealTransition}
        className={`mt-6 text-balance font-display text-[44px] font-medium leading-[1.05] tracking-[-0.024em] text-white md:text-7xl ${titleClassName}`}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        transition={revealTransition}
        className={`mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 ${textClassName}`}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export function ImmersiveJourney() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const mobileFastMode = isMobile || prefersReducedMotion;
  const sectionTransition = { duration: isMobile ? 0.42 : 0.75, ease: premiumEase };
  const slowDrift = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -8] : [0, -32]);
  const counterDrift = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 6] : [0, 28]);
  const scene02BridgeOpacity = useTransform(scrollYProgress, [0.14, 0.24, 0.36], [0.08, 0.46, 0.12]);
  const scene03BridgeOpacity = useTransform(scrollYProgress, [0.3, 0.44, 0.58], [0.04, 0.38, 0.08]);
  const scene04BridgeOpacity = useTransform(scrollYProgress, [0.5, 0.64, 0.78], [0.04, 0.42, 0.1]);

  return (
    <>
      <CinematicHero />

      <div className="relative overflow-hidden bg-[#050D18]">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,#050D18_0%,#071426_32%,#050D18_68%,#050B14_100%)] opacity-88" />
        <motion.div
          style={{ opacity: scene02BridgeOpacity }}
          className="pointer-events-none absolute left-[-12%] top-[14%] z-[2] hidden h-[40rem] w-[76vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(230,168,106,0.14),rgba(244,200,139,0.06)_34%,transparent_74%)] blur-[155px] md:block"
        />
        <motion.div
          style={{ opacity: scene03BridgeOpacity }}
          className="pointer-events-none absolute left-1/2 top-[38%] z-[2] hidden h-[48rem] w-[74vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(18,36,62,0.34),rgba(5,13,24,0.2)_44%,transparent_74%)] blur-[160px] md:block"
        />
        <motion.div
          style={{ opacity: scene04BridgeOpacity }}
          className="pointer-events-none absolute right-[-8%] top-[58%] z-[2] hidden h-[44rem] w-[66vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,110,0.12),rgba(230,168,106,0.045)_40%,transparent_74%)] blur-[155px] md:block"
        />
        <div className="pointer-events-none absolute inset-0 z-[60] bg-[repeating-radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.014)_0px,rgba(255,255,255,0.005)_1px,transparent_2px)] opacity-[0.026] mix-blend-soft-light" />

      <motion.section
        id="how-we-work"
        className="scene-02 relative z-10 mt-0 min-h-[700px] overflow-visible px-6 pb-[84px] pt-[96px] md:min-h-[82svh] md:px-5 md:pb-16 md:pt-16 md:-mt-10 lg:-mt-32"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_78%_0%,rgba(230,165,95,0.18)_0%,rgba(230,165,95,0.09)_18%,rgba(230,165,95,0.032)_38%,transparent_66%)]" />
        <div className="pointer-events-none absolute -top-32 right-0 z-[2] hidden h-[520px] w-[650px] rounded-full bg-[#E6A86A]/16 blur-[156px] md:block" />
        <motion.div style={{ y: slowDrift }} className="absolute right-[-12rem] top-10 hidden h-[44rem] w-[44rem] rounded-full bg-[#E6A86A]/8 blur-[112px] md:block" />
        <motion.div style={{ y: counterDrift }} className="absolute left-[-14rem] bottom-10 hidden h-[32rem] w-[32rem] rounded-full bg-[#F4C88B]/8 opacity-[0.18] blur-[140px] md:block" />
        <div className="pointer-events-none absolute left-1/2 top-[18%] h-20 w-[72vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.08),transparent_68%)] blur-xl md:h-24 md:bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.12),transparent_68%)] md:blur-2xl" />
        <div className="relative z-[5] mx-auto grid max-w-7xl items-start gap-10 overflow-visible md:items-center lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SceneTitle
            eyebrow="OUR APPROACH"
            mobileEyebrow="OUR APPROACH"
            title="How Enlivo Builds Market Leaders"
            text="We design, engineer, and scale digital systems that transform ambitious businesses into category-defining brands."
            className="lg:translate-y-8"
            titleClassName="max-md:mt-5 max-md:max-w-[11ch] max-md:text-[44px] max-md:leading-[1.05]"
          />
          <div className="relative mx-auto w-full max-w-[25rem] overflow-visible md:min-h-[42rem] md:max-w-none md:overflow-hidden lg:mx-0">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/10 to-transparent md:hidden" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/10 to-transparent md:hidden" />
            <motion.div
              className="relative z-[6] mt-8 px-1 pb-8 md:hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.36 }}
            >
              <div className="pointer-events-none absolute left-3 top-6 h-[calc(100%-4rem)] w-px bg-white/[0.08]" />
              <motion.div
                className="pointer-events-none absolute left-3 top-6 h-[calc(100%-4rem)] w-px origin-top bg-gradient-to-b from-transparent via-[#F4C88B]/80 to-transparent"
                initial={prefersReducedMotion ? { opacity: 0.72, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true, amount: 0.36 }}
                transition={{ duration: 0.68, delay: 0.18, ease: premiumEase }}
              />
              <div className="relative grid gap-3">
                {marketLeaderJourney.map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="relative pl-10 pr-1"
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.44 }}
                      transition={{ duration: 0.56, delay: 0.42 + index * 0.12, ease: premiumEase }}
                    >
                      <span className="absolute left-[0.45rem] top-8 z-20 h-2.5 w-2.5 rounded-full border border-[#F4C88B]/70 bg-[#071426] shadow-[0_0_15px_rgba(244,200,139,0.52)]" />
                      <motion.span
                        className="pointer-events-none absolute left-7 right-1 -top-7 h-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.14),rgba(230,168,106,0.05)_42%,transparent_72%)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: prefersReducedMotion ? 0.14 : [0, 0.42, 0.14] }}
                        viewport={{ once: true, amount: 0.44 }}
                        transition={{ duration: 0.66, delay: 0.44 + index * 0.12, ease: premiumEase }}
                      />
                      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(9,18,32,0.76)),radial-gradient(circle_at_16%_0%,rgba(244,200,139,0.13),transparent_42%)] px-4 py-4 shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/35 to-transparent" />
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#F4C88B]/20 bg-[#F4C88B]/10 px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.22em] text-[#F4C88B]">
                            {step.number}
                          </span>
                          <span className="h-px flex-1 bg-gradient-to-r from-[#F4C88B]/50 to-transparent" />
                        </div>
                        <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-200/86">{step.copy}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
            <motion.p
              className="absolute left-0 top-8 hidden max-w-4xl text-[16vw] font-semibold leading-none tracking-normal text-white/[0.035] md:block md:text-[9rem]"
              animate={{ x: [-18, 18, -18], opacity: [0.028, 0.06, 0.028] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              INTELLIGENCE
            </motion.p>
            <motion.svg className="absolute inset-0 z-[4] hidden h-full w-full overflow-visible md:block" viewBox="0 0 900 620" aria-hidden="true">
              <defs>
	                <linearGradient id="signal-line" x1="0" x2="1" y1="0" y2="1">
	                  <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
	                  <stop offset="44%" stopColor="#D4AA69" stopOpacity="0.48" />
	                  <stop offset="58%" stopColor="#E8C280" stopOpacity="0.72" />
	                  <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
	                </linearGradient>
              </defs>
              {[
                "M52 458 C248 236 410 582 848 132",
                "M110 212 C310 84 444 376 794 310",
                "M180 534 C302 402 520 434 708 110",
              ].map((path, index) => (
                <g key={path}>
                  <path
                    d={path}
                    fill="none"
                    stroke="url(#signal-line)"
                    strokeWidth={index === 0 ? 2.2 : 1.3}
                    opacity={index === 0 ? 0.32 : 0.18}
                    strokeLinecap="round"
                  />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#signal-line)"
                    strokeWidth={index === 0 ? 2.8 : 1.6}
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 6px rgba(212,170,105,0.14))" }}
                    pathLength={1}
                    initial={prefersReducedMotion ? { pathLength: 1, opacity: index === 0 ? 0.62 : 0.34 } : { pathLength: 0.001, opacity: 0.36 }}
                    animate={{ pathLength: 1, opacity: index === 0 ? 0.72 : 0.4 }}
                    transition={{ duration: 1.05 + index * 0.16, ease: premiumEase, delay: 0.12 + index * 0.12 }}
                  />
                </g>
              ))}
            </motion.svg>
            <div className="absolute inset-0 z-[5] hidden md:block">
              {["Strategy", "Design", "Engineering", "Scale"].map((word, index) => (
              <motion.span
                key={word}
                className="absolute text-sm font-medium uppercase tracking-[0.22em] text-slate-300/76"
                style={{ left: `${12 + index * 19}%`, top: `${68 - (index % 2) * 42}%` }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.16 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 mt-0 min-h-[640px] overflow-x-clip px-6 pb-[92px] pt-[64px] md:min-h-[80svh] md:-mt-10 md:px-5 md:pb-20 md:pt-16 lg:-mt-20"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="pointer-events-none absolute inset-x-0 -top-28 h-72 bg-[linear-gradient(to_bottom,transparent,rgba(7,17,31,0.07)_42%,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 md:items-center lg:grid-cols-[1.38fr_1fr] lg:gap-24">
          <div className="order-1 max-w-3xl md:hidden">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.34em] text-[#F4C88B]/[0.72]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.46, ease: premiumEase }}
            >
              CAPABILITIES
            </motion.p>
            <motion.h2
              className="mt-10 text-balance font-display text-[46px] font-medium leading-[1.05] tracking-[-0.024em] text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: 0.04, ease: premiumEase }}
            >
              Four disciplines. One outcome.
            </motion.h2>
            <motion.p
              className="mt-7 max-w-[490px] text-pretty text-lg leading-8 text-slate-300/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: 0.1, ease: premiumEase }}
            >
              Web platforms, mobile products, AI automation, and digital transformation work together as one connected system for business growth.
            </motion.p>
          </div>
          <div className="order-1 hidden max-w-3xl md:order-2 md:block">
            <SceneTitle
              eyebrow="CAPABILITIES"
              mobileEyebrow="CAPABILITIES"
              title="Four disciplines. One outcome."
              text="Web platforms, mobile products, AI automation, and digital transformation work together as one connected system for business growth."
              eyebrowClassName="!text-[#F4C88B]/[0.72]"
              titleClassName="!mt-10 !text-[46px] !leading-[1.05] md:!mt-6 md:!text-[4.56rem] md:!leading-[1.08]"
              textClassName="!max-w-[490px] !text-slate-300/80"
            />
          </div>

          <div className="relative order-2 min-h-[22rem] md:order-1 md:min-h-[36rem] lg:-translate-y-7">
            <div className="mx-auto flex max-w-[350px] flex-col items-center px-1 pb-8 md:hidden">
              <motion.div
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#F4C88B]/30 bg-white/[0.075] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.24em] text-[#F8F6F1] shadow-[0_0_34px_rgba(244,200,139,0.12)]"
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.42 }}
                transition={{ duration: 0.48, ease: premiumEase }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.24),transparent_68%)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: prefersReducedMotion ? 0.2 : [0, 0.62, 0.22] }}
                  viewport={{ once: true, amount: 0.42 }}
                  transition={{ duration: 0.64, delay: 0.08, ease: premiumEase }}
                />
                <span className="relative">Enlivo Core</span>
              </motion.div>

              <div className="relative mt-4 w-full pb-2">
                <div className="pointer-events-none absolute left-1/2 top-0 h-[calc(100%-0.5rem)] w-px -translate-x-1/2 bg-white/[0.08]" />
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-0 h-[calc(100%-0.5rem)] w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#F4C88B]/82 via-[#D4AA69]/58 to-transparent"
                  initial={prefersReducedMotion ? { opacity: 0.82, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.38 }}
                  transition={{ duration: 0.65, delay: 0.18, ease: premiumEase }}
                />
                <motion.span
                  className="pointer-events-none absolute left-1/2 top-0 z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F4C88B] shadow-[0_0_18px_rgba(244,200,139,0.76)]"
                  initial={prefersReducedMotion ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 0 }}
                  whileInView={prefersReducedMotion ? { opacity: 0.85, y: 0 } : { opacity: [0, 1, 1, 0], y: [0, 0, 500, 500] }}
                  viewport={{ once: true, amount: 0.38 }}
                  transition={{ duration: 1.78, delay: 0.24, ease: premiumEase, times: [0, 0.12, 0.9, 1] }}
                />
                <div className="grid gap-3 pt-4">
                  {capabilityModules.map((item, index) => (
                    <motion.div
                      key={item.number}
                      className="relative mx-auto w-full max-w-[318px]"
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.44 }}
                      transition={{ duration: 0.54, delay: 0.38 + index * 0.13, ease: premiumEase }}
                    >
                      <motion.span
                        className="pointer-events-none absolute inset-x-5 -top-6 h-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.15),rgba(230,168,106,0.055)_44%,transparent_72%)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: prefersReducedMotion ? 0.13 : [0, 0.4, 0.13] }}
                        viewport={{ once: true, amount: 0.44 }}
                        transition={{ duration: 0.6, delay: 0.42 + index * 0.13, ease: premiumEase }}
                      />
                      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(9,18,32,0.78)),radial-gradient(circle_at_14%_0%,rgba(244,200,139,0.13),transparent_42%)] px-4 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/42 to-transparent" />
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#F4C88B]/20 bg-[#F4C88B]/10 px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.22em] text-[#F4C88B]">
                            {item.number}
                          </span>
                          <span className="h-px flex-1 bg-gradient-to-r from-[#F4C88B]/48 to-transparent" />
                        </div>
                        <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-white">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-200/84">{item.copy}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F4C88B]/[0.24] md:h-[520px] md:w-[520px]"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            />
            <motion.svg
              className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 overflow-visible md:h-[520px] md:w-[520px]"
              viewBox="0 0 520 520"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="service-core-glow">
                  <stop offset="0%" stopColor="#F4C88B" stopOpacity="0.37" />
                  <stop offset="60%" stopColor="#E6A86A" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#050D18" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="260" cy="260" r="196" fill="none" stroke="rgba(244,200,139,0.24)" strokeWidth="1.2" />
              <motion.circle
                cx="260"
                cy="260"
                r="196"
                fill="none"
                stroke="#F4C88B"
                strokeLinecap="round"
                strokeWidth="2.2"
                pathLength="1"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={prefersReducedMotion ? undefined : { pathLength: [0.08, 0.32, 0.08], pathOffset: [0, -0.45, -1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 12px rgba(244,200,139,0.36))" }}
              />
              {[["260 260", "260 62"], ["260 260", "458 260"], ["260 260", "260 458"], ["260 260", "62 260"]].map(
                ([from, to], index) => (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={from.split(" ")[0]}
                    y1={from.split(" ")[1]}
                    x2={to.split(" ")[0]}
                    y2={to.split(" ")[1]}
                    stroke="rgba(244,200,139,0.26)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={prefersReducedMotion ? undefined : { pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.65 }}
                  />
                ),
              )}
              <motion.circle
                cx="260"
                cy="260"
                r="128"
                fill="url(#service-core-glow)"
                animate={prefersReducedMotion ? undefined : { scale: [0.92, 1.08, 0.92], opacity: [0.62, 0.95, 0.62] }}
                transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "260px 260px" }}
              />
            </motion.svg>

            <motion.div
              className="absolute left-1/2 top-1/2 z-10 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-[#F4C88B]/20 bg-[#050D18]/48 text-center shadow-[0_0_96px_rgba(244,200,139,0.14)] backdrop-blur-xl"
            >
              <motion.span
                className="pointer-events-none absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(244,200,139,0.13),transparent_68%)]"
                animate={prefersReducedMotion ? undefined : { opacity: [0.44, 0.74, 0.44], scale: [0.96, 1.04, 0.96] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                <p className="text-sm font-semibold text-white">Enlivo Core</p>
                <p className="mt-2 px-4 text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-[#F4C88B]/70">
                  Strategy • Design • Engineering
                </p>
              </div>
            </motion.div>

            {serviceNodes.map((node, index) => {
              const Icon = node.Icon;
              return (
                <motion.div
                  key={node.label}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: node.x, top: node.y }}
                  initial={{ opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 rounded-full border border-[#F4C88B]/28 bg-white/[0.065] px-4 py-2.5 text-sm font-medium text-[#F8F1E4] shadow-[0_0_38px_rgba(244,200,139,0.15)] backdrop-blur-xl transition duration-300"
                    animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], x: [0, index % 2 ? 6 : -6, 0] }}
                    transition={{ duration: 5.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ y: -2, opacity: 1, borderColor: "rgba(244,200,139,0.42)" }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#F4C88B] shadow-[0_0_18px_rgba(244,200,139,0.82)]" />
                    <Icon size={15} className="text-[#F4C88B]/82" />
                    <span className="whitespace-nowrap">{node.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 overflow-visible px-6 pb-24 pt-14 md:min-h-[76svh] md:px-5 md:py-16"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(230,165,95,0.1)_0%,rgba(230,165,95,0.04)_30%,transparent_62%)]" />
        <div className="pointer-events-none absolute inset-x-[12%] top-[10%] h-28 bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.07),transparent_70%)] blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="hidden md:block">
            <SceneTitle
              eyebrow="WORK SHOWCASE"
              title="From presence to momentum."
              text="We turn digital presence into measurable business movement — better trust, stronger leads, automated workflows, and scalable growth."
              className="ml-auto max-w-3xl text-right"
            />
          </div>

          <motion.div
            className="md:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.34em] text-[#F4C88B]/70"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.46, ease: premiumEase }}
            >
              HOW WE CREATE MOMENTUM
            </motion.p>
            <motion.h2
              className="mt-5 max-w-[11ch] text-balance font-display text-[44px] font-medium leading-[1.05] tracking-[-0.024em] text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: 0.04, ease: premiumEase }}
            >
              From presence to momentum.
            </motion.h2>
            <motion.p
              className="mt-6 text-pretty text-lg leading-8 text-slate-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: 0.1, ease: premiumEase }}
            >
              We turn digital presence into measurable business movement — better trust, stronger leads, automated workflows, and scalable growth.
            </motion.p>

            <div className="relative mt-9 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(6,14,26,0.78)),radial-gradient(circle_at_50%_0%,rgba(244,200,139,0.12),transparent_42%)] px-4 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/38 to-transparent" />
              <div className="pointer-events-none absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-[#E6A86A]/9 blur-3xl" />
              <motion.div
                className="relative z-10 mx-auto flex w-fit rounded-full border border-[#F4C88B]/22 bg-[#F4C88B]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#F4C88B]"
                initial={prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.48, delay: 0.16, ease: premiumEase }}
              >
                Digital Presence
              </motion.div>

              <div className="relative z-10 mt-5">
                <div className="pointer-events-none absolute left-4 top-1 h-[calc(100%-0.5rem)] w-px bg-white/[0.08]" />
                <motion.div
                  className="pointer-events-none absolute left-4 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-gradient-to-b from-transparent via-[#F4C88B]/78 to-transparent"
                  initial={prefersReducedMotion ? { opacity: 0.8, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.42 }}
                  transition={{ duration: 0.68, delay: 0.3, ease: premiumEase }}
                />
                <motion.span
                  className="pointer-events-none absolute left-[0.69rem] top-1 z-20 h-2.5 w-2.5 rounded-full bg-[#F4C88B] shadow-[0_0_18px_rgba(244,200,139,0.76)]"
                  initial={prefersReducedMotion ? { opacity: 0.85, y: 0 } : { opacity: 0, y: 0 }}
                  whileInView={prefersReducedMotion ? { opacity: 0.85, y: 0 } : { opacity: [0, 1, 1, 0], y: [0, 0, 400, 400] }}
                  viewport={{ once: true, amount: 0.42 }}
                  transition={{ duration: 1.62, delay: 0.34, ease: premiumEase, times: [0, 0.12, 0.9, 1] }}
                />
                <div className="grid gap-3">
                  {outcomeEngineStages.map((stage, index) => (
                    <motion.div
                      key={stage.number}
                      className="relative pl-10"
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.46 }}
                      transition={{ duration: 0.54, delay: 0.46 + index * 0.14, ease: premiumEase }}
                    >
                      <span className="absolute left-[0.69rem] top-8 z-20 h-2.5 w-2.5 rounded-full border border-[#F4C88B]/70 bg-[#071426] shadow-[0_0_15px_rgba(244,200,139,0.52)]" />
                      <motion.span
                        className="pointer-events-none absolute inset-x-0 -top-7 h-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,200,139,0.18),rgba(230,168,106,0.06)_44%,transparent_72%)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: prefersReducedMotion ? 0.14 : [0, 0.46, 0.15] }}
                        viewport={{ once: true, amount: 0.46 }}
                        transition={{ duration: 0.62, delay: 0.48 + index * 0.14, ease: premiumEase }}
                      />
                      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(9,18,32,0.76)),radial-gradient(circle_at_14%_0%,rgba(244,200,139,0.11),transparent_42%)] px-4 py-3.5 shadow-[0_16px_42px_rgba(0,0,0,0.23)] backdrop-blur">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/35 to-transparent" />
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#F4C88B]/20 bg-[#F4C88B]/10 px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.22em] text-[#F4C88B]">
                            {stage.number}
                          </span>
                          <span className="h-px flex-1 bg-gradient-to-r from-[#F4C88B]/48 to-transparent" />
                        </div>
                        <div className="mt-3 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-semibold tracking-[-0.01em] text-[#F8F6F1]">{stage.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300/82">{stage.copy}</p>
                          </div>
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#F4C88B] shadow-[0_0_15px_rgba(244,200,139,0.72)]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative z-10 mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-[#F4C88B]/28 bg-[#F4C88B]/12 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#F8F6F1] shadow-[0_0_28px_rgba(244,200,139,0.11)]"
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.52, delay: 1.06, ease: premiumEase }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]" />
                Momentum Created
              </motion.div>
            </div>
          </motion.div>

          <div className="relative mt-12 hidden min-h-[23rem] md:block">
            <motion.svg viewBox="0 0 1200 420" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <defs>
                <linearGradient id="motion-path" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E6A86A" stopOpacity="0" />
                  <stop offset="45%" stopColor="#F4C88B" stopOpacity="1" />
                  <stop offset="62%" stopColor="#D9B27A" stopOpacity="0.86" />
                  <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M22 300 C220 60 398 382 598 188 C754 36 906 80 1170 248"
                fill="none"
                stroke="rgba(244,200,139,0.2)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 8px rgba(212,175,110,0.08))" }}
              />
              <motion.path
                d="M22 300 C220 60 398 382 598 188 C754 36 906 80 1170 248"
                fill="none"
                stroke="url(#motion-path)"
                strokeWidth="3.8"
                strokeLinecap="round"
                pathLength="1"
                animate={mobileFastMode ? undefined : { pathLength: [0.1, 1, 0.36], pathOffset: [0, -0.2, -0.44], opacity: [0.33, 1, 0.37] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(212,175,110,0.08))" }}
              />
              <motion.circle
                cx={22}
                cy={300}
                r="7"
                fill="#F4C88B"
                animate={
                  mobileFastMode
                    ? undefined
                    : {
                        cx: [22, 310, 598, 875, 1170],
                        cy: [300, 186, 188, 92, 248],
                        opacity: [0, 1, 1, 1, 0],
                        scale: [0.8, 1.08, 1, 1.08, 0.8],
                      }
                }
                transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 16px rgba(244,200,139,0.72))" }}
              />
            </motion.svg>
            {transformationStages.map((stage, index) => (
              <motion.div
                key={stage.label}
                className="absolute"
                style={{ left: stage.left, top: stage.top }}
                initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.42 : 1, delay: isMobile ? Math.min(index * 0.06, 0.08) : index * 0.18 }}
              >
                <motion.p
                  className="text-3xl font-semibold tracking-normal text-white/80 md:text-5xl"
                  animate={mobileFastMode ? undefined : { opacity: [0.72, 0.72, 1, 0.72, 0.72], scale: [1, 1, 1.04, 1, 1] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", times: stagePulse(index) }}
                >
                  {stage.label}
                </motion.p>
                <motion.p
                  className="mt-2 text-sm font-medium text-[#F4C88B]/70 md:text-base"
                  animate={mobileFastMode ? undefined : { opacity: [0.42, 0.42, 0.95, 0.42, 0.42], y: [4, 4, 0, 4, 4] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", times: stagePulse(index) }}
                >
                  {stage.copy}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 flex min-h-[auto] items-start overflow-visible px-6 pb-28 pt-20 md:min-h-[68svh] md:items-center md:px-5 md:pb-20 md:pt-16"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <motion.div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6A86A]/8 blur-2xl md:h-[44rem] md:w-[44rem] md:bg-[#E6A86A]/10 md:blur-3xl" animate={mobileFastMode ? undefined : { scale: [0.9, 1.12, 0.9] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="relative mx-auto w-full max-w-7xl md:-translate-y-3">
          <div className="pointer-events-none absolute -left-16 top-0 h-64 w-[46rem] rounded-full bg-[#E6A86A]/12 blur-3xl" />
          <motion.p
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-18%" }}
            transition={{ duration: isMobile ? 0.42 : 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[57.5rem] text-balance font-display text-[48px] font-semibold leading-[1.04] tracking-[-0.028em] text-white md:text-8xl md:leading-[1]"
          >
            Build the digital presence markets remember.
          </motion.p>
          <motion.p
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.42 : 0.8, delay: isMobile ? 0.08 : 0.16 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300/82 md:mt-8 md:text-lg md:leading-8"
          >
            Turn your website, product, and automation systems into digital experiences your market remembers.
          </motion.p>
          <motion.div
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.42 : 0.8, delay: isMobile ? 0.08 : 0.25 }}
            className="group relative mt-10 inline-flex md:mt-12"
          >
            <span className="pointer-events-none absolute -inset-8 rounded-full bg-[#E6A86A]/14 blur-3xl transition duration-500 group-hover:bg-[#E6A86A]/20" />
            <MagneticLink href="/contact" className="group relative inline-flex items-center gap-4 text-xl font-semibold text-[#F4C88B]">
              Start the build
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[#F4C88B]/20 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:border-[#F4C88B]/36 group-hover:bg-[#F4C88B]/10 group-hover:shadow-[0_0_26px_rgba(244,200,139,0.16)]">
                <ArrowRight size={22} className="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
              </span>
            </MagneticLink>
          </motion.div>
        </div>
      </motion.section>
      </div>
    </>
  );
}
