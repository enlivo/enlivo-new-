"use client";

import { LazyMotion, domAnimation, m as motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import { MagneticLink, useIsMobile } from "./motion";

const particles = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 31) % 88)}%`,
  top: `${10 + ((index * 19) % 78)}%`,
  delay: index * 0.17,
}));

const headlineLines = ["Build What", "Markets", "Remember"];

export function CinematicHero() {
  const showIntro = false;
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const mobileFastMode = isMobile || prefersReducedMotion;
  const visibleParticles = isMobile ? particles.slice(0, 2) : particles;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 48, damping: 22, mass: 0.9 });
  const springY = useSpring(pointerY, { stiffness: 48, damping: 22, mass: 0.9 });
  const skyX = useTransform(springX, [-0.5, 0.5], isMobile ? [-4, 4] : [-14, 14]);
  const skyY = useTransform(springY, [-0.5, 0.5], isMobile ? [-3, 3] : [-8, 8]);
  const flareX = useTransform(springX, [-0.5, 0.5], isMobile ? [8, -8] : [30, -30]);
  const flareY = useTransform(springY, [-0.5, 0.5], isMobile ? [6, -6] : [20, -20]);
  const cloudDrift = isMobile ? [-4, 4, -4] : [-28, 28, -28];
  const blurDrift = isMobile ? [0, 4, -3, 0] : [0, 7, -4, 0];
  const blurDriftTwo = isMobile ? [0, -4, 3, 0] : [0, -8, 4, 0];
  const glowTravel = isMobile ? [0, 10, -6, 0] : [0, 30, 0];
  const glowTravelTwo = isMobile ? [0, -8, 0] : [0, -24, 0];

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <LazyMotion features={domAnimation}>
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate flex h-[100svh] min-h-[620px] items-center justify-center overflow-hidden px-5 pt-28 md:h-screen md:min-h-[720px]"
    >
      {/* Adds local hero keyframes for image-only Ken Burns motion and the bottom scroll cue. */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        .hero-kenburns {
          animation: kenburns 12s ease-out forwards;
        }

        .hero-scroll-indicator {
          animation: bounce 1.8s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 -z-20 bg-[#050D18]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-18 bg-[radial-gradient(circle_at_20%_20%,rgba(244,200,139,0.11),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(230,168,106,0.08),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(244,200,139,0.05),transparent_28%)] opacity-80 blur-[22px] md:blur-[58px]"
        animate={mobileFastMode ? undefined : { x: cloudDrift }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Separates parallax from image zoom so Ken Burns affects only the background image layer. */}
      <motion.div
        className="absolute inset-0 -z-20 overflow-hidden"
        style={{ x: skyX, y: skyY }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 1.1 } }}
      >
        <div className="hero-bg-image hero-kenburns absolute inset-0 bg-cover bg-center" />
      </motion.div>
      <motion.div
        className="hero-bg-image pointer-events-none absolute inset-0 -z-10 hidden bg-cover bg-center opacity-14 blur-lg md:block"
        animate={{ opacity: [0.07, 0.12, 0.08], scale: [1, 1.015, 1.006], x: [-20, 20, -20], y: blurDrift }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-bg-image pointer-events-none absolute inset-0 -z-10 hidden bg-cover bg-center opacity-8 blur-2xl mix-blend-screen md:block"
        animate={{ opacity: [0.04, 0.09, 0.06], scale: [1.004, 1.024, 1.01], x: [20, -20, 20], y: blurDriftTwo }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_54%,rgba(244,200,139,0.065),transparent_25rem),linear-gradient(90deg,rgba(5,13,24,0.5)_0%,rgba(5,13,24,0.14)_48%,rgba(5,13,24,0.46)_100%),linear-gradient(180deg,rgba(5,13,24,0.28)_0%,rgba(5,13,24,0.06)_42%,rgba(5,13,24,0.58)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_34%,rgba(5,13,24,0.18)_64%,rgba(5,13,24,0.64)_100%)]" />

      <motion.div
        style={{ x: flareX, y: flareY }}
        className="absolute left-[42%] top-[44%] z-0 h-44 w-44 rounded-full bg-[#F4C88B]/18 blur-[38px] md:h-60 md:w-60 md:bg-[#F4C88B]/28 md:blur-[92px]"
        animate={mobileFastMode ? undefined : { opacity: [0.16, 0.48, 0.24], scale: [0.86, 1.18, 0.94] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[9%] z-0 hidden h-[34rem] w-[34rem] rounded-full bg-[#D9B27A]/13 blur-[104px] md:block"
        animate={{ opacity: [0.22, 0.52, 0.3], y: [0, 30, 0], x: glowTravel }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[4%] left-[5%] z-0 hidden h-[38rem] w-[38rem] rounded-full bg-[#E6A86A]/18 blur-[108px] md:block"
        animate={{ opacity: [0.15, 0.4, 0.22], y: [0, -24, 0], x: glowTravelTwo }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(112deg,transparent_46%,rgba(244,200,139,0.12)_62%,transparent_78%)] opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[180px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(4,10,20,0.48)_45%,#050D18_100%)]" />
      <motion.div
        className="absolute left-1/2 top-[47%] z-0 hidden h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[#F4C88B]/11 blur-[104px] md:block"
        animate={{ opacity: [0.14, 0.3, 0.18], scale: [0.92, 1.06, 0.96] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg className="absolute inset-0 z-0 hidden h-full w-full overflow-visible md:block" viewBox="0 0 1440 900" aria-hidden="true">
        <defs>
          <linearGradient id="flagship-arc" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E6B97A" stopOpacity="0" />
            <stop offset="42%" stopColor="#F4C88B" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#F8F6F1" stopOpacity="0" />
          </linearGradient>
          <filter id="arc-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M80 720 C360 560 590 458 812 304 C1036 148 1228 142 1390 232"
          fill="none"
          stroke="url(#flagship-arc)"
          strokeLinecap="round"
          strokeWidth="2.2"
          filter="url(#arc-glow)"
          pathLength="1"
          animate={{ pathLength: [0.08, 0.82, 0.22], pathOffset: [0, -0.2, -0.42], opacity: [0, 0.74, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.svg>
      <motion.div
        className="absolute right-[13%] top-[8%] z-0 hidden h-[86%] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#F4C88B]/26 to-transparent md:block"
        animate={{ opacity: [0.18, 0.7, 0.24], x: isMobile ? [0, 8, 0] : [0, 30, 0] }}
        transition={{ duration: isMobile ? 6.6 : 6.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[25%] top-[0] z-0 hidden h-full w-px rotate-[32deg] bg-gradient-to-b from-transparent via-white/16 to-transparent md:block"
        animate={{ opacity: [0.12, 0.5, 0.18], x: isMobile ? [0, -6, 0] : [0, -24, 0] }}
        transition={{ duration: isMobile ? 7 : 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {visibleParticles.map((particle) => (
        <motion.span
          key={particle.id}
        className="absolute z-0 h-1 w-1 rounded-full bg-[#F4C88B]/35 shadow-[0_0_14px_rgba(244,200,139,0.28)] md:bg-[#F4C88B]/45 md:shadow-[0_0_14px_rgba(244,200,139,0.38)]"
        style={{ left: particle.left, top: particle.top }}
        animate={
          isMobile
            ? { opacity: [0.08, 0.28, 0.08] }
            : { opacity: [0, 0.32, 0], y: [0, -18 - (particle.id % 4) * 8, -44], x: [0, particle.id % 3 === 0 ? 14 : particle.id % 2 ? 7 : -10, 0] }
        }
        transition={{ duration: isMobile ? 3.8 : 11 + (particle.id % 6), repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
      />
      ))}

      <div
        className="pointer-events-none absolute left-[56%] top-[42%] z-[1] h-9 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(8,12,16,0.18)] blur-md md:left-[58%] md:top-[44%]"
        aria-hidden="true"
      />
      <motion.svg
        viewBox="0 0 84 34"
        className="pointer-events-none absolute left-[56%] top-[42%] z-[2] h-auto w-[42px] text-[rgba(12,18,24,0.85)] blur-[0.2px] md:left-[58%] md:top-[44%] md:w-[42px]"
        initial={{ x: isMobile ? 8 : -20, y: isMobile ? -2 : 8, opacity: 0.85, rotate: isMobile ? 1 : -4, scale: isMobile ? 1 : 0.95 }}
        animate={
          isMobile
            ? { opacity: [0.76, 0.9, 0.76] }
            : {
                x: [-20, 40, 120, 190],
                y: [8, -8, -16, -4],
                opacity: 0.85,
                rotate: [-4, 0, 5, 2],
                scale: [0.95, 1, 1.04, 1],
              }
        }
        transition={{ duration: isMobile ? 4 : 16, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        aria-hidden="true"
      >
        <path
          d="M40 18 C31 8 17 7 2 14 C19 15 29 22 39 26 C48 21 59 14 82 12 C62 7 48 9 40 18Z"
          fill="currentColor"
        />
      </motion.svg>

      {/* Adds a localized text vignette for readability without darkening the viewport edges. */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] z-[1] h-[34rem] w-[92vw] max-w-[70vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,transparent_70%)] max-md:max-w-none" />

      <motion.div
        className="hero-content relative z-10 mx-auto flex w-full max-w-5xl -translate-y-[128px] flex-col items-center pt-16 text-center will-change-[transform,opacity] md:-translate-y-[210px] md:pt-24"
      >
        <motion.div className="flex max-w-[850px] flex-col items-center">
          <motion.p
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: isMobile ? 0.42 : 0.8, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="hero-subtitle text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C88B]/78 will-change-[transform,opacity]"
          >
            Private Limited Technology Company
          </motion.p>
          <motion.h1 className="hero-title mt-7 max-w-[850px] text-balance font-display text-5xl font-semibold leading-[1.01] tracking-[-0.028em] text-[#F8F6F1] drop-shadow-[0_0_24px_rgba(244,200,139,0.1)] sm:text-6xl md:text-7xl lg:text-[5.65rem]">
            {headlineLines.map((line, index) => (
              <motion.span
                key={line}
                className="hero-title block pb-[0.03em] will-change-[transform,opacity]"
                initial={mobileFastMode ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={mobileFastMode ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={
                  mobileFastMode
                    ? { duration: 0 }
                    : { duration: 0.8, delay: 0.12 + index * 0.18, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: isMobile ? 0.42 : 0.8, delay: isMobile ? 0.16 : 1.95, ease: [0.22, 1, 0.36, 1] }}
            className="hero-subtitle mt-8 max-w-3xl text-pretty text-base leading-8 text-[rgba(255,255,255,0.82)] [text-shadow:0_0_18px_rgba(0,0,0,0.18)] will-change-[transform,opacity] md:text-lg"
          >
            We engineer digital systems that shape market memory.
          </motion.p>
          {/* Splits CTA hierarchy into a primary ivory pill and a lower-emphasis text link. */}
          <motion.div
            className="hero-actions mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.div
              initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: isMobile ? 0.42 : 0.75, delay: isMobile ? 0.22 : 2.3, ease: [0.22, 1, 0.36, 1] }}
              className="will-change-[transform,opacity]"
            >
              <div className="group rounded-full">
                <MagneticLink
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#F5F0E8] px-8 py-3.5 text-sm font-medium text-[#1a1a1a] shadow-[0_18px_44px_rgba(244,200,139,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_26px_64px_rgba(244,200,139,0.2)]"
                >
                  Start Your Project
                </MagneticLink>
              </div>
            </motion.div>
            <motion.div
              initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: isMobile ? 0.42 : 0.75, delay: isMobile ? 0.28 : 2.42, ease: [0.22, 1, 0.36, 1] }}
              className="will-change-[transform,opacity]"
            >
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center px-2 py-3 text-sm font-medium text-white/[0.85] underline-offset-4 transition hover:-translate-y-0.5 hover:underline"
              >
                See Our Work →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.055] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_30%,#fff_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,#fff_0_1px,transparent_1px)] [background-size:3px_3px,4px_4px]" />
      {/* Places a section-bound scroll cue at the hero bottom to suggest continuation. */}
      <div className="hero-scroll-indicator pointer-events-none absolute bottom-12 left-1/2 z-30 flex flex-col items-center gap-2 text-white/50 md:bottom-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.28em]">Scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {showIntro ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 2.5, times: [0, 0.78, 1], ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {particles.slice(0, 6).map((particle) => (
            <motion.span
              key={`intro-${particle.id}`}
              className="absolute h-1 w-1 rounded-full bg-[#F4C88B]/55 shadow-[0_0_16px_rgba(244,200,139,0.5)]"
              style={{ left: particle.left, top: particle.top }}
              animate={{ opacity: [0, 0.55, 0], y: [20, -26, -44] }}
              transition={{ duration: 2.3, ease: "easeInOut", delay: particle.id * 0.05 }}
            />
          ))}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
            animate={{ opacity: [0, 1, 1, 0], y: [18, 0, 0, -12], filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"] }}
            transition={{ duration: 2.35, times: [0, 0.24, 0.72, 1], ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mb-7 grid h-16 w-16 place-items-center rounded-full border border-[#F4C88B]/30 bg-[#F4C88B]/10 text-lg font-black text-[#F8F6F1] shadow-[0_0_44px_rgba(244,200,139,0.2)]"
            >
              E
            </motion.div>
            <p className="text-sm font-semibold uppercase tracking-[0.48em] text-[#F4C88B]/82">ENLIVO</p>
            <p className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.028em] text-[#F8F6F1] md:text-6xl">
              Build What Markets Remember
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
    </LazyMotion>
  );
}
