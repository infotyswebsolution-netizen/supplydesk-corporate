import Link from "next/link";

/** Shared footer. `formNumber` adds the order-form legal prefix — Home only. */
export function SiteFooter({ formNumber }) {
  return (
    <footer className="site-footer">
      <div className="container cols">
        <Link href="/product">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/security">Security</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <span className="legal">
          {formNumber ? `${formNumber} · ` : ""}
          &copy; SupplyDesk {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
