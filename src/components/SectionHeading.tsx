type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  cta?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, description, cta }: Props) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[var(--amber)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-display mt-3 text-3xl leading-[1.05] tracking-tight text-text md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl text-sm text-text-dim md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {cta}
    </div>
  );
}
