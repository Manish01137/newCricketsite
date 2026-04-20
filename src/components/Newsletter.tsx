"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP, waLink } from "@/lib/data";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] px-6 py-14 sm:px-12 sm:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(700px 300px at 50% 0%, rgba(245,176,65,0.18), transparent 60%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-text-dim">
            <span className="live-dot" />
            The Morning Over · daily at 8 AM IST
          </div>

          <h2 className="font-display mt-6 text-balance text-4xl leading-tight text-text md:text-6xl">
            Get the day&apos;s match,{" "}
            <span className="italic text-[var(--amber)]">before</span> the toss.
          </h2>
          <p className="mt-5 text-pretty text-text-dim">
            A 4-minute brief every morning: predictions, Dream11 picks, pitch
            read, and one long-read you&apos;ll actually finish. Free. No
            promos, no affiliate links, no &quot;sure shot&quot; nonsense.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="h-12 w-full rounded-full border border-[var(--border-strong)] bg-[var(--bg)] pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-muted focus:border-[var(--amber)]"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--amber)] px-6 text-sm font-semibold text-black transition hover:bg-[#ffc35a] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> You&apos;re in
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          <p className="mt-4 text-xs text-muted">
            94,200+ readers. Unsubscribe anytime. We&apos;ll never share your
            email.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 text-xs text-muted">
            <span className="h-px w-8 bg-[var(--border-strong)]" />
            <span className="uppercase tracking-[0.22em]">or</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" />
          </div>

          <a
            href={waLink(WHATSAPP.tipsMessage)}
            target="_blank"
            rel="noopener"
            className="mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bf5b]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Get tips on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
