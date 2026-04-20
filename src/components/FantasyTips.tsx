"use client";

import { motion } from "framer-motion";
import { Crown, Shield, Flame, Ban } from "lucide-react";
import { fantasyTips } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const roleColor: Record<string, string> = {
  WK: "text-[var(--cyan)] border-[rgba(90,214,240,0.25)] bg-[rgba(90,214,240,0.08)]",
  BAT: "text-[var(--amber)] border-[rgba(245,176,65,0.25)] bg-[rgba(245,176,65,0.08)]",
  AR: "text-[var(--emerald)] border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.08)]",
  BOWL: "text-[var(--crimson)] border-[rgba(239,77,82,0.22)] bg-[rgba(239,77,82,0.08)]",
};

export function FantasyTips() {
  const tip = fantasyTips[0];
  return (
    <section
      id="fantasy"
      className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="Dream11 Desk"
        title={
          <>
            Fantasy teams built by{" "}
            <span className="italic text-[var(--amber)]">analysts</span>, not
            templates.
          </>
        }
        description="A Captain choice with reasoning. A differential pick nobody's on. A fade call for every hype trap. We publish our team an hour before lock-in — every single match."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]"
      >
        <div className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-dim">
            {tip.fixture}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[var(--amber)] bg-[var(--amber-soft)] p-4">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--amber)]">
                <Crown className="h-3.5 w-3.5" /> Captain · 2x
              </div>
              <div className="font-display mt-2 text-xl text-text">
                {tip.captain}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--panel)] p-4">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
                <Shield className="h-3.5 w-3.5" /> Vice · 1.5x
              </div>
              <div className="font-display mt-2 text-xl text-text">
                {tip.viceCaptain}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--emerald)]">
              <Flame className="h-3.5 w-3.5" /> Differential
            </div>
            <p className="mt-2 text-sm text-text">{tip.differential}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
              <Ban className="h-3.5 w-3.5" /> Avoid
            </div>
            <p className="mt-2 text-sm text-text-dim">{tip.avoid}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] p-6">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-dim">
              Suggested XI
            </div>
            <div className="text-[11px] text-muted">
              Credits used ·{" "}
              <span className="font-semibold text-text">
                {tip.team.reduce((a, b) => a + b.credits, 0).toFixed(1)}/100
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {tip.team.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-3 transition hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-md border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em]",
                      roleColor[p.role]
                    )}
                  >
                    {p.role}
                  </span>
                  <span className="text-[10px] text-muted">{p.credits}cr</span>
                </div>
                <div className="text-sm leading-tight text-text">{p.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5 text-xs text-muted">
            <span>
              Locks at <span className="text-text">7:15 PM IST</span>
            </span>
            <span className="h-3 w-px bg-[var(--border-strong)]" />
            <span>
              Pitch · <span className="text-text">Batting friendly</span>
            </span>
            <span className="h-3 w-px bg-[var(--border-strong)]" />
            <span>
              Dew · <span className="text-text">Heavy after 18th</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
