"use client";

import React from "react";
import { Field } from "./Field";
import { Button } from "./Button";

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const formRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form.reportValidity()) return;
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
      <div className="field-row">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Company name" name="company" required autoComplete="organization" />
      </div>
      <div className="field-row">
        <Field label="Email" name="email" as="email" required autoComplete="email" />
        <Field label="Phone" optional name="phone" as="tel" autoComplete="tel" />
      </div>
      <Field
        label="How many buyers do you have?"
        name="buyers"
        as="select"
        required
        options={["1–3", "4–15", "16–50", "50+"]}
      />
      <Field
        label="What are you using now?"
        name="current"
        as="select"
        required
        options={["Email / phone", "Spreadsheet", "Another platform", "Nothing formal"]}
      />
      <Field label="Anything else we should know?" optional name="notes" as="textarea" />
      <Button type="submit" style={{ justifyContent: "center" }}>
        Request a demo
      </Button>
    </form>
  );
}
