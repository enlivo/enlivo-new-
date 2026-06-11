"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../lib/content";

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 md:absolute md:inset-x-0 md:top-[26px] md:h-auto md:px-5">
      <nav className="relative flex h-full w-full max-w-[390px] items-center justify-between border-b border-white/10 bg-[rgba(5,13,24,0.72)] px-5 shadow-[0_14px_44px_rgba(0,0,0,0.22)] backdrop-blur-[18px] backdrop-saturate-[140%] md:mx-auto md:h-[60px] md:max-w-[1180px] md:rounded-full md:border md:border-[#F4C88B]/22 md:bg-[rgba(8,10,14,0.34)] md:px-[18px] md:shadow-[0_18px_60px_rgba(0,0,0,0.25)] md:backdrop-blur-[22px]">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 overflow-visible"
          aria-label="Enlivo home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo/logo.png"
            alt="Enlivo Global Tech Solutions logo"
            width={640}
            height={640}
            priority
            sizes="54px"
            className="h-[46px] w-auto shrink-0 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.12)] transition duration-300 group-hover:brightness-125 md:h-[54px]"
          />
          <span className="flex min-w-max flex-col justify-center overflow-visible leading-none">
            <span className="block text-[14px] font-semibold tracking-[0.31em] text-[#F8F6F1]/94 sm:text-[15px]">
              ENLIVO
            </span>
            <span className="mt-1 block text-[7px] font-normal uppercase tracking-[0.35em] text-[#D4AF6E]/74 max-[420px]:hidden sm:text-[8px]">
              Global Tech Solutions
            </span>
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.02em] outline-none transition duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[#f6d9a4] focus-visible:text-[#f6d9a4] ${
                  active ? "text-[#f6d9a4]" : "text-[rgba(248,246,241,0.72)]"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 rounded-full border border-[rgba(212,175,110,0.35)] bg-[rgba(212,175,110,0.08)] shadow-[0_0_18px_rgba(212,175,110,0.12)] backdrop-blur-[14px] transition duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="group inline-flex h-[38px] items-center justify-center rounded-full bg-[#F8F1E4] px-[22px] text-[13px] font-semibold text-[#111827] shadow-none transition duration-300 hover:-translate-y-px hover:shadow-[0_16px_48px_rgba(244,200,139,0.25)]"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#F4C88B]/18 bg-white/[0.05] text-[#F8F6F1] backdrop-blur-xl transition hover:-translate-y-px hover:border-[#F4C88B]/28 hover:text-[#F4C88B] lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-5 top-20 z-50 rounded-[1.5rem] border border-[#F4C88B]/18 bg-[rgba(8,10,14,0.9)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-[18px] backdrop-saturate-[140%] md:static md:mx-auto md:mt-4 md:w-auto md:max-w-[1180px] md:rounded-[2rem] md:bg-[rgba(8,10,14,0.62)] md:backdrop-blur-[22px] lg:hidden"
        >
          {mobileNavItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-full border px-4 py-3 text-[13px] font-medium outline-none transition duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-[#f6d9a4] focus-visible:text-[#f6d9a4] ${
                  active
                    ? "border-[rgba(212,175,110,0.35)] bg-[rgba(212,175,110,0.08)] text-[#f6d9a4] shadow-[0_0_18px_rgba(212,175,110,0.12)] backdrop-blur-[14px]"
                    : "border-transparent text-[rgba(248,246,241,0.72)] hover:bg-[rgba(212,175,110,0.08)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-[#F8F1E4] px-4 py-3 text-center text-[13px] font-semibold text-[#111827] transition hover:shadow-[0_16px_48px_rgba(244,200,139,0.25)]"
          >
            Start Your Project
          </Link>
        </motion.div>
      ) : null}
    </header>
  );
}
