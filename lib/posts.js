// Blog content — memo-style operational notes. Order here is display order
// (newest first), matching the numbering on the listing page.

export const posts = [
  {
    slug: "phone-order-math",
    memo: "003",
    tag: "Operations",
    date: "Jun 24, 2026",
    datePublished: "2026-06-24",
    readTime: "4 min read",
    title: "The real cost of a phone order",
    titleMaxWidth: "22ch",
    excerpt:
      "Every order taken by phone gets re-typed at least once. Here's what that actually costs a small supplier over a year, line by line.",
    lede:
      "Every order taken by phone gets re-typed at least once — usually twice. Here's what that actually costs a small supplier over a year, and where the number hides.",
    body: [
      { type: "h2", text: "The three re-types" },
      {
        type: "p",
        text: "A buyer calls in an order. Someone at the front desk writes it on a pad, or types it straight into an email to themselves. That's re-type one. Later, it gets entered into whatever system tracks fulfillment — a spreadsheet, a paper pick ticket, or an order form. That's re-type two. At month end, it gets entered again into QuickBooks for invoicing. That's three.",
      },
      {
        type: "p",
        text: "Each re-type takes 2–4 minutes for a typical multi-line order. At 40 phone orders a week, that's 4–8 hours of pure re-typing, every week, before anyone touches the phone that took the call in the first place.",
      },
      { type: "h2", text: "Where the errors happen" },
      {
        type: "p",
        text: 'Re-typing isn\'t just slow — it\'s where wrong quantities, wrong SKUs, and wrong prices get introduced. A "33 lb spool" becomes a "50 lb can" because someone misheard a part number over a bad connection. A price quoted six months ago gets used because nobody checked the current sheet. These mistakes are usually caught at delivery or at invoicing — the two most expensive places to catch them.',
      },
      {
        type: "pull",
        text: '"We didn\'t know how many orders had a pricing mistake until we stopped re-typing them. Turned out to be about one in twenty."',
      },
      { type: "h2", text: "What changes with a portal" },
      {
        type: "p",
        text: "When a buyer places their own order through a portal, it's typed once — by the person who actually knows what they want. The order arrives as structured line items: SKU, quantity, PO number, at the price that buyer is supposed to pay. Nobody re-keys it. The front desk stops being a transcription service and starts being the people who confirm and fulfill.",
      },
      {
        type: "p",
        text: "This doesn't eliminate phone calls. Buyers still call with questions, special requests, and the occasional emergency order. It removes the re-typing that happens after the call — the part that doesn't need a human doing it three times.",
      },
    ],
  },
  {
    slug: "catalog-setup",
    memo: "002",
    tag: "Setup",
    date: "Jun 11, 2026",
    datePublished: "2026-06-11",
    readTime: "5 min read",
    title: "Setting up your catalog before you invite a single buyer",
    titleMaxWidth: "24ch",
    excerpt:
      "The order you do things in matters more than the software. Four steps to get right before your first buyer logs in.",
    lede:
      "The order you do things in matters more than the software. Suppliers who get their first month right almost always did these four things before sending a single invite.",
    body: [
      { type: "h2", text: "1. Start with your best sellers, not everything" },
      {
        type: "p",
        text: "Loading a full 2,000-line price list before inviting anyone feels thorough, but it delays your first real order by weeks and buries the products that actually move. Suppliers who move fastest start with the 50–100 SKUs that make up most of their volume, get a buyer ordering against those, then add the rest over the following weeks.",
      },
      { type: "h2", text: "2. Decide list price vs. negotiated pricing up front" },
      {
        type: "p",
        text: "If most of your buyers pay the same price, set that as your list price and only override it for the few accounts with a special rate. If pricing is negotiated account-by-account, it's worth pulling those numbers together before you start — from old quotes, invoices, or whatever spreadsheet currently tracks it — rather than setting them one buyer at a time as questions come in.",
      },
      { type: "h2", text: "3. Hide what isn't ready" },
      {
        type: "p",
        text: "A product doesn't have to be visible the day it's added. Discontinued items, seasonal stock, or anything with pricing you haven't finalized can sit in the catalog hidden until it's ready. Buyers only ever see what's toggled visible for them.",
      },
      {
        type: "pull",
        text: '"We loaded our top 80 items, invited our biggest account, and had a real order in three days. The other 400 SKUs went in over the next month, in batches, while orders kept coming."',
      },
      { type: "h2", text: "4. Test with one buyer first" },
      {
        type: "p",
        text: "Before inviting your full buyer list, invite one — ideally the account that calls in most often. Watch what they order, whether the pricing looks right to them, and whether anything is missing from their view. Fix it once, then invite the rest with confidence instead of fielding the same question from twenty people.",
      },
    ],
  },
  {
    slug: "quickbooks-sync",
    memo: "001",
    tag: "Integrations",
    date: "May 28, 2026",
    datePublished: "2026-05-28",
    readTime: "4 min read",
    title: "What actually happens when an order syncs to QuickBooks",
    titleMaxWidth: "24ch",
    excerpt:
      "QuickBooks sync is one line in the pricing table. Here's the exact sequence of what maps automatically and what still needs a human.",
    lede:
      'QuickBooks sync is one line in the pricing table: "invoices push to QuickBooks automatically." Here\'s the exact sequence of what that means, on Growth and Enterprise plans.',
    body: [
      { type: "h2", text: "What triggers a sync" },
      {
        type: "p",
        text: 'Nothing syncs the moment an order is placed. A buyer\'s order sits as "new" until you confirm it — that\'s the point where you\'re saying the order is correct and going to be fulfilled. Confirming is what triggers the invoice to be created in QuickBooks, not the buyer\'s submission.',
      },
      { type: "h2", text: "What maps automatically, and what doesn't" },
      {
        type: "p",
        text: "During setup, you match your SupplyDesk products to QuickBooks items once, and your buyers to QuickBooks customers once. After that, every confirmed order maps on its own — line items, quantities, and prices flow straight into a new invoice under the matching customer. New products or new buyers you add later need that same one-time match before their orders will sync; until then, they queue and confirm normally, just without the QuickBooks step.",
      },
      {
        type: "ul",
        items: [
          {
            bold: "Maps automatically:",
            rest: " line items, quantities, unit prices, buyer-to-customer, PO number as a memo field.",
          },
          {
            bold: "Still manual:",
            rest: " matching a brand-new product or buyer to QuickBooks the first time; marking an invoice paid in QuickBooks itself.",
          },
        ],
      },
      {
        type: "pull",
        text: '"The part we didn\'t expect: we still mark invoices paid in QuickBooks like always. SupplyDesk creates the invoice correctly so we\'re not retyping it — it doesn\'t run our books for us."',
      },
      { type: "h2", text: "When it fails" },
      {
        type: "p",
        text: 'A sync only fails when something isn\'t mapped yet — a product or buyer added in SupplyDesk that hasn\'t been matched to QuickBooks. The order still confirms normally on your side; it just sits flagged as "not synced" until the mapping is done, at which point it pushes through. Nothing is lost, and nothing double-invoices.',
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
