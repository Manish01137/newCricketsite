import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP, waLink } from "@/lib/data";

const cols = [
  {
    title: "Product",
    links: [
      { href: "#live", label: "Live Scores" },
      { href: "#predictions", label: "Daily Predictions" },
      { href: "#fantasy", label: "Dream11 Tips" },
      { href: "#points", label: "Points Tables" },
    ],
  },
  {
    title: "Editorial",
    links: [
      { href: "#editorial", label: "Match Previews" },
      { href: "#editorial", label: "Live Blogs" },
      { href: "#editorial", label: "Long Reads" },
      { href: "#editorial", label: "Auction Desk" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#writers", label: "Writers" },
      { href: "#contact", label: "Contact" },
      { href: "#careers", label: "Careers" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-dim">
              A cricket publication built for people who read the game, not
              just the scoreboard. Daily predictions, long-form writing, and
              fantasy intel — with receipts.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["IPL", "WPL", "SA20", "BBL", "Tests", "WTC"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--border)] bg-panel px-2.5 py-1 text-[11px] tracking-wide text-text-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={waLink(WHATSAPP.tipsMessage)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-text transition hover:border-[#25D366] hover:text-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {WHATSAPP.label}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-text-dim transition hover:text-[var(--amber)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} khelooyar2 Media. All match data
            shown is illustrative. Not a gambling service.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-text">Privacy</Link>
            <Link href="#" className="hover:text-text">Terms</Link>
            <Link href="#" className="hover:text-text">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
