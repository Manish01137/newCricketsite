import Image from "next/image";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
};

export function PageHeader({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {image ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-[var(--bg)]/70 to-[var(--bg)]" />
          <div className="absolute inset-0 grid-bg opacity-60" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex items-center gap-2">
          <span className="h-px w-10 bg-[var(--amber)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-display mt-5 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5rem)] leading-[1] tracking-[-0.02em] text-text">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-text-dim md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
