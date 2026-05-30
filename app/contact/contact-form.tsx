"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const fieldClass =
  "rounded-2xl border border-[#F4C88B]/10 bg-white/[0.025] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[#F4C88B]/50 focus:bg-white/[0.045] focus:ring-4 focus:ring-[#F4C88B]/8";

const intentOptions = ["Project", "Consultation", "Internship"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedIntent, setSelectedIntent] = useState<(typeof intentOptions)[number] | "">("");

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "Submission received. Enlivo will contact you shortly.";
    }

    if (status === "error") {
      return "Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us.";
    }

    return message;
  }, [message, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (selectedIntent) {
      formData.set("selectedProjectIntent", selectedIntent);
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setMessage(result?.error || "Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us.");
        return;
      }

      form.reset();
      setSelectedIntent("");
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-5 overflow-hidden rounded-[1.75rem] border border-[#F4C88B]/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(5,13,24,0.54))] p-6 shadow-[0_24px_78px_rgba(0,0,0,0.22),0_0_44px_rgba(244,200,139,0.04)] backdrop-blur-xl md:p-8"
    >
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/30 to-transparent" />

      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46">Start a conversation</p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Full name
          <input name="fullName" className={fieldClass} placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Email
          <input type="email" name="email" className={fieldClass} placeholder="you@company.com" required />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Inquiry type
          <select name="inquiryType" className={fieldClass} defaultValue="Business inquiry" required>
            <option>Business inquiry</option>
            <option>Website project</option>
            <option>App development</option>
            <option>AI automation</option>
            <option>Digital business systems</option>
            <option>Partnership inquiry</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Phone
          <input name="phone" className={fieldClass} placeholder="Optional" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-300">
        Selected project intent
        <input type="hidden" name="selectedProjectIntent" value={selectedIntent} readOnly />
        <div className="flex flex-wrap items-center gap-2">
          {intentOptions.map((item) => {
            const active = selectedIntent === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedIntent(item)}
                className={`rounded-full border px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                  active
                    ? "border-[#F4C88B]/30 bg-[#F4C88B]/10 text-[#F4C88B]"
                    : "border-[#F4C88B]/14 bg-white/[0.035] text-[#F4C88B]/68 hover:border-[#F4C88B]/22 hover:text-[#F4C88B]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-300">
        What should we help shape?
        <textarea
          rows={4}
          name="message"
          className={`${fieldClass} resize-none`}
          placeholder="Website, app, AI automation, or digital business system..."
          required
        />
      </label>

      <div className="grid gap-5 pt-1">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/42">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/62" />Response within 24 hours</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/62" />Bangalore, India</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#F4C88B]/62" />Business-first consultation</span>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4c978,#d4af6e)] px-6 py-4 text-sm font-semibold text-[#08111d] shadow-[0_18px_45px_rgba(212,175,110,0.22)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:shadow-[0_22px_64px_rgba(212,175,110,0.3)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:scale-100"
        >
          {status === "submitting" ? "Sending Inquiry..." : "Send Inquiry"}
          <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]" />
        </button>
      </div>

      {statusMessage ? (
        <p
          className={`whitespace-pre-line rounded-2xl border px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "border-[#F4C88B]/16 bg-[#F4C88B]/8 text-[#F8F6F1]"
              : "border-red-300/18 bg-red-500/8 text-red-100"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
