import "./page.css";
import "./pricing/pricing.css";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { FooterCta } from "@/components/FooterCta";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { SectionHead } from "@/components/SectionHead";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, ORG_NAME, pageMetadata } from "@/lib/site";
import { plans } from "@/lib/pricing";

export const metadata = {
  ...pageMetadata({
    title: "Private ordering portals for industrial suppliers",
    description:
      "Your buyers still order by phone, email, and PDF price list. SupplyDesk replaces all three with a private buyer portal — their catalog, their price, their order history.",
    path: "/",
  }),
  // Home's page.js shares the root route segment with the layout that
  // defines title.template ("%s — SupplyDesk"), so that template never
  // applies here (Next.js: a parent's template only reaches child
  // segments) — every other page gets the "— SupplyDesk" suffix in its
  // <title>, Home wouldn't without this override.
  title: { absolute: "Private ordering portals for industrial suppliers — SupplyDesk" },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: ORG_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: String(plan.monthly),
    priceCurrency: "USD",
    url: `${SITE_URL}/pricing`,
  })),
};

const features = [
  {
    n: "01",
    title: "Catalog management",
    body: "Add products, set prices, toggle visibility per product. Change a price once — every buyer portal updates.",
  },
  {
    n: "02",
    title: "Buyer management",
    body: "Invite buyers by email. Set which products each buyer sees, and at what price — list, or their negotiated rate.",
  },
  {
    n: "03",
    title: "Order dashboard",
    body: "Every order in one place. Confirm it, mark it fulfilled, print the pick list. No retyping.",
  },
  {
    n: "04",
    title: "QuickBooks sync",
    body: "Invoices push to QuickBooks automatically when you confirm an order.",
    emphasize: true,
  },
];

const pricingQuestions = [
  {
    q: "Do my buyers pay anything?",
    a: "No. Buyer portal access is free for your buyers on every plan, always.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. Plans are month-to-month, or annual if you want 2 months free.",
  },
  {
    q: "Is QuickBooks required?",
    a: "No. SupplyDesk works fine on its own. QuickBooks sync is an option on Growth and Enterprise.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades take effect immediately; downgrades take effect at your next billing date.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />

      <div className="form-strip">
        <div className="container">
          <span>Form SD-100 &middot; Rev 07/26</span>
          <div className="right">
            <span>Private B2B ordering</span>
            <span>Ontario, Canada</span>
            <span>Est. 2023</span>
          </div>
        </div>
      </div>

      <Nav />

      <header className="hero">
        <div className="container">
          <span className="hero-badge">For industrial suppliers &middot; no patience for software required</span>
          <h1>Your buyers get their own portal. Your orders run themselves.</h1>
          <p className="lede">
            SupplyDesk replaces phone orders, email, and PDF price lists with a private buyer
            portal &mdash; their catalog, their negotiated prices, their order history.
          </p>
          <div className="hero-ctas">
            <Button href="/product">See the product &rarr;</Button>
            <Button href="/contact" variant="secondary">Talk to us</Button>
          </div>
          <p className="hero-microcopy">
            <span className="stamp">No signup forms &middot; no free-trial tricks &middot; buyers pay $0</span>
          </p>
          <div className="hero-proof">
            <span className="mono-label" style={{ color: "var(--weld)" }}>Why no logos here</span>
            <p className="small">
              We don&rsquo;t print customer counts we can&rsquo;t back up. Ask on the call and
              we&rsquo;ll tell you exactly who runs on SupplyDesk today.
            </p>
          </div>
        </div>
      </header>

      <section className="shot-section">
        <div className="container">
          <Reveal className="frame product-shot">
            <div className="frame-bar">
              <div className="frame-dots"><span /><span /><span /></div>
              <div className="addr">portal.supplydesk.com/halvorsen-welding/orders</div>
            </div>
            <div className="shot-body">
              <nav className="shot-sidebar" aria-hidden="true">
                <span>Catalog</span>
                <span>Buyers</span>
                <span className="active">Orders</span>
                <span>QuickBooks</span>
              </nav>
              <div className="shot-main">
                <div className="portal-head">
                  <span className="portal-brand">Halvorsen Welding Supply</span>
                  <span className="portal-tag">Orders</span>
                  <span className="portal-user">Supplier dashboard</span>
                </div>
                <table className="ptable">
                  <tbody>
                    <tr>
                      <td className="sku">#SD-2214</td>
                      <td>Mercer Fabrication &middot; 6 lines &middot; PO MF-4471</td>
                      <td className="price">$1,208.40</td>
                      <td><Badge tone="accent">New</Badge></td>
                    </tr>
                    <tr>
                      <td className="sku">#SD-2213</td>
                      <td>Dalton Steel Works &middot; 2 lines &middot; PO DS-1182</td>
                      <td className="price">$486.00</td>
                      <td><Badge tone="success">Confirmed</Badge></td>
                    </tr>
                    <tr>
                      <td className="sku">#SD-2212</td>
                      <td>Mercer Fabrication &middot; 4 lines &middot; PO MF-4460</td>
                      <td className="price">$306.35</td>
                      <td><Badge>Fulfilled</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="po-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="stats-strip">
            <div className="cell">
              <span className="stat-num">1 catalog</span>
              <span className="stat-cap">serves every buyer you invite, each with their own pricing</span>
            </div>
            <div className="cell">
              <span className="stat-num">0 retyping</span>
              <span className="stat-cap">orders arrive as line items, ready to confirm and fulfill</span>
            </div>
            <div className="cell">
              <span className="stat-num">$0 for buyers</span>
              <span className="stat-cap">your buyers never pay to use their portal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 01 / What you get" note="Supplier dashboard" />
          <div className="feature-grid">
            {features.map((f) => (
              <Reveal key={f.n} className={`feature-card${f.emphasize ? " emphasize" : ""}`}>
                {f.emphasize ? (
                  <span className="chip"><Badge tone="success">Synced</Badge></span>
                ) : null}
                <span className="feature-num">{f.n}</span>
                <h3 className="title">{f.title}</h3>
                <p className="small" style={{ marginTop: 8 }}>{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="po-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead idx="SEC 02 / Plans" note="Prices are on the page" />
          <div className="plans-band">
            {plans.map((plan) => (
              <Reveal key={plan.key} className={`plan-doc ${plan.className}`.trim()}>
                <div className="doc-head">
                  <span className="mono-label">{plan.name}</span>
                </div>
                <div className="doc-body">
                  <p style={{ margin: "14px 0 2px" }}>
                    <span className="mono-data" style={{ fontSize: 28 }}>${plan.monthly}</span>
                    <span className="small">/mo</span>
                  </p>
                  <div style={{ marginTop: 12 }}>
                    {plan.rows
                      .filter((row) => ["Buyers", "QuickBooks sync", "RFQ management"].includes(row.label))
                      .map((row) => (
                        <div className="plan-row" key={row.label}>
                          <span>{row.label}</span>
                          <span className={`val ${row.tone || ""}`.trim()}>{row.value}</span>
                        </div>
                      ))}
                  </div>
                  <Button
                    variant={plan.ctaVariant}
                    href="/contact"
                    style={{ marginTop: 22, justifyContent: "center", ...(plan.ctaStyle || {}) }}
                  >
                    Talk to us
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="small" style={{ marginTop: 20 }}>
            Prices are on the page &mdash; including Enterprise.{" "}
            <a className="text-link" href="/pricing" style={{ fontSize: 14 }}>See full pricing &rarr;</a>
          </p>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 03 / Questions about pricing" note="The short answers" />
          <div className="qa-grid">
            {pricingQuestions.map((item) => (
              <Reveal key={item.q}>
                <h3 className="title">{item.q}</h3>
                <p className="small" style={{ marginTop: 6 }}>{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="band" aria-hidden="true" />

      <FooterCta size="lg">Ready to stop taking orders by phone?</FooterCta>

      <SiteFooter formNumber="Form SD-100" />
    </>
  );
}
