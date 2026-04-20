"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { stats, IMG } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={IMG.heroBatsman}
          alt="Batsman mid-stroke with dust rising"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-[0.32]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-[var(--bg)]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/30 to-[var(--bg)]" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8 lg:pt-28 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="chip">
            <span className="live-dot" />
            Live · Issue 142
          </span>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--amber)]" />
            IPL 2026 · Match 47 · 7:30 PM IST
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display mt-8 max-w-5xl text-balance text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.95] tracking-[-0.02em] text-text"
        >
          Cricket,{" "}
          <span className="italic text-[var(--amber)]">decoded</span> daily.
          <span className="block text-text-dim">
            Built for people who read the game.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-text-dim md:text-lg"
        >
          Live scores across every league. Match predictions with the reasoning
          shown. Dream11 teams built by analysts, not copy-paste. Long-form
          writing from people who actually watch the game.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/predictions"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ffc35a]"
          >
            Today&apos;s predictions
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#live"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-panel/80 px-5 py-3 text-sm font-medium text-text backdrop-blur transition hover:border-[var(--amber)]"
          >
            <PlayCircle className="h-4 w-4" />
            Watch live scores
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--bg-elev)]/90 p-5 backdrop-blur">
              <div className="font-display text-3xl leading-none text-text md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-text">{s.label}</div>
              <div className="text-xs text-muted">{s.hint}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
