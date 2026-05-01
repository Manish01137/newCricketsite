import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Writers } from "@/components/Writers";
import { Testimonials } from "@/components/Testimonials";
import { IMG, stats, WHATSAPP, waLink } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "About — khelooyar2",
  description:
    "A cricket publication built for people who read the game. No paywalls, no promo funnels, no 'sure shot' nonsense.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A cricket publication,{" "}
            <span className="italic text-[var(--amber)]">not a funnel.</span>
          </>
        }
        description="We started khelooyar2 because every other cricket site we opened was trying to sell us something. This one isn't."
        image={IMG.night}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="space-y-6 text-lg leading-[1.75] text-text-dim">
          <p className="text-xl text-text">
            The game deserves better than scoreboards stitched to bet-now
            buttons. It deserves writing, analysis, and the slow pleasure of
            reading someone who actually watched the whole innings.
          </p>
          <p>
            Our four writers publish under their own names. Every prediction
            is dated, every accuracy number is public, and every long-read
            takes the time it takes. We don&apos;t have an affiliate funnel,
            we don&apos;t promise &quot;sure-shot&quot; anything, and we never
            will.
          </p>
          <p>
            We cover IPL, WPL, international T20s, Tests, SA20, BBL, Ranji,
            WTC, and whatever else gives us cricket on a given afternoon. If
            there&apos;s a match, there&apos;s a preview by noon and a take
            before stumps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--bg-elev)] p-5">
              <div className="font-display text-3xl leading-none text-text md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-text">{s.label}</div>
              <div className="text-xs text-muted">{s.hint}</div>
            </div>
          ))}
        </div>
      </section>

      <Writers />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)]">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src={IMG.bat}
                alt="Cricket editorial"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)] to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl text-text md:text-4xl">
                Our editorial standard
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-text-dim">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--amber)]" />
                  Every prediction ships with pitch read, matchup math, and
                  confidence %.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--amber)]" />
                  Our 30-day accuracy ledger is public and permanent.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--amber)]" />
                  We correct errors on the record, with the original line
                  preserved.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--amber)]" />
                  No affiliate links in editorial. Ever.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
                Write for us
              </div>
              <h3 className="font-display mt-3 text-3xl text-text">
                Open to pitches.
              </h3>
              <p className="mt-3 text-sm text-text-dim">
                Data-led features, live-blog trials, and scout reports from
                leagues we don&apos;t yet cover.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ffc35a]"
                >
                  <Mail className="h-4 w-4" /> pitches@khelooyar2.in
                </Link>
                <a
                  href={waLink(WHATSAPP.pitchMessage)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bf5b]"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--cyan)]">
                Where we work
              </div>
              <h3 className="font-display mt-3 text-3xl text-text">
                Remote, across the subcontinent.
              </h3>
              <div className="mt-6 flex items-center gap-2 text-sm text-text-dim">
                <MapPin className="h-4 w-4" />
                Mumbai · Bengaluru · Dubai · London
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
