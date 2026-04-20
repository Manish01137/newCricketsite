"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { writers } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Writers() {
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="The Byline"
          title={
            <>
              Actual people.{" "}
              <span className="italic text-text-dim">
                Not an aggregator, not a bot.
              </span>
            </>
          }
          description="Four senior cricket writers, publishing under their own names. You can email every one of them."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {writers.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src={w.image}
                  alt={w.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-display text-2xl leading-tight text-white drop-shadow">
                    {w.name}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--amber)]">
                    {w.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-dim">
                {w.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
