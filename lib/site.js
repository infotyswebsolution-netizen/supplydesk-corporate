// Single source of truth for the site's absolute base URL. Set
// NEXT_PUBLIC_SITE_URL in the Vercel project's environment variables to the
// real production domain before launch — this placeholder is provisional.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://supplydesk-corporate.vercel.app";

export const ORG_NAME = "SupplyDesk";

/** Builds a page's metadata object — canonical URL + Open Graph/Twitter tags
 * derived from the same title/description every page already defines, so
 * nothing is duplicated or rewritten per page. */
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: ORG_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
