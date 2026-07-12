import { Button } from "./Button";

/** The dark CTA band used on Home, About, Blog listing, and Security — the
 * pages whose own final section isn't already a conversion prompt. */
export function FooterCta({ children, size = "md" }) {
  return (
    <section className="footer-cta">
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <h2
          className={size === "md" ? "display-2" : undefined}
          style={
            size === "lg"
              ? {
                  flex: 1,
                  minWidth: 300,
                  font: "900 clamp(34px, 4.4vw, 60px)/1.02 var(--font-display)",
                  letterSpacing: "-0.025em",
                  color: "var(--text-inverse)",
                  textWrap: "balance",
                }
              : { flex: 1, minWidth: 300 }
          }
        >
          {children}
        </h2>
        <Button href="/contact">Talk to us &rarr;</Button>
      </div>
    </section>
  );
}
