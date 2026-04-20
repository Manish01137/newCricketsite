import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FantasyTips } from "@/components/FantasyTips";
import { predictions, IMG } from "@/lib/data";
import { Clock3, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Dream11 Fantasy Tips — CrickPulse",
  description:
    "Analyst-built Dream11 XIs with Captain, differential, and fade calls — an hour before every lock-in.",
};

export default function FantasyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dream11 Desk"
        title={
          <>
            Fantasy XIs built by{" "}
            <span className="italic text-[var(--amber)]">analysts.</span>
          </>
        }
        description="One Captain call, one vice, a differential nobody's on, and the fade trap everyone else falls for. Every match, an hour before lock-in."
        image={IMG.ball}
      />

      <FantasyTips />

      <section className="mx-auto max-w-7xl border-t border-[var(--border)] px-5 py-20 lg:px-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[var(--amber)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
            Upcoming fixtures · teams drop soon
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {predictions.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)]"
            >
              <div className="relative h-32 w-full">
                <Image
                  src={p.image}
                  alt={p.fixture}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)] to-transparent" />
                <div className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  {p.league}
                </div>
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2 py-1 text-[11px] text-white/90 backdrop-blur">
                  <Clock3 className="h-3 w-3" />
                  {p.timeIST}
                </div>
              </div>

              <div className="p-5">
                <div className="font-display text-xl text-text">{p.fixture}</div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted">Team drop</span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1 font-medium text-text">
                    60 min before lock
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--amber)] hover:underline"
                >
                  Watch this fixture →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
