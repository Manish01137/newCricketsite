// Single source of truth for the canonical site URL.
// Set NEXT_PUBLIC_SITE_URL in production hosting to override; defaults to apex.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://khelooyar2.com"
).replace(/\/$/, "");

export const SITE_NAME = "khelooyar2";
export const SITE_TAGLINE = "Cricket, decoded daily.";
export const SITE_DESCRIPTION =
  "Live scores, daily match predictions, Dream11 tips, points tables, IPL & WPL coverage, and long-form cricket writing.";
