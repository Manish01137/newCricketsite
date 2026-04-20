export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--amber)] to-[#b8732d]">
        <span className="absolute inset-[3px] rounded-[7px] bg-[var(--bg)]" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--crimson)] shadow-[0_0_12px_rgba(239,77,82,0.7)]" />
      </span>
      <div className="leading-none">
        <span className="block font-display text-[1.3rem] tracking-tight text-text">
          Crick<span className="italic text-[var(--amber)]">Pulse</span>
        </span>
        <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.22em] text-muted">
          Decoded Daily
        </span>
      </div>
    </div>
  );
}
