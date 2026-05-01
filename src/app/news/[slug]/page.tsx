import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/lib/data";

const accent: Record<string, string> = {
  "Match Preview": "text-[var(--amber)]",
  "Live Blog": "text-[var(--crimson)]",
  "Auction Desk": "text-[var(--cyan)]",
  "Long Read": "text-[var(--emerald)]",
  "Scout Report": "text-[var(--cyan)]",
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return { title: "Not found — khelooyar2" };
  return {
    title: `${a.title} — khelooyar2`,
    description: a.dek,
  };
}

export default async function ArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden border-b border-[var(--border)]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/75 to-[var(--bg)]/30" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-5 pb-12 lg:px-8 lg:pb-20">
            <Link
              href="/news"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-text-dim transition hover:text-[var(--amber)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All stories
            </Link>
            <div
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                accent[article.category] ?? "text-[var(--amber)]"
              }`}
            >
              {article.category}
            </div>
            <h1 className="font-display mt-4 text-balance text-4xl leading-[1.05] text-text md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-text-dim md:text-lg">
              {article.dek}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm">
              <Image
                src={article.authorImage}
                alt={article.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-[var(--border-strong)] object-cover"
              />
              <div>
                <div className="font-medium text-text">{article.author}</div>
                <div className="text-xs text-muted">
                  {article.date} · {article.readTime} read
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-6 text-lg leading-[1.75] text-text-dim">
            {article.body.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl text-text" : undefined}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
              About the writer
            </div>
            <div className="mt-4 flex items-start gap-4">
              <Image
                src={article.authorImage}
                alt={article.author}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border border-[var(--border-strong)] object-cover"
              />
              <div>
                <div className="font-display text-xl text-text">
                  {article.author}
                </div>
                <p className="mt-2 text-sm text-text-dim">
                  Senior cricket writer at khelooyar2. Reach out on any story,
                  any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-[var(--border)] bg-[var(--bg-elev)]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[var(--amber)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
              Keep reading
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] transition hover:border-[var(--border-strong)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      accent[a.category] ?? "text-[var(--amber)]"
                    }`}
                  >
                    {a.category}
                  </div>
                  <h3 className="font-display text-xl leading-snug text-text transition group-hover:text-[var(--amber)]">
                    {a.title}
                  </h3>
                  <div className="mt-auto text-xs text-muted">
                    {a.author} · {a.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
