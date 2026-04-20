"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { features, IMG } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Why CrickPulse"
        title={
          <>
            Premium cricket coverage,{" "}
            <span className="italic text-[var(--amber)]">without the fluff.</span>
          </>
        }
        description="Four things we promise to do on every match day. And show the receipts for."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 transition hover:border-[var(--border-strong)]"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,176,65,0.25), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="font-display text-5xl leading-none text-[var(--amber)] md:text-6xl">
                {f.stat}
              </div>
              <div className="mt-2 text-xs text-muted">{f.statLabel}</div>

              <h3 className="font-display mt-8 text-2xl leading-tight text-text">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[IMG.stadiumLights, IMG.action, IMG.crowd].map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative h-52 overflow-hidden rounded-2xl border border-[var(--border)]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover opacity-70 transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
