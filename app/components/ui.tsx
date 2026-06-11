"use client";

import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FadeUp, HeroReveal, MotionCard } from "./motion";

const icons = {
  monitor: MonitorSmartphone,
  smartphone: Smartphone,
  bot: Bot,
  briefcase: BriefcaseBusiness,
  graduation: GraduationCap,
  code: Code2,
  sparkles: Sparkles,
  shield: ShieldCheck,
};

type IconName = keyof typeof icons;

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`premium-bg relative overflow-hidden pt-0 text-white md:pt-28 ${className}`}>{children}</div>;
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeUp className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F4C88B]">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] tracking-[-0.024em] text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-pretty text-base leading-8 text-slate-400 md:text-lg">{text}</p> : null}
    </FadeUp>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const safeHref = href?.trim();
  const classes =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#F4C88B,#D9B27A)] text-[#07111F] shadow-xl shadow-[#F4C88B]/20 hover:shadow-[#F4C88B]/30"
      : "border border-[#F4C88B]/16 bg-[#050D18]/40 text-[#F8F6F1] shadow-sm shadow-black/10 hover:bg-[#F4C88B]/10";

  if (!safeHref) {
    return (
      <span
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold opacity-60 ${classes}`}
        aria-disabled="true"
      >
        {children}
        <ArrowRight size={16} />
      </span>
    );
  }

  return (
    <Link
      href={safeHref}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${classes}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function ServiceCard({
  title,
  summary,
  items,
  icon,
  index = 0,
  featured = false,
}: {
  title: string;
  summary: string;
  items: string[];
  icon: IconName;
  index?: number;
  featured?: boolean;
}) {
  const Icon = icons[icon];
  return (
    <MotionCard
      className={`motion-reveal premium-card h-full rounded-3xl transition-[box-shadow,transform,border-color] duration-500 ${
        featured
          ? "relative z-10 border-[#F4C88B]/34 p-7 shadow-[0_34px_110px_rgba(0,0,0,0.38),0_0_90px_rgba(244,200,139,0.18)] lg:scale-[1.04] xl:scale-[1.08]"
          : "p-6 hover:border-[#F4C88B]/24 hover:shadow-[0_30px_94px_rgba(0,0,0,0.36),0_0_54px_rgba(244,200,139,0.08)]"
      }`}
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`mb-6 grid place-items-center rounded-2xl border border-[#F4C88B]/20 bg-[#E6A86A]/12 text-[#F4C88B] shadow-lg shadow-black/30 ${featured ? "h-16 w-16 shadow-[#F4C88B]/12" : "h-14 w-14"}`}>
        <Icon size={25} />
      </div>
      <h3 className={`font-display font-medium tracking-[-0.02em] text-white ${featured ? "text-2xl" : "text-xl"}`}>{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{summary}</p>
      <div className="mt-6 grid gap-3">
        {items.slice(0, 6).map((item) => (
          <p key={item} className="flex items-start gap-3 text-sm text-slate-300">
            <Check className="mt-0.5 shrink-0 text-[#F4C88B]" size={16} />
            {item}
          </p>
        ))}
      </div>
    </MotionCard>
  );
}

export function HeroBlock({
  eyebrow,
  title,
  text,
  primaryHref = "/contact",
  secondaryHref = "/services",
  primary = "Start Your Project",
  secondary = "Explore Services",
  children,
  afterActions,
  compact = false,
  mobileTopPadding = "default",
}: {
  eyebrow: string;
  title: string;
  text: string;
  primaryHref?: string;
  secondaryHref?: string;
  primary?: string;
  secondary?: string;
  children?: ReactNode;
  afterActions?: ReactNode;
  compact?: boolean;
  mobileTopPadding?: "default" | "large";
}) {
  const spacingClass =
    mobileTopPadding === "large"
      ? compact
        ? "pb-[4.5rem] pt-40 md:pb-24 md:pt-24"
        : "pb-20 pt-40 md:pb-28 md:pt-28"
      : compact
        ? "pb-[4.5rem] pt-32 md:pb-24 md:pt-24"
        : "pb-20 pt-32 md:pb-28 md:pt-28";

  return (
    <section className={`relative px-5 ${spacingClass}`}>
      <div className={`mx-auto grid max-w-7xl items-center lg:grid-cols-[1.05fr_0.95fr] ${compact ? "gap-10" : "gap-12"}`}>
        <div>
          <HeroReveal>
            <p className="inline-flex rounded-full border border-[#F4C88B]/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C88B] shadow-sm shadow-black/20">{eyebrow}</p>
          </HeroReveal>
          <HeroReveal delay={0.08}>
            <h1 className="mt-6 max-w-5xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.028em] text-white md:text-7xl">
              {title}
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-400 md:text-xl">{text}</p>
          </HeroReveal>
          <HeroReveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primary}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">{secondary}</ButtonLink>
          </HeroReveal>
          {afterActions ? <HeroReveal delay={0.32}>{afterActions}</HeroReveal> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function MetricPanel() {
  return (
    <HeroReveal delay={0.22} className="blue-panel rounded-[2rem] p-5 md:p-8">
      <div className="rounded-[1.5rem] border border-white/10 bg-[#050D18]/82 p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-sm text-slate-500">Delivery Focus</p>
            <p className="mt-1 text-2xl font-semibold text-white">Websites • Apps • AI</p>
          </div>
          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/15">Active</span>
        </div>
        <div className="grid gap-4 py-5 sm:grid-cols-2">
          {["Advanced UI/UX Intelligence", "Motion-Led Digital Experiences", "Conversion-Focused Design Systems", "AI-Powered Business Automation"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[linear-gradient(135deg,#E6A86A,#D9B27A)] p-5 text-[#050D18] shadow-xl shadow-[#F4C88B]/20">
          <p className="text-sm uppercase tracking-[0.22em] text-[#050D18]/70">Bangalore, India</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight">Private Limited technology partner for premium digital execution.</p>
        </div>
      </div>
    </HeroReveal>
  );
}
