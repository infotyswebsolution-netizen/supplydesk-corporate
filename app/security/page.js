import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { FooterCta } from "@/components/FooterCta";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Security",
  description:
    "Your buyers' data and your pricing stay private. Here is exactly how it's protected — no badges, no vague claims.",
  path: "/security",
});

const sections = [
  {
    idx: "Data isolation",
    note: "Per-supplier",
    paragraphs: [
      "Each supplier's data is completely isolated. Buyers from one supplier cannot see or access another supplier's catalog, orders, or pricing. Isolation is enforced with row-level security at the database level — not just in the application code.",
    ],
  },
  {
    idx: "Access control",
    note: "Per-buyer",
    paragraphs: [
      "Buyers log in to a private portal scoped to your account. They see only the products you've assigned to them, at the prices you've set for them. No buyer can access another buyer's orders, catalog, or pricing — including buyers on the same account.",
    ],
  },
  {
    idx: "Payments & billing",
    note: "Stripe",
    paragraphs: [
      "Payment processing runs through Stripe. SupplyDesk never stores card numbers — they go directly to Stripe and stay there. PCI compliance is handled by Stripe's certified infrastructure.",
    ],
  },
  {
    idx: "Infrastructure",
    note: "Vercel + Supabase",
    paragraphs: [
      "SupplyDesk is hosted on Vercel and Supabase, with uptime monitoring. Data is encrypted in transit (TLS) and at rest. Backups are handled by Supabase infrastructure.",
      {
        small: true,
        text: "We don't claim SOC 2 or ISO 27001, because we don't hold those certifications. If a specific compliance question matters to your business, ask us directly — you'll get a straight answer.",
      },
    ],
  },
  {
    idx: "Support & incident response",
    note: "What happens if something breaks",
    paragraphs: [
      "If something goes wrong — an outage, a sync failure, a data question — you email us directly and a person answers. There's no ticket queue that disappears for a week. Enterprise accounts get a dedicated contact; every other plan reaches the same team, just without a guaranteed response window.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <Nav />

      <header className="po-section">
        <div className="container">
          <SectionHead idx="Security / How your data is handled" note="Specific · no certifications claimed" />
          <h1 className="display-1" style={{ maxWidth: "18ch" }}>
            Your buyers&rsquo; data and your pricing stay private.
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            You&rsquo;re putting your order system and your buyer list into this platform.
            Here is exactly how it&rsquo;s protected — no badges, no vague claims.
          </p>
        </div>
      </header>

      {sections.map((s) => (
        <section className="po-section" key={s.idx}>
          <div className="container">
            <SectionHead idx={s.idx} note={s.note} />
            <Reveal style={{ maxWidth: "68ch" }}>
              {s.paragraphs.map((p, i) =>
                typeof p === "string" ? (
                  <p key={i}>{p}</p>
                ) : (
                  <p key={i} className="small" style={{ marginTop: 16 }}>
                    {p.text}
                  </p>
                )
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <FooterCta>Questions about security?</FooterCta>

      <SiteFooter />
    </>
  );
}
