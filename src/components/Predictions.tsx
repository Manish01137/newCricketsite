"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock3 } from "lucide-react";
import { predictions } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Win probability
        </span>
        <span className="font-display text-xl text-text">{value}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--panel)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--amber)] to-[#ffc35a]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Predictions() {
  return (
    <section
      id="predictions"
      className="relative border-y border-[var(--border)] bg-[var(--bg-elev)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Today's Predictions"
          title={
            <>
              Our analysts make a call.{" "}
              <span className="italic text-text-dim">And show the math.</span>
            </>
          }
          description="Every prediction comes with the reasoning, conditions, and a 30-day accuracy receipt. No hype, no 'sure shot'."
          cta={
            <div className="chip">
              <TrendingUp className="h-3.5 w-3.5 text-[var(--emerald)]" />
              71% accuracy · last 30 days
            </div>
          }
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {predictions.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--amber)]">
                  {p.league}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-text-dim">
                  <Clock3 className="h-3.5 w-3.5" />
                  {p.timeIST}
                </span>
              </div>

              <h3 className="font-display mt-4 text-2xl leading-tight text-text">
                {p.fixture}
              </h3>

              <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Our pick
                </div>
                <div className="mt-1 font-display text-2xl text-[var(--amber)]">
                  {p.winner}
                </div>
                <div className="mt-4">
                  <ConfidenceBar value={p.confidence} />
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Pitch read
                  </div>
                  <div className="mt-1 text-text-dim">{p.pitch}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Why
                  </div>
                  <div className="mt-1 text-pretty text-text">
                    {p.keyInsight}
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-1 text-xs font-medium text-[var(--amber)] hover:underline"
              >
                Read the full breakdown →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
