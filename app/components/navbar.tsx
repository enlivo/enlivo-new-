"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-[26px] z-50 px-5">
      <nav className="relative mx-auto flex h-[60px] w-full max-w-[1180px] items-center justify-between rounded-full border border-[#F4C88B]/18 bg-[rgba(8,10,14,0.34)] px-[18px] shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-[22px] backdrop-saturate-[140%]">
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
            className="h-[54px] w-auto shrink-0 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.12)] transition duration-300 group-hover:brightness-125"
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
          className="grid h-10 w-10 place-items-center rounded-full border border-[#F4C88B]/18 bg-[#F8F1E4]/[0.05] text-[#F8F6F1] backdrop-blur-xl transition hover:-translate-y-px hover:border-[#F4C88B]/28 hover:text-[#F4C88B] lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 max-w-[1180px] rounded-[2rem] border border-[#F4C88B]/18 bg-[rgba(8,10,14,0.62)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-[22px] backdrop-saturate-[140%] lg:hidden"
        >
          {navItems.map((item) => {
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
            Start a Project
          </Link>
        </motion.div>
      ) : null}
    </header>
  );
}
