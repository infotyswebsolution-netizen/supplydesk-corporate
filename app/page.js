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

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd} />

      <div className="form-strip">
        <div className="container">
          <span>Form SD-100 &middot; Rev 06/26</span>
          <div className="right">
            <span>Private B2B ordering</span>
            <span>Ontario, Canada</span>
            <span>Est. 2023</span>
          </div>
        </div>
      </div>

      <Nav />

      <header className="hero">
        <div className="ruler" aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p className="mono-label" style={{ color: "var(--ink)" }}>
            For industrial suppliers with real buyers, real pricing, and no patience for software
          </p>
          <h1>
            Your buyers still order by <span className="strike">phone</span>,{" "}
            <span className="strike">email</span>, and{" "}
            <span className="strike">PDF&nbsp;price&nbsp;list</span>.
          </h1>

          <div className="split split-lg split-end" style={{ marginTop: 44 }}>
            <div>
              <p className="lede">
                SupplyDesk replaces all three. Each buyer gets a private portal &mdash; their
                catalog, their negotiated prices, their order history. Orders land in your
                dashboard as line items, not voicemails.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
                <Button href="/contact">See how it works &rarr;</Button>
                <span className="stamp">No signup forms &mdash; talk to a human</span>
              </div>
            </div>

            <Reveal className="frame">
              <div className="frame-bar">
                <div className="frame-dots"><span /><span /><span /></div>
                <div className="addr">portal.supplydesk.com/halvorsen-welding</div>
              </div>
              <div className="portal-head">
                <span className="portal-brand">Halvorsen Welding Supply</span>
                <span className="portal-tag">Buyer portal</span>
                <span className="portal-user">Mercer Fabrication &middot; Net 30</span>
              </div>
              <table className="ptable">
                <thead>
                  <tr><th>SKU</th><th>Product</th><th className="num">Your price</th><th></th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sku">ER70S-6-035-33</td>
                    <td>MIG wire ER70S-6, .035&Prime;, 33 lb spool</td>
                    <td className="price">$61.40</td>
                    <td><button className="pill-add" type="button">Add</button></td>
                  </tr>
                  <tr>
                    <td className="sku">E7018-125-50</td>
                    <td>Stick electrode E7018, 1/8&Prime;, 50 lb can</td>
                    <td className="price">$148.75</td>
                    <td><button className="pill-add" type="button">Add</button></td>
                  </tr>
                  <tr>
                    <td className="sku">E71T1-045-33</td>
                    <td>Flux-core E71T-1, .045&Prime;, 33 lb spool</td>
                    <td className="price">$96.20</td>
                    <td><button className="pill-add" type="button">Add</button></td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px" }}>
                <span className="mono-label">Cart &middot; 3 items</span>
                <span className="mono-data" style={{ marginLeft: "auto" }}>$306.35</span>
                <Button size="sm">Place order</Button>
              </div>
            </Reveal>
          </div>

          <div className="spec-strip">
            <div className="cell"><span className="k">Input</span><span className="v">Phone calls, emailed POs, quarterly PDFs</span></div>
            <div className="cell"><span className="k">Output</span><span className="v">Structured line items: SKU, qty, PO number</span></div>
            <div className="cell"><span className="k">Setup</span><span className="v">No developer. Catalog live in an afternoon.</span></div>
            <div className="cell"><span className="k">Buyer cost</span><span className="v">$0 &mdash; buyers never pay</span></div>
          </div>
        </div>
      </header>

      <section className="po-section" style={{ paddingTop: 48 }}>
        <div className="container">
          <SectionHead idx="SEC 01 / The difference" note="Exhibit A vs. Exhibit B" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            <Reveal style={{ position: "relative", border: "1px solid var(--line)", background: "var(--surface-recessed)", padding: 28 }}>
              <span className="stamp" style={{ position: "absolute", top: 18, right: 18 }}>Obsolete</span>
              <p className="mono-label" style={{ marginBottom: 14 }}>Exhibit A &middot; The old way</p>
              <h3 className="title" style={{ maxWidth: "24ch" }}>A 40-page PDF price list, re-sent every quarter.</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)" }}>
                Buyers call in orders from an outdated copy. Someone retypes them into
                QuickBooks. Pricing mistakes get caught at invoicing &mdash; or not at all.
              </p>
            </Reveal>
            <Reveal style={{ position: "relative", border: "1px solid var(--ink)", background: "var(--surface-card)", padding: 28 }}>
              <span className="stamp green" style={{ position: "absolute", top: 18, right: 18 }}>Current</span>
              <p className="mono-label" style={{ marginBottom: 14, color: "var(--weld)" }}>Exhibit B &middot; With SupplyDesk</p>
              <h3 className="title" style={{ maxWidth: "24ch" }}>Each buyer sees their items, at their price, current as of today.</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)" }}>
                One catalog serves every buyer. Change a price once and every portal updates.
                Orders arrive as structured line items &mdash; SKU, quantity, PO number.
              </p>
            </Reveal>
          </div>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", marginTop: 40, borderTop: "2px solid var(--ink)" }}>
            <Reveal style={{ flex: 1, minWidth: 220, padding: "20px 24px 0 0", borderRight: "1px solid var(--line)" }}>
              <p className="mono-data" style={{ fontSize: 30 }}>1 catalog</p>
              <p className="small" style={{ marginTop: 4 }}>serves every buyer you invite, each with their own pricing</p>
            </Reveal>
            <Reveal style={{ flex: 1, minWidth: 220, padding: "20px 24px 0 24px", borderRight: "1px solid var(--line)" }}>
              <p className="mono-data" style={{ fontSize: 30 }}>0 retyping</p>
              <p className="small" style={{ marginTop: 4 }}>orders arrive as line items, ready to confirm and fulfill</p>
            </Reveal>
            <Reveal style={{ flex: 1, minWidth: 220, padding: "20px 0 0 24px" }}>
              <p className="mono-data" style={{ fontSize: 30 }}>$0 for buyers</p>
              <p className="small" style={{ marginTop: 4 }}>your buyers never pay to use their portal</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 02 / How it works" note="3 steps · no developer" />

          <Reveal as="div" className="step">
            <span className="num">01</span>
            <div>
              <h3 className="heading">Set up your catalog</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)", maxWidth: "40ch" }}>
                Add products, set base prices, toggle what each buyer can see. Import from a
                spreadsheet if that&rsquo;s where your list lives today.
              </p>
            </div>
            <div className="frame">
              <div className="portal-head"><span className="portal-brand">Catalog</span><span className="portal-tag">Supplier dashboard</span></div>
              <table className="ptable">
                <tbody>
                  <tr><td className="sku">ER70S-6-035-33</td><td>MIG wire ER70S-6, .035&Prime;</td><td className="price">$64.00</td><td><Badge tone="success">Visible</Badge></td></tr>
                  <tr><td className="sku">E7018-125-50</td><td>Stick electrode E7018, 1/8&Prime;</td><td className="price">$155.00</td><td><Badge tone="success">Visible</Badge></td></tr>
                  <tr><td className="sku">GL-KIT-TW2</td><td>Gas lens kit, Tweco 2</td><td className="price">$42.50</td><td><Badge>Hidden</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal as="div" className="step">
            <span className="num">02</span>
            <div>
              <h3 className="heading">Invite your buyers</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)", maxWidth: "40ch" }}>
                Each buyer gets a private login and sees only their assigned products and
                pricing &mdash; list price, or their negotiated rate.
              </p>
            </div>
            <div className="frame">
              <div className="portal-head"><span className="portal-brand">Buyers</span><span className="portal-tag">Supplier dashboard</span></div>
              <table className="ptable">
                <tbody>
                  <tr><td>Mercer Fabrication</td><td className="sku">184 items &middot; list &minus;4%</td><td><Badge tone="success">Active</Badge></td></tr>
                  <tr><td>Dalton Steel Works</td><td className="sku">96 items &middot; negotiated</td><td><Badge tone="success">Active</Badge></td></tr>
                  <tr><td>Roebling Marine</td><td className="sku">&mdash;</td><td><Badge tone="accent">Invited</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal as="div" className="step">
            <span className="num">03</span>
            <div>
              <h3 className="heading">Orders come in automatically</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)", maxWidth: "40ch" }}>
                Confirm, fulfill, done. On Growth and Enterprise, invoices push to QuickBooks
                when you confirm.
              </p>
            </div>
            <div className="frame">
              <div className="portal-head"><span className="portal-brand">Orders</span><span className="portal-tag">Supplier dashboard</span></div>
              <table className="ptable">
                <tbody>
                  <tr><td className="sku">#SD-2214</td><td>Mercer Fab &middot; 6 lines</td><td className="price">$1,208.40</td><td><Badge tone="accent">New</Badge></td></tr>
                  <tr><td className="sku">#SD-2213</td><td>Dalton Steel &middot; 2 lines</td><td className="price">$486.00</td><td><Badge>Confirmed</Badge></td></tr>
                  <tr><td className="sku">#SD-2212</td><td>Mercer Fab &middot; 4 lines</td><td className="price">$306.35</td><td><Badge tone="success">Fulfilled</Badge></td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="po-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead idx="SEC 03 / Plans" note="Order form SD-200 · full detail on pricing page" />
          <Reveal className="order-form">
            <table>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Buyers</th>
                  <th className="hide-m">QuickBooks</th>
                  <th className="hide-m">RFQ</th>
                  <th>$/mo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="plan-name">Starter</td>
                  <td className="mono-data">Up to 3</td>
                  <td className="hide-m"><span className="exc">&mdash;</span></td>
                  <td className="hide-m"><span className="exc">&mdash;</span></td>
                  <td className="price">$79</td>
                  <td style={{ textAlign: "right" }}><a className="text-link" href="/pricing" style={{ fontSize: 14 }}>Detail &rarr;</a></td>
                </tr>
                <tr className="hot">
                  <td className="plan-name">Growth <span className="mono-label" style={{ color: "var(--weld)", marginLeft: 10 }}>Most start here</span></td>
                  <td className="mono-data">Up to 15</td>
                  <td className="hide-m"><span className="inc">Included</span></td>
                  <td className="hide-m"><span className="exc">&mdash;</span></td>
                  <td className="price">$199</td>
                  <td style={{ textAlign: "right" }}><a className="text-link" href="/pricing" style={{ fontSize: 14 }}>Detail &rarr;</a></td>
                </tr>
                <tr>
                  <td className="plan-name">Enterprise</td>
                  <td className="mono-data">Unlimited</td>
                  <td className="hide-m"><span className="inc">Included</span></td>
                  <td className="hide-m"><span className="inc">Included</span></td>
                  <td className="price">$399</td>
                  <td style={{ textAlign: "right" }}><a className="text-link" href="/pricing" style={{ fontSize: 14 }}>Detail &rarr;</a></td>
                </tr>
              </tbody>
            </table>
            <div className="order-cards">
              {plans.map((plan) => (
                <div className={`plan-doc ${plan.className}`.trim()} key={plan.key}>
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
                    <a
                      className="text-link"
                      href="/pricing"
                      style={{ fontSize: 14, marginTop: 16, display: "inline-block" }}
                    >
                      Full detail &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="small" style={{ marginTop: 14 }}>
            Annual billing: 2 months free. Prices are on the page &mdash; including Enterprise.{" "}
            <a className="text-link" href="/pricing" style={{ fontSize: 14 }}>See full pricing &rarr;</a>
          </p>
        </div>
      </section>

      <div className="band" aria-hidden="true" />

      <FooterCta size="lg">Ready to stop taking orders by phone?</FooterCta>

      <SiteFooter formNumber="Form SD-100" />
    </>
  );
}
