"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP, waLink } from "@/lib/data";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">
        {open ? (
          <div className="pointer-events-auto mb-3 w-[min(92vw,320px)] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elev)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[#075E54] px-4 py-3 text-white">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">khelooyar2 on WhatsApp</div>
                  <div className="text-[11px] text-white/80">Typically replies in minutes</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4 text-sm">
              <div className="rounded-xl rounded-tl-sm bg-[var(--panel)] p-3 text-text">
                Get daily predictions, Dream11 XIs and match previews{" "}
                <span className="font-semibold text-[var(--amber)]">on WhatsApp</span>.
                Free. No spam.
              </div>
              <a
                href={waLink(WHATSAPP.tipsMessage)}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20bf5b]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Start chat
              </a>
              <a
                href={waLink(WHATSAPP.pitchMessage)}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--panel)] px-4 py-2.5 text-sm font-medium text-text transition hover:border-[var(--amber)]"
              >
                Pitch the editorial desk
              </a>
            </div>
          </div>
        ) : null}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open WhatsApp"
          className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#20bf5b] sm:h-[58px] sm:w-[58px]"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
