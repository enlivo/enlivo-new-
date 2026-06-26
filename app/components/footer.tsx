import Link from "next/link";
import { ArrowRight } from "lucide-react";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const programLinks = ["Web Development", "UI/UX Design", "AI Automation", "Cloud & DevOps"];
const secondaryPhone = "+91 77278 67878";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/18 bg-[linear-gradient(180deg,#091522_0%,#050d18_48%,#02060d_100%)] px-5 py-12 text-white md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#D4AF37]/8 via-[#050D18]/38 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-6 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[92px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/34 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 rounded-[1.75rem] border border-[#D4AF37]/12 bg-white/[0.03] px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-[16px] max-md:mx-auto max-md:max-w-[92%] max-md:gap-4 max-md:px-5 max-md:py-5 md:px-8 md:py-7 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="max-md:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#F4C88B]/78 max-md:tracking-[0.24em]">Enlivo Global Tech Solutions</p>
            <p className="mt-3 max-w-2xl font-display text-2xl font-medium leading-[1.08] tracking-[-0.024em] text-white max-md:mx-auto max-md:max-w-[18rem] md:text-3xl">
              Digital systems with memory, motion, and intent.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 max-md:items-center lg:items-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#F4C88B,#D4AF37)] px-6 py-3 text-sm font-semibold text-[#07111F] shadow-[0_18px_48px_rgba(212,175,55,0.22)] transition duration-300 hover:-translate-y-px hover:shadow-[0_24px_60px_rgba(212,175,55,0.3)] max-md:self-center"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:contact@enlivotechnologies.com"
              className="text-xs font-medium tracking-[0.18em] text-[#F8F6F1]/62 transition duration-300 hover:text-[#F4C88B] max-md:text-[0.64rem] max-md:tracking-[0.14em]"
            >
              contact@enlivotechnologies.com
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-10 text-center max-md:grid-cols-2 max-md:gap-5 md:grid-cols-3 md:gap-8 md:text-left">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.34em] text-[#F4C88B]/84 max-md:tracking-[0.26em]">Company</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#F8F6F1]/64 max-md:mt-4 max-md:gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.34em] text-[#F4C88B]/84 max-md:tracking-[0.26em]">Programs</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#F8F6F1]/64 max-md:mt-4 max-md:gap-2.5">
              {programLinks.map((program) => (
                <Link
                  key={program}
                  href="/careers#openings"
                  className="w-fit transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]"
                >
                  {program}
                </Link>
              ))}
            </div>
          </div>

          <div className="max-md:hidden">
            <h2 className="text-xs font-bold uppercase tracking-[0.34em] text-[#F4C88B]/84">Contact</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#F8F6F1]/64">
              <a href="mailto:contact@enlivotechnologies.com" className="w-fit transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]">
                contact@enlivotechnologies.com
              </a>
              <a href="tel:+917727867878" className="w-fit transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]">
                {secondaryPhone}
              </a>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mx-auto mt-5 max-w-[92%] rounded-[1.5rem] border border-[#D4AF37]/12 bg-white/[0.03] px-5 py-4 text-center shadow-[0_14px_44px_rgba(0,0,0,0.16)] backdrop-blur-[16px]">
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-[#F4C88B]/84">Contact</h2>
            <div className="mt-3 grid gap-2 text-sm text-[#F8F6F1]/66">
              <a href="mailto:contact@enlivotechnologies.com" className="transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]">
                contact@enlivotechnologies.com
              </a>
              <a href="tel:+917727867878" className="transition duration-300 hover:text-[#F4C88B] hover:drop-shadow-[0_0_10px_rgba(244,200,139,0.22)]">
                {secondaryPhone}
              </a>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[#D4AF37]/12 pt-4 text-center text-[0.74rem] leading-5 text-[#F8F6F1]/56 md:mt-8 md:flex-row md:items-center md:justify-between md:text-sm md:leading-normal">
          <p className="font-medium tracking-[0.08em] text-[#F4C88B]/78 max-md:tracking-[0.06em]">Engineered in Bangalore. Built for ambitious digital systems.</p>
          <p>Copyright 2026 Enlivo Global Tech Solutions Private Limited.</p>
        </div>
      </div>
    </footer>
  );
}
