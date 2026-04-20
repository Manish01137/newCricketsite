"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const accent: Record<string, string> = {
  "Match Preview": "text-[var(--amber)]",
  "Live Blog": "text-[var(--crimson)]",
  "Auction Desk": "text-[var(--cyan)]",
  "Long Read": "text-[var(--emerald)]",
  "Scout Report": "text-[var(--cyan)]",
};

export function Editorial() {
  const [feature, ...rest] = articles.slice(0, 5);
  return (
    <section
      id="editorial"
      className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="The Desk"
        title={
          <>
            Daily, fresh, and written by{" "}
            <span className="italic text-text-dim">
              people who watch the whole innings.
            </span>
          </>
        }
        description="Match previews, live blogs, auction analysis and long-reads — updated every day through the season."
        cta={
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm text-text-dim hover:text-[var(--amber)]"
          >
            All stories <ArrowUpRight className="h-4 w-4" />
          </Link>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`/news/${feature.slug}`}
            className="group relative block min-h-[460px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)]"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover object-center opacity-55 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/75 to-transparent" />
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 18px)",
              }}
            />

            <div className="relative flex h-full min-h-[460px] flex-col justify-end p-8">
              <div
                className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                  accent[feature.category] ?? "text-[var(--amber)]"
                }`}
              >
                {feature.category}
              </div>
              <h3 className="font-display mt-4 max-w-xl text-balance text-3xl leading-tight text-text md:text-5xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-lg text-pretty text-text-dim">
                {feature.dek}
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs text-muted">
                <Image
                  src={feature.authorImage}
                  alt={feature.author}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-text">{feature.author}</span>
                <span className="h-3 w-px bg-[var(--border-strong)]" />
                <span>{feature.readTime} read</span>
                <span className="h-3 w-px bg-[var(--border-strong)]" />
                <span>{feature.date}</span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {rest.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/news/${a.slug}`}
                className="group flex items-stretch gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition hover:border-[var(--border-strong)]"
              >
                <div className="relative aspect-[4/3] w-36 shrink-0 self-stretch overflow-hidden rounded-xl border border-[var(--border)] sm:w-40">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      accent[a.category] ?? "text-[var(--amber)]"
                    }`}
                  >
                    {a.category}
                  </div>
                  <h4 className="font-display mt-1 line-clamp-2 text-lg leading-snug text-text transition group-hover:text-[var(--amber)]">
                    {a.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-muted">
                    <span className="text-text-dim">{a.author}</span>
                    <span className="h-2 w-px bg-[var(--border-strong)]" />
                    <span>
                      {a.readTime} · {a.date}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-[var(--amber)]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
