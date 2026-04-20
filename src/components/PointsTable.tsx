"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { iplTable, wplTable, type PointsRow } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

function FormPill({ r }: { r: "W" | "L" }) {
  return (
    <span
      className={cn(
        "flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-semibold",
        r === "W"
          ? "bg-[rgba(74,222,128,0.15)] text-[var(--emerald)]"
          : "bg-[rgba(239,77,82,0.15)] text-[var(--crimson)]"
      )}
    >
      {r}
    </span>
  );
}

function Table({ rows }: { rows: PointsRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
      <div className="max-w-full overflow-x-auto no-scrollbar">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--panel)] text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              <th className="px-4 py-3">#</th>
              <th className="px-2 py-3">Team</th>
              <th className="px-3 py-3 text-center">P</th>
              <th className="px-3 py-3 text-center">W</th>
              <th className="px-3 py-3 text-center">L</th>
              <th className="px-3 py-3 text-center">NRR</th>
              <th className="px-4 py-3 text-center">Pts</th>
              <th className="px-4 py-3">Form</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const qualifies = r.pos <= 4;
              return (
                <tr
                  key={r.code}
                  className="border-b border-[var(--border)] bg-[var(--bg-elev)] last:border-0 hover:bg-[var(--panel)]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "font-display text-base tabular-nums",
                          qualifies ? "text-[var(--amber)]" : "text-text-dim"
                        )}
                      >
                        {r.pos}
                      </span>
                      {qualifies && (
                        <span className="h-1 w-1 rounded-full bg-[var(--amber)]" />
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--panel)] text-[10px] font-semibold text-text-dim">
                        {r.code}
                      </div>
                      <span className="font-medium text-text">{r.team}</span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-center text-text-dim tabular-nums">{r.p}</td>
                  <td className="px-3 py-4 text-center text-text tabular-nums">{r.w}</td>
                  <td className="px-3 py-4 text-center text-text-dim tabular-nums">{r.l}</td>
                  <td className="px-3 py-4 text-center tabular-nums">
                    <span
                      className={cn(
                        r.nrr.startsWith("+")
                          ? "text-[var(--emerald)]"
                          : "text-[var(--crimson)]"
                      )}
                    >
                      {r.nrr}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center font-display text-lg tabular-nums text-text">
                    {r.pts}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-1">
                      {r.form.map((f, i) => (
                        <FormPill key={i} r={f} />
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PointsTable() {
  const [tab, setTab] = useState<"ipl" | "wpl">("ipl");
  return (
    <section
      id="points"
      className="relative border-y border-[var(--border)] bg-[var(--bg-elev)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Standings"
          title={<>Points tables, updated the moment the innings ends.</>}
          description="Top four qualify. Net run rate breaks ties. We visualize form so you can see who's peaking."
          cta={
            <div className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg)] p-1">
              <button
                onClick={() => setTab("ipl")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  tab === "ipl"
                    ? "bg-[var(--amber)] text-black"
                    : "text-text-dim hover:text-text"
                )}
              >
                IPL
              </button>
              <button
                onClick={() => setTab("wpl")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  tab === "wpl"
                    ? "bg-[var(--amber)] text-black"
                    : "text-text-dim hover:text-text"
                )}
              >
                WPL
              </button>
            </div>
          }
        />

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10"
        >
          <Table rows={tab === "ipl" ? iplTable : wplTable} />
        </motion.div>
      </div>
    </section>
  );
}
