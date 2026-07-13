import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { FooterCta } from "@/components/FooterCta";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, ORG_NAME, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Industrial suppliers were running their B2B ordering on email, PDF price lists, and phone calls. Nothing purpose-built existed for them. So we built SupplyDesk.",
  path: "/about",
});

// Confirmed by Nik: founded 2023, Ontario, Canada (no city/street/postal
// code given, so address stays region + country only — not guessing more
// precision than was provided).
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd} />

      <Nav />

      <header className="po-section">
        <div className="container">
          <SectionHead idx="About / Why this exists" note="Est. 2023" />
          <h1 className="display-1" style={{ maxWidth: "20ch" }}>
            Nothing purpose-built existed for industrial suppliers. So we built it.
          </h1>
          <Reveal style={{ maxWidth: "68ch", marginTop: 24 }}>
            <p>
              Industrial suppliers were running their B2B ordering on email, PDF price lists,
              and phone calls. The big e-commerce platforms were built for selling to the
              public — not for a welding distributor with 40 accounts, negotiated pricing, and
              Net 30 terms. SupplyDesk exists to give those suppliers the private ordering
              system their business actually needs, without hiring a developer to get it.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 01 / What we believe" note="About B2B ordering" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <Reveal style={{ borderLeft: "2px solid var(--ink)", paddingLeft: 20 }}>
              <h3 className="title">Buyers should see their price, not the price list.</h3>
              <p className="small" style={{ marginTop: 8 }}>
                Negotiated pricing is the norm in industrial supply. Software that shows
                everyone the same list price doesn&rsquo;t fit the business.
              </p>
            </Reveal>
            <Reveal style={{ borderLeft: "2px solid var(--ink)", paddingLeft: 20 }}>
              <h3 className="title">An order should be typed once — by the buyer.</h3>
              <p className="small" style={{ marginTop: 8 }}>
                Every time an order is re-keyed from voicemail or email into an invoice, an
                error gets a chance. The buyer already knows what they want; let them enter it.
              </p>
            </Reveal>
            <Reveal style={{ borderLeft: "2px solid var(--ink)", paddingLeft: 20 }}>
              <h3 className="title">Software for operations people should be boring.</h3>
              <p className="small" style={{ marginTop: 8 }}>
                No feature tours, no dashboards you don&rsquo;t need. Catalog, buyers, orders.
                If it takes training to use, we built it wrong.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 02 / Company facts" note="The honest block" />
          <Reveal
            style={{
              border: "1px solid var(--line)",
              background: "var(--surface-card)",
              borderRadius: "var(--radius-1)",
              maxWidth: 560,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--line)" }}>
              <span className="small">Founded</span><span className="mono-data" style={{ fontSize: 14 }}>2023</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--line)" }}>
              <span className="small">Based in</span><span className="mono-data" style={{ fontSize: 14 }}>Ontario, Canada</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--line)" }}>
              <span className="small">Team</span><span className="mono-data" style={{ fontSize: 14 }}>Small, and answers its own support email</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 20px" }}>
              <span className="small">Focus</span><span className="mono-data" style={{ fontSize: 14 }}>Private B2B ordering. That&rsquo;s it.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCta>Want to talk about whether SupplyDesk fits your business?</FooterCta>

      <SiteFooter />
    </>
  );
}
