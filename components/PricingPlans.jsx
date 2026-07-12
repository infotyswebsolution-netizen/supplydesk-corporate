"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

// Annual billing = 2 months free (10 months' worth of the monthly price),
// spread across 12 months for the displayed per-month rate.
function annualTotal(monthly) {
  return monthly * 10;
}
function annualMonthly(monthly) {
  return Math.round(annualTotal(monthly) / 12);
}

const plans = [
  {
    key: "starter",
    label: "Plan 01 / Starter",
    className: "",
    monthly: 79,
    rows: [
      { label: "Buyers", value: "Up to 3" },
      { label: "Buyer portal", value: "Included", tone: "yes" },
      { label: "Order management", value: "Included", tone: "yes" },
      { label: "QuickBooks sync", value: "—", tone: "no" },
      { label: "RFQ management", value: "—", tone: "no" },
      { label: "Support", value: "Email" },
    ],
    ctaVariant: "secondary",
  },
  {
    key: "growth",
    label: "Plan 02 / Growth",
    className: "plan-growth",
    monthly: 199,
    rows: [
      { label: "Buyers", value: "Up to 15" },
      { label: "Buyer portal", value: "Included", tone: "yes" },
      { label: "Order management", value: "Included", tone: "yes" },
      { label: "QuickBooks sync", value: "Included", tone: "yes" },
      { label: "RFQ management", value: "—", tone: "no" },
      { label: "Support", value: "Priority" },
    ],
    ctaVariant: "primary",
  },
  {
    key: "enterprise",
    label: "Plan 03 / Enterprise",
    className: "plan-ent",
    monthly: 399,
    rows: [
      { label: "Buyers", value: "Unlimited" },
      { label: "Buyer portal", value: "Included", tone: "yes" },
      { label: "Order management", value: "Included", tone: "yes" },
      { label: "QuickBooks sync", value: "Included", tone: "yes" },
      { label: "RFQ management", value: "Included", tone: "yes" },
      { label: "Support", value: "Dedicated" },
    ],
    ctaVariant: "primary",
    ctaStyle: { background: "var(--weld)", borderColor: "var(--weld)" },
  },
];

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
