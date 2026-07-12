"use client";

import React from "react";

const inputStyle = {
  font: "var(--type-body)",
  fontSize: 16,
  color: "var(--ink)",
  background: "var(--surface-card)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius-1)",
  padding: "12px 14px",
  width: "100%",
  boxSizing: "border-box",
};

/** Labeled form control — input, select, or textarea, sharing one label treatment. */
export function Field({ label, optional, as = "input", options = [], ...rest }) {
  const id = React.useId();
  let control;
  if (as === "select") {
    control = (
      <select id={id} style={inputStyle} defaultValue="" {...rest}>
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  } else if (as === "textarea") {
    control = <textarea id={id} rows={4} style={inputStyle} {...rest}></textarea>;
  } else {
    control = <input id={id} type={as === "input" ? "text" : as} style={inputStyle} {...rest} />;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        htmlFor={id}
        style={{
          font: "var(--type-mono-label)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
        }}
      >
        {label}
        {optional ? (
          <span style={{ textTransform: "none", letterSpacing: 0, color: "var(--text-muted)" }}>
            {" "}
            (optional)
          </span>
        ) : null}
      </label>
      {control}
    </div>
  );
}
