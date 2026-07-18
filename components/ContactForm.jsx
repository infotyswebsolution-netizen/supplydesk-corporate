"use client";

import React from "react";
import { Field } from "./Field";
import { Button } from "./Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const formRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real visitors never see or fill this field. A filled value
    // means a bot — drop the submission silently rather than showing an
    // error (that would just teach the bot which field to avoid).
    if (data.website) return;

    const nextErrors = {};
    if (!data.name?.trim()) nextErrors.name = "Enter your name — we need it to follow up.";
    if (!data.company?.trim()) nextErrors.company = "Enter your company name — we need it to follow up.";
    if (!data.email || !EMAIL_RE.test(data.email)) {
      nextErrors.email = "Enter a full email address — we reply within 1 business day.";
    }
    if (!data.buyers) nextErrors.buyers = "Select how many buyers you have.";
    if (!data.current) nextErrors.current = "Select what you're using now.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--stamp-green)",
          borderRadius: "var(--radius-1)",
          padding: 40,
        }}
      >
        <p className="mono-label" style={{ color: "var(--stamp-green)", marginBottom: 12 }}>
          Request received
        </p>
        <h2 className="heading">Thanks — we&rsquo;ll be in touch within 1 business day.</h2>
        <p className="small" style={{ marginTop: 12 }}>
          In the meantime, the{" "}
          <a className="text-link" href="/product" style={{ fontSize: 14 }}>
            product page
          </a>{" "}
          shows what you and your buyers will see.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--ink)",
        borderRadius: "var(--radius-1)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Honeypot — hidden from real visitors via CSS, not `display:none`
          or `type="hidden"` (bots skip those). Left blank by humans;
          bots that autofill every field trip the check in handleSubmit. */}
      <div
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
        aria-hidden="true"
      >
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field-row">
        <Field label="Your name" name="name" required autoComplete="name" error={errors.name} />
        <Field
          label="Company name"
          name="company"
          required
          autoComplete="organization"
          error={errors.company}
        />
      </div>
      <div className="field-row">
        <Field label="Email" name="email" as="email" required autoComplete="email" error={errors.email} />
        <Field label="Phone" optional name="phone" as="tel" autoComplete="tel" />
      </div>
      <Field
        label="How many buyers do you have?"
        name="buyers"
        as="select"
        required
        options={["1–3", "4–15", "16–50", "50+"]}
        error={errors.buyers}
      />
      <Field
        label="What are you using now?"
        name="current"
        as="select"
        required
        options={["Email / phone", "Spreadsheet", "Another platform", "Nothing formal"]}
        error={errors.current}
      />
      <Field label="Anything else we should know?" optional name="notes" as="textarea" />
      <Button type="submit" style={{ justifyContent: "center" }}>
        Request a demo
      </Button>
    </form>
  );
}
