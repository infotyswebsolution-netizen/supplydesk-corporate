import "./pricing.css";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingPlans } from "@/components/PricingPlans";
import { SectionHead } from "@/components/SectionHead";

export const metadata = {
  title: "Pricing",
  description:
    "Pay for what you actually use. Plans scale by buyer count. Every plan includes the buyer portal and order management — prices are on the page, including Enterprise.",
};

const questions = [
  {
    q: "Can I change plans later?",
    a: "Yes, any time. Upgrades take effect immediately; downgrades take effect at your next billing date. Your catalog and order history carry over untouched.",
  },
  {
    q: "What happens to my buyers if I downgrade?",
    a: "Nothing is deleted. If you have more buyers than the new plan allows, the extra buyer accounts pause — you pick which ones stay active. Reactivate them by upgrading again.",
  },
  {
    q: "Do my buyers pay anything?",
    a: "No. Buyer portal access is free for your buyers on every plan, always. You pay for the account; they just log in and order.",
  },
  {
    q: "Is QuickBooks required?",
    a: "No. SupplyDesk works fine on its own — orders, catalog, and buyer management don't depend on it. QuickBooks sync is an option on Growth and Enterprise for suppliers who invoice there.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. Plans are month-to-month, or annual if you want 2 months free. Cancel any time — you keep access through the end of the period you already paid for.",
  },
  {
    q: "What if I have more than 50 buyers?",
    a: "Enterprise includes unlimited buyers at one price. If you're not sure it fits, tell us your buyer count and current setup on a call and we'll say plainly which plan makes sense.",
  },
  {
    q: 'What counts as a "buyer"?',
    a: "One buyer = one customer company with portal access. A buyer company can have multiple people logging in under it — that still counts as one buyer.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />

      <header className="po-section">
        <div className="container">
          <SectionHead idx="Pricing / 3 plans" note="No hidden costs · buyers pay nothing" />
          <h1 className="display-1" style={{ maxWidth: "16ch" }}>Pay for what you actually use.</h1>
          <p className="lede" style={{ marginTop: 16 }}>
            Plans scale by buyer count. Every plan includes the buyer portal and order
            management. Prices are on the page — including Enterprise.
          </p>
        </div>
      </header>

      <section className="po-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PricingPlans />
        </div>
      </section>

      <section className="po-section">
        <div className="container">
          <SectionHead idx="SEC 02 / Questions about pricing" note="The short answers" />
          <div style={{ maxWidth: 760 }}>
            {questions.map(({ q, a }) => (
              <details className="q" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
