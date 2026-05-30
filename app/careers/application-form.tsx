"use client";

import { ArrowRight, Upload } from "lucide-react";
import { FormEvent, useState } from "react";

const fieldClass =
  "rounded-2xl border border-[#F4C88B]/10 bg-white/[0.025] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-[#F4C88B]/50 focus:bg-white/[0.045] focus:ring-4 focus:ring-[#F4C88B]/8";

const tracks = [
  "Web Development Intern",
  "UI/UX Design Intern",
  "AI Automation Intern",
  "Cloud & DevOps Intern",
  "Digital Business Intern",
];

export function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/internship", {
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
      setStatus("success");
      setMessage("Submission received. Enlivo will contact you shortly.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email contact@enlivotechnologies.com or WhatsApp us.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-5 overflow-hidden rounded-[2rem] border border-[#F4C88B]/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.042),rgba(5,13,24,0.62))] p-6 shadow-[0_30px_95px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-8"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4C88B]/38 to-transparent" />
      <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full bg-[#F4C88B]/10 blur-[88px]" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F4C88B]/72">Internship application</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.024em] text-white">Apply with your profile.</h2>
      </div>

      <div className="relative grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Full name
          <input className={fieldClass} name="fullName" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Email
          <input type="email" className={fieldClass} name="email" placeholder="you@email.com" required />
        </label>
      </div>

      <div className="relative grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Phone
          <input className={fieldClass} name="phone" placeholder="+91 ..." required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          College / Institution
          <input className={fieldClass} name="college" placeholder="Institution name" required />
        </label>
      </div>

      <label className="relative grid gap-2 text-sm font-medium text-slate-300">
        Internship track
        <select className={fieldClass} name="track" defaultValue="" required>
          <option value="" disabled>
            Select a track
          </option>
          {tracks.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>
      </label>

      <label className="relative grid gap-2 text-sm font-medium text-slate-300">
        Short message
        <textarea
          rows={4}
          className={`${fieldClass} resize-none`}
          name="message"
          placeholder="Share your interests, current skills, and availability."
        />
      </label>

      <label className="relative grid gap-2 text-sm font-medium text-slate-300">
        Upload Resume
        <span className="flex items-center gap-3 rounded-2xl border border-dashed border-[#F4C88B]/18 bg-white/[0.025] px-4 py-4 text-slate-400 transition duration-300 focus-within:border-[#F4C88B]/50 focus-within:bg-white/[0.045] focus-within:ring-4 focus-within:ring-[#F4C88B]/8">
          <Upload size={18} className="shrink-0 text-[#F4C88B]/76" />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full text-sm text-slate-400 file:mr-4 file:rounded-full file:border-0 file:bg-[#F4C88B]/12 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#F4C88B] hover:file:bg-[#F4C88B]/18"
            required
          />
        </span>
        <span className="text-xs font-normal text-slate-500">PDF or Word document preferred.</span>
        <span className="text-xs font-normal text-slate-500">Resume upload will be shared during follow-up if attachment is unavailable.</span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4c978,#d4af6e)] px-6 py-4 text-sm font-semibold text-[#08111d] shadow-[0_18px_45px_rgba(212,175,110,0.22)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] hover:shadow-[0_22px_64px_rgba(212,175,110,0.3)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending Application..." : "Submit Application"}
        <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]" />
      </button>

      {message ? (
        <p
          className={`whitespace-pre-line rounded-2xl border px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "border-[#F4C88B]/16 bg-[#F4C88B]/8 text-[#F8F6F1]"
              : "border-red-300/18 bg-red-500/8 text-red-100"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
