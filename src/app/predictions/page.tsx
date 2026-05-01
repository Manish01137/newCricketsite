import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { predictions, IMG } from "@/lib/data";
import { Clock3, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Daily Match Predictions — khelooyar2",
  description:
    "Every prediction with reasoning, pitch read, and a 30-day accuracy ledger.",
};

export default function PredictionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Predictions"
        title={
          <>
            We make the call.{" "}
            <span className="italic text-[var(--amber)]">And show the math.</span>
          </>
        }
        description="Every fixture on the calendar, with our win-probability, pitch read, and the one matchup that decides it."
        image={IMG.stadiumLights}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="chip">
            <TrendingUp className="h-3.5 w-3.5 text-[var(--emerald)]" />
            71% top-pick accuracy · 30d
          </span>
          <span className="chip">12 predictions today</span>
          <span className="chip">All formats</span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {predictions.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition hover:border-[var(--border-strong)]"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.fixture}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover opacity-55 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)] via-[var(--bg-elev)]/40 to-transparent" />
                <div className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  {p.league}
                </div>
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2 py-1 text-[11px] text-white/90 backdrop-blur">
                  <Clock3 className="h-3 w-3" />
                  {p.timeIST}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-2xl text-white drop-shadow">
                    {p.fixture}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Our pick
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <div className="font-display text-xl text-[var(--amber)]">
                      {p.winner}
                    </div>
                    <div className="font-display text-2xl text-text">
                      {p.confidence}%
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--bg)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--amber)] to-[#ffc35a]"
                      style={{ width: `${p.confidence}%` }}
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Pitch
                  </div>
                  <div className="mt-1 text-text-dim">{p.pitch}</div>
                </div>

                <p className="text-pretty text-sm text-text">{p.keyInsight}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
