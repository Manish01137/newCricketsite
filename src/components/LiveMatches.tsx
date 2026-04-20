"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Trophy, Clock } from "lucide-react";
import { liveMatches } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

function StatusPill({ status }: { status: "LIVE" | "UPCOMING" | "RESULT" }) {
  if (status === "LIVE") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--crimson-soft)] bg-[var(--crimson-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--crimson)]">
        <span className="live-dot" />
        Live
      </span>
    );
  }
  if (status === "UPCOMING") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-panel/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-dim backdrop-blur">
        <Clock className="h-3 w-3" />
        Upcoming
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-panel/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-dim backdrop-blur">
      <Trophy className="h-3 w-3" />
      Result
    </span>
  );
}

function TeamRow({
  code,
  name,
  score,
  overs,
  leading,
}: {
  code: string;
  name: string;
  score?: string;
  overs?: string;
  leading?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg border text-[11px] font-semibold",
            leading
              ? "border-[var(--amber)] bg-[var(--amber-soft)] text-[var(--amber)]"
              : "border-[var(--border-strong)] bg-panel text-text-dim"
          )}
        >
          {code}
        </div>
        <div>
          <div className="text-sm font-medium text-text">{name}</div>
          {overs ? (
            <div className="text-xs text-muted">{overs} ov</div>
          ) : (
            <div className="text-xs text-muted">Yet to bat</div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "font-display text-2xl leading-none tracking-tight tabular-nums",
          leading ? "text-text" : "text-text-dim"
        )}
      >
        {score ?? "—"}
      </div>
    </div>
  );
}

export function LiveMatches() {
  return (
    <section id="live" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Scoreboard"
        title={<>What&apos;s live right now</>}
        description="Ball-by-ball for every match on the calendar. No paywalls, no refresh-to-load nonsense."
        cta={
          <Link href="/predictions" className="text-sm text-text-dim hover:text-[var(--amber)]">
            Full schedule →
          </Link>
        }
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {liveMatches.map((m, i) => {
          const leadingA =
            m.teamA.score && m.teamB.score
              ? parseInt(m.teamA.score) > parseInt(m.teamB.score)
              : !!m.teamA.score;
          return (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition hover:border-[var(--border-strong)]"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-elev)]/50 to-[var(--bg-elev)]" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 drop-shadow">
                    {m.league}
                  </span>
                  <StatusPill status={m.status} />
                </div>
              </div>

              <div className="p-5 pt-3">
                <div className="space-y-5">
                  <TeamRow {...m.teamA} leading={leadingA} />
                  <TeamRow {...m.teamB} leading={!leadingA && !!m.teamB.score} />
                </div>

                <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-text">
                  {m.note}
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-muted">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <div>
                    {m.venue}
                    {m.toss ? <div className="mt-0.5">{m.toss}</div> : null}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
