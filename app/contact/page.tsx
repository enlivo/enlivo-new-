import type { Metadata } from "next";
import { PageTransition } from "../components/motion";
import { Shell } from "../components/ui";
import { createPageMetadata } from "../lib/seo";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Enlivo | Website, App & UI UX Company",
  description:
    "Contact Enlivo Global Tech Solutions Private Limited for website development, app development, UI UX design, AI automation, and internship inquiries.",
  path: "/contact",
  keywords: [
    "Enlivo Global Tech Solutions Private Limited",
    "website development company",
    "app development company",
    "UI UX design company",
    "business website development India",
    "AI automation services",
    "internship program",
  ],
});

export default function ContactPage() {
  return (
    <PageTransition>
      <Shell className="min-h-screen">
        <section className="relative flex min-h-[calc(100vh-7rem)] items-center overflow-hidden px-5 pb-16 pt-32 md:py-20">
          <div className="pointer-events-none absolute left-[-22rem] top-10 h-[44rem] w-[58rem] rounded-full bg-[#E6A86A]/10 blur-[150px]" />
          <div className="pointer-events-none absolute right-[-18rem] bottom-[-14rem] h-[42rem] w-[58rem] rounded-full bg-[#F4C88B]/7 blur-[150px]" />
          <p className="sr-only">
            Enlivo Global Tech Solutions Private Limited, India. Email: contact@enlivotechnologies.com. Website: https://enlivo.com.
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
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[92%] lg:mr-0 lg:-translate-y-12">
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-[#F4C88B]/9 blur-[96px]" />
              <div className="pointer-events-none absolute bottom-[-5rem] left-[-5rem] h-64 w-64 rounded-full bg-[#E6A86A]/6 blur-[98px]" />
              <ContactForm />
            </div>
          </div>
        </section>

      </Shell>
    </PageTransition>
  );
}
