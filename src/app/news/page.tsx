import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { articles, IMG } from "@/lib/data";

const accent: Record<string, string> = {
  "Match Preview": "text-[var(--amber)]",
  "Live Blog": "text-[var(--crimson)]",
  "Auction Desk": "text-[var(--cyan)]",
  "Long Read": "text-[var(--emerald)]",
  "Scout Report": "text-[var(--cyan)]",
};

export const metadata: Metadata = {
  title: "News & Analysis — CrickPulse",
  description:
    "Match previews, live blogs, auction analysis and long-reads — daily through the season.",
};

export default function NewsPage() {
  const [feature, ...rest] = articles;
  return (
    <>
      <PageHeader
        eyebrow="The Desk"
        title={
          <>
            Stories from{" "}
            <span className="italic text-[var(--amber)]">the field.</span>
          </>
        }
        description="We write, then we show the work. Previews before noon, live blogs during play, long-reads on rest days."
        image={IMG.action}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Link
          href={`/news/${feature.slug}`}
          className="group relative block min-h-[440px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)]"
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover opacity-60 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />
          <div className="relative flex min-h-[440px] flex-col justify-end p-8 lg:p-12">
            <div
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                accent[feature.category] ?? "text-[var(--amber)]"
              }`}
            >
              {feature.category}
            </div>
            <h2 className="font-display mt-4 max-w-3xl text-balance text-3xl leading-[1.05] text-text md:text-5xl lg:text-6xl">
              {feature.title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-text-dim md:text-lg">
              {feature.dek}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-muted">
              <Image
                src={feature.authorImage}
                alt={feature.author}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-text">{feature.author}</span>
              <span className="h-3 w-px bg-[var(--border-strong)]" />
              <span>{feature.readTime} read</span>
              <span className="h-3 w-px bg-[var(--border-strong)]" />
              <span>{feature.date}</span>
            </div>
          </div>
        </Link>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition hover:border-[var(--border-strong)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)] to-transparent" />
                <div
                  className={`absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] ${
                    accent[a.category] ?? "text-[var(--amber)]"
                  }`}
                >
                  {a.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-display text-2xl leading-tight text-text transition group-hover:text-[var(--amber)]">
                  {a.title}
                </h3>
                <p className="line-clamp-2 text-sm text-text-dim">{a.dek}</p>
                <div className="mt-auto flex items-center gap-2 text-xs text-muted">
                  <Image
                    src={a.authorImage}
                    alt={a.author}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  <span className="text-text-dim">{a.author}</span>
                  <span className="h-2 w-px bg-[var(--border-strong)]" />
                  <span>
                    {a.readTime} · {a.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
