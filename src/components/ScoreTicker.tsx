import { scoreTickerItems } from "@/lib/data";

export function ScoreTicker() {
  const items = [...scoreTickerItems, ...scoreTickerItems];
  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-elev)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-elev)] to-transparent" />
      <div className="flex items-center">
        <div className="sticky left-0 z-20 flex items-center gap-2 border-r border-[var(--border)] bg-[var(--bg-elev)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
          <span className="live-dot" />
          Live Wire
        </div>
        <div className="flex min-w-0 overflow-hidden">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap py-2.5 pl-10 text-xs text-text-dim">
            {items.map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
                <span className="font-medium text-text">{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
