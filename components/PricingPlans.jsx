"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { plans, annualTotal, annualMonthly } from "@/lib/pricing";

export function PricingPlans() {
  const [billing, setBilling] = React.useState("monthly");

  return (
    <>
      <div className="toggle" role="group" aria-label="Billing period">
        <button
          type="button"
          aria-pressed={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          aria-pressed={billing === "annual"}
          onClick={() => setBilling("annual")}
        >
          Annual &middot; 2 months free
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 28, alignItems: "stretch", marginTop: 40 }}>
        {plans.map((plan) => (
          <Reveal key={plan.key} className={`plan-doc ${plan.className}`.trim()}>
            <div className="doc-head">
              <span className="mono-label">{plan.label}</span>
            </div>
            <div className="doc-body">
              <p style={{ margin: "14px 0 2px" }}>
                <span className="mono-data" style={{ fontSize: 34 }}>
                  ${billing === "monthly" ? plan.monthly : annualMonthly(plan.monthly)}
                </span>
                <span className="small">/mo</span>
              </p>
              <p className="small">
                {billing === "monthly"
                  ? "billed monthly"
                  : `billed annually ($${annualTotal(plan.monthly).toLocaleString()}/yr)`}
                {billing === "annual" ? (
                  <span className="mono-label" style={{ marginLeft: 8 }}>&mdash; 2 months free</span>
                ) : null}
              </p>
              <div style={{ marginTop: 16 }}>
                {plan.rows.map((row) => (
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
        16&ndash;50 buyers doesn&rsquo;t sort neatly into Growth or Enterprise by count
        alone &mdash; most suppliers in that range move to Enterprise once QuickBooks sync
        or RFQ management is the actual requirement, not the buyer number.{" "}
        <Link className="text-link" href="/contact" style={{ fontSize: 14 }}>
          Talk to us
        </Link>{" "}
        and we&rsquo;ll tell you plainly which plan fits.
      </p>

      <Reveal
        style={{
          marginTop: 40,
          border: "1px dashed var(--weld)",
          borderRadius: "var(--radius-1)",
          background: "var(--weld-tint)",
          padding: 28,
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 300 }}>
          <p className="mono-label" style={{ color: "var(--weld)", marginBottom: 8 }}>Before you commit</p>
          <h3 className="title">Want to see SupplyDesk with your actual products and buyers?</h3>
          <p className="small" style={{ marginTop: 6 }}>
            We&rsquo;ll load a sample of your catalog and walk you through it on a call. No card,
            no auto-enroll.
          </p>
        </div>
        <Button href="/contact">Talk to us &rarr;</Button>
      </Reveal>
    </>
  );
}
