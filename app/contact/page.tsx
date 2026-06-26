import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageTransition } from "../components/motion";
import { Shell } from "../components/ui";
import { createPageMetadata } from "../lib/seo";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Enlivo | Website, App & UI UX Company in Bangalore",
  description:
    "Contact Enlivo Global Tech Solutions Private Limited in Bangalore for website development, app development, UI UX design, AI automation, and internship inquiries.",
  path: "/contact",
  keywords: [
    "Enlivo Global Tech Solutions Private Limited",
    "website development company in Bangalore",
    "app development company in Bangalore",
    "UI UX design company in Bangalore",
    "business website development India",
    "AI automation services",
    "internship program in Bangalore",
  ],
});

const secondaryPhone = "+91 77278 67878";

export default function ContactPage() {
  return (
    <PageTransition>
      <Shell className="min-h-screen">
        <section className="relative flex min-h-[calc(100vh-7rem)] items-center overflow-hidden px-5 pb-16 pt-32 md:py-20">
          <div className="pointer-events-none absolute left-[-22rem] top-10 h-[44rem] w-[58rem] rounded-full bg-[#E6A86A]/10 blur-[150px]" />
          <div className="pointer-events-none absolute right-[-18rem] bottom-[-14rem] h-[42rem] w-[58rem] rounded-full bg-[#F4C88B]/7 blur-[150px]" />
          <p className="sr-only">
            Enlivo Global Tech Solutions Private Limited, Bangalore, Karnataka, India. Phone: +91 77278 67878. Email: contact@enlivotechnologies.com. Website: https://enlivo.com.
          </p>

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative max-w-3xl lg:-translate-y-7">
              <div className="pointer-events-none absolute left-[-10rem] top-[-8rem] h-[26rem] w-[34rem] rounded-full bg-[#F4C88B]/8 blur-[120px]" />
              <p className="inline-flex rounded-full border border-[#F4C88B]/18 bg-white/[0.045] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4C88B]/82 shadow-sm shadow-black/20">
                Contact
              </p>
              <h1 className="relative mt-7 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.024em] text-white sm:text-5xl md:text-6xl">
                Start the right digital conversation.
              </h1>
              <p className="relative mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-400 md:text-xl">
                Tell us what you want to build, improve, or automate. We&apos;ll help shape the next clear step.
              </p>

              <div className="relative mt-8 flex flex-wrap items-center gap-2">
                {["Project", "Consultation", "Internship"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#F4C88B]/14 bg-white/[0.035] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#F4C88B]/68"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="relative mt-10 flex max-w-3xl flex-wrap items-center gap-x-7 gap-y-3 text-[0.94rem] text-[#F8F6F1]/70">
                <a href="mailto:contact@enlivotechnologies.com" className="flex items-center gap-2.5 transition hover:text-[#F4C88B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/78 shadow-[0_0_12px_rgba(244,200,139,0.28)]" />
                  contact@enlivotechnologies.com
                </a>
                <a href="tel:+917727867878" className="flex items-center gap-2.5 transition hover:text-[#F4C88B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/78 shadow-[0_0_12px_rgba(244,200,139,0.28)]" />
                  {secondaryPhone}
                </a>
                <a
                  href="https://wa.me/917727867878"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#F4C88B]/14 bg-[rgba(5,13,24,0.52)] px-4 py-2.5 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#F4C88B]/28 hover:shadow-[0_18px_48px_rgba(0,0,0,0.24),0_0_22px_rgba(212,175,110,0.12)]"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-[#F4C88B]/16 bg-white/[0.03] text-[#D4AF6E] transition duration-300 group-hover:shadow-[0_0_14px_rgba(212,175,110,0.2)]">
                    <MessageCircle size={12} strokeWidth={2} />
                  </span>
                  <span className="text-[0.94rem] font-medium text-white transition duration-300 group-hover:text-[#F8F6F1]">
                    Chat on WhatsApp
                  </span>
                </a>
                <p className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/78 shadow-[0_0_12px_rgba(244,200,139,0.28)]" />
                  Bangalore, India
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[92%] lg:mr-0 lg:-translate-y-12">
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-[#F4C88B]/9 blur-[96px]" />
              <div className="pointer-events-none absolute bottom-[-5rem] left-[-5rem] h-64 w-64 rounded-full bg-[#E6A86A]/6 blur-[98px]" />
              <ContactForm />
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/917727867878"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-[#F4C88B]/16 bg-[rgba(8,10,14,0.72)] px-4 py-4 text-[#F4C88B] shadow-[0_18px_54px_rgba(0,0,0,0.3),0_0_36px_rgba(212,175,110,0.08)] backdrop-blur-xl transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#F4C88B]/28 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34),0_0_44px_rgba(212,175,110,0.18)]"
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,110,0.14),transparent_70%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[#F4C88B]/14 bg-white/[0.04] text-[#D4AF6E] shadow-[0_0_18px_rgba(212,175,110,0.12)] transition duration-300 group-hover:shadow-[0_0_26px_rgba(212,175,110,0.22)]">
            <MessageCircle size={20} />
          </span>
          <span className="sr-only">Chat on WhatsApp</span>
          <span className="pointer-events-none absolute -top-10 right-0 rounded-full border border-[#F4C88B]/14 bg-[#050D18]/92 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#F4C88B]/84 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.26)] transition duration-300 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
      </Shell>
    </PageTransition>
  );
}
