"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Readers"
        title={
          <>
            What people <span className="italic text-[var(--amber)]">actually</span> say.
          </>
        }
        description="No incentivized quotes, no influencer swaps. Just notes from long-time subscribers."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-7"
          >
            <Quote className="h-6 w-6 text-[var(--amber)] opacity-50" />
            <p className="mt-4 font-display text-xl leading-snug text-text">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4 text-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--panel)] font-display text-base text-[var(--amber)]">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-medium text-text">{t.name}</div>
                <div className="text-xs text-muted">{t.handle}</div>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
