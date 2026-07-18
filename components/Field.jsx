"use client";

import React from "react";

/** Labeled form control — input, select, or textarea, sharing one label
 * treatment. `error`, if set, switches the control to its error border and
 * prints the message below as a plain mono sentence (no exclamation marks). */
export function Field({ label, optional, error, as = "input", options = [], ...rest }) {
  const id = React.useId();
  const errorId = error ? `${id}-error` : undefined;
  let control;
  if (as === "select") {
    control = (
      <select id={id} defaultValue="" aria-describedby={errorId} {...rest}>
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  } else if (as === "textarea") {
    control = <textarea id={id} rows={4} aria-describedby={errorId} {...rest}></textarea>;
  } else {
    control = (
      <input id={id} type={as === "input" ? "text" : as} aria-describedby={errorId} {...rest} />
    );
  }
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <label htmlFor={id}>{label}</label>
        <span
          className="mono-label"
          style={{ fontSize: 10, color: optional ? "var(--text-muted)" : "var(--weld)", flexShrink: 0 }}
        >
          {optional ? "Optional" : "Required"}
        </span>
      </div>
      {control}
      {error ? (
        <p className="err" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
