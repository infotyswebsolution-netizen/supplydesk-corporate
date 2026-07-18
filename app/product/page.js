import Link from "next/link";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Product",
  description:
    "You control the catalog, the pricing, and who gets access. Your buyers get a clean portal that works the way ordering should.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <Nav />

      <header className="po-section">
        <div className="container">
          <SectionHead idx="Product / What you get" note="Supplier side + buyer side" />
          <h1 className="display-1" style={{ maxWidth: "18ch" }}>
            Your buyers see exactly what you want them to see. Nothing more.
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            You control the catalog, the pricing, and who gets access. Your buyers get a clean
            portal that works the way ordering should.
          </p>
        </div>
      </header>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 01 / What you manage" note="Supplier dashboard" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
            <Reveal id="catalog">
              <h3 className="title">Catalog management</h3>
              <p className="small" style={{ margin: "8px 0 16px" }}>
                Add products, set prices, toggle visibility per product. Change a price once
                &mdash; every buyer portal updates.
              </p>
              <div className="frame">
                <table className="ptable">
                  <tbody>
                    <tr><td className="sku">ER70S-6-035-33</td><td>MIG wire ER70S-6, .035&Prime;</td><td className="price">$64.00</td><td><Badge tone="success">Visible</Badge></td></tr>
                    <tr><td className="sku">AR-CO2-75-25</td><td>Shielding gas 75/25, cyl exchange</td><td className="price">$38.00</td><td><Badge>Hidden</Badge></td></tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal id="buyers">
              <h3 className="title">Buyer management</h3>
              <p className="small" style={{ margin: "8px 0 16px" }}>
                Invite buyers by email. Set which products each buyer sees, and at what price
                &mdash; list, or their negotiated rate.
              </p>
              <div className="frame">
                <table className="ptable">
                  <tbody>
                    <tr><td>Mercer Fabrication</td><td className="sku">List &minus;4%</td><td><Badge tone="success">Active</Badge></td></tr>
                    <tr><td>Dalton Steel Works</td><td className="sku">Negotiated</td><td><Badge tone="success">Active</Badge></td></tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal id="orders">
              <h3 className="title">Order dashboard</h3>
              <p className="small" style={{ margin: "8px 0 16px" }}>
                Every order in one place. Confirm it, mark it fulfilled, print the pick list.
                No retyping.
              </p>
              <div className="frame">
                <table className="ptable">
                  <tbody>
                    <tr><td className="sku">#SD-2214</td><td>Mercer Fab &middot; 6 lines</td><td className="price">$1,208.40</td><td><Badge tone="accent">New</Badge></td></tr>
                    <tr><td className="sku">#SD-2213</td><td>Dalton Steel &middot; 2 lines</td><td className="price">$486.00</td><td><Badge>Confirmed</Badge></td></tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="title">QuickBooks sync</h3>
              <p className="small" style={{ margin: "8px 0 16px" }}>
                Growth and Enterprise plans. Invoices push to QuickBooks automatically when
                you confirm an order.
              </p>
              <div className="frame">
                <table className="ptable">
                  <tbody>
                    <tr><td className="sku">#SD-2213</td><td>Invoice created</td><td><Badge tone="success">Synced</Badge></td></tr>
                    <tr><td className="sku">#SD-2211</td><td>Invoice created</td><td><Badge tone="success">Synced</Badge></td></tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 02 / What your buyers see" note="Buyer portal" />
          <div className="split" style={{ marginTop: 24 }}>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
              <Reveal as="li">
                <h3 className="title">Private login, your branding</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  Your name and logo on the door. Buyers log in to your portal, not to
                  &ldquo;SupplyDesk.&rdquo;
                </p>
              </Reveal>
              <Reveal as="li">
                <h3 className="title">Their catalog only</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  Each buyer sees the products you&rsquo;ve assigned to them, at the price you
                  set. Not your full list. Not anyone else&rsquo;s pricing.
                </p>
              </Reveal>
              <Reveal as="li">
                <h3 className="title">Clean order flow</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  Cart, PO number, submit, done. Repeat a past order in one click.
                </p>
              </Reveal>
              <Reveal as="li">
                <h3 className="title">Order history</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  Every past order with status and totals. Fewer &ldquo;did you get my order?&rdquo; calls.
                </p>
              </Reveal>
            </ul>

            <Reveal className="frame">
              <div className="frame-bar">
                <div className="frame-dots"><span /><span /><span /></div>
                <div className="addr">portal.supplydesk.com/halvorsen-welding/orders</div>
              </div>
              <div className="portal-head">
                <span className="portal-brand">Halvorsen Welding Supply</span>
                <span className="portal-tag">Order history</span>
                <span className="portal-user">Mercer Fabrication</span>
              </div>
              <table className="ptable">
                <thead>
                  <tr><th>Order</th><th>Date</th><th>PO #</th><th className="num">Total</th><th>Status</th></tr>
                </thead>
                <tbody>
                  <tr><td className="sku">#SD-2214</td><td>Jun 26</td><td className="sku">MF-4471</td><td className="price">$1,208.40</td><td><Badge tone="accent">Submitted</Badge></td></tr>
                  <tr><td className="sku">#SD-2212</td><td>Jun 19</td><td className="sku">MF-4460</td><td className="price">$306.35</td><td><Badge tone="success">Fulfilled</Badge></td></tr>
                  <tr><td className="sku">#SD-2196</td><td>Jun 05</td><td className="sku">MF-4433</td><td className="price">$2,114.90</td><td><Badge tone="success">Fulfilled</Badge></td></tr>
                  <tr><td className="sku">#SD-2181</td><td>May 22</td><td className="sku">MF-4402</td><td className="price">$764.10</td><td><Badge tone="success">Fulfilled</Badge></td></tr>
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="po-section" id="quickbooks">
        <div className="container">
          <SectionHead idx="SEC 03 / Integrations" note="QuickBooks only — on purpose" />
          <div className="split" style={{ marginTop: 24 }}>
            <div>
              <h3 className="title">QuickBooks &middot; Growth and Enterprise plans</h3>
              <p style={{ marginTop: 10, color: "var(--text-secondary)" }}>
                Invoices push to QuickBooks automatically when you confirm an order. Customers
                and items map once during setup; after that there&rsquo;s nothing to maintain.
              </p>
              <p style={{ marginTop: 16, color: "var(--text-secondary)" }}>
                Line items, quantities, unit prices, the buyer-to-customer match, and the PO
                number all map on their own once that one-time setup is done. The only manual
                steps left: matching a brand-new product or buyer to QuickBooks the first time,
                and marking an invoice paid in QuickBooks itself &mdash; SupplyDesk creates the
                invoice correctly, it doesn&rsquo;t run your books for you.{" "}
                <Link className="text-link" href="/blog/quickbooks-sync" style={{ fontSize: 14 }}>
                  Read the full sync sequence &rarr;
                </Link>
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
                <Button href="/pricing">See pricing</Button>
                <Button href="/contact" variant="secondary">Talk to us</Button>
              </div>
            </div>

            <Reveal className="frame">
              <div className="portal-head">
                <span className="portal-brand">Sync ledger</span>
                <span className="portal-tag">QuickBooks</span>
              </div>
              <table className="ptable">
                <thead>
                  <tr><th>Order</th><th>Stage</th><th></th></tr>
                </thead>
                <tbody>
                  <tr><td className="sku">#SD-2215</td><td>Order confirmed</td><td><Badge tone="accent">New</Badge></td></tr>
                  <tr><td className="sku">#SD-2214</td><td>Invoice created in QuickBooks</td><td><Badge>Pending</Badge></td></tr>
                  <tr><td className="sku">#SD-2213</td><td>Synced to QuickBooks</td><td><Badge tone="success">Synced</Badge></td></tr>
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 04 / Getting started" note="Typical timeline" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, marginTop: 24, borderTop: "2px solid var(--ink)" }}>
            <Reveal style={{ padding: "20px 24px 0 0", borderRight: "1px solid var(--line)" }}>
              <span className="mono-label" style={{ color: "var(--weld)" }}>Day 1</span>
              <p style={{ marginTop: 8 }}>
                Import your price list or type it in directly. Most suppliers start with their
                top 50&ndash;100 SKUs, not the full catalog.
              </p>
            </Reveal>
            <Reveal style={{ padding: "20px 24px 0 24px", borderRight: "1px solid var(--line)" }}>
              <span className="mono-label" style={{ color: "var(--weld)" }}>Day 2&ndash;3</span>
              <p style={{ marginTop: 8 }}>
                Invite one buyer &mdash; usually the one who calls in the most. Set their
                pricing and watch their first order come through.
              </p>
            </Reveal>
            <Reveal style={{ padding: "20px 24px 0 24px", borderRight: "1px solid var(--line)" }}>
              <span className="mono-label" style={{ color: "var(--weld)" }}>Week 1</span>
              <p style={{ marginTop: 8 }}>
                Add the rest of your buyers in batches. Each one gets their own pricing &mdash;
                list, or negotiated.
              </p>
            </Reveal>
            <Reveal style={{ padding: "20px 0 0 24px" }}>
              <span className="mono-label" style={{ color: "var(--weld)" }}>Ongoing</span>
              <p style={{ marginTop: 8 }}>
                Update prices and add products as needed. No release cycle, no developer, no
                downtime.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
