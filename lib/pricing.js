// Single source of truth for plan pricing — consumed by the pricing table
// UI (components/PricingPlans.jsx) and by the SoftwareApplication JSON-LD
// on the homepage, so the numbers can never drift out of sync.

// Annual billing = 2 months free (10 months' worth of the monthly price),
// spread across 12 months for the displayed per-month rate.
export function annualTotal(monthly) {
  return monthly * 10;
}
export function annualMonthly(monthly) {
  return Math.round(annualTotal(monthly) / 12);
}

export const plans = [
  {
    key: "starter",
    label: "Plan 01 / Starter",
    name: "Starter",
    className: "",
    monthly: 79,
    maxBuyers: 3,
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
    name: "Growth",
    className: "plan-growth",
    monthly: 199,
    maxBuyers: 15,
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
    name: "Enterprise",
    className: "plan-ent",
    monthly: 399,
    maxBuyers: null,
    rows: [
      { label: "Buyers", value: "Unlimited" },
      { label: "Buyer portal", value: "Included", tone: "yes" },
      { label: "Order management", value: "Included", tone: "yes" },
      { label: "QuickBooks sync", value: "Included", tone: "yes" },
      { label: "RFQ management", value: "Included", tone: "yes" },
      { label: "Support", value: "Dedicated" },
    ],
    ctaVariant: "secondary",
    ctaStyle: { color: "var(--paper)", borderColor: "var(--paper)" },
  },
];
