const colors = {
  neutral: "var(--steel-2)",
  ink: "var(--ink)",
  accent: "var(--weld)",
  success: "var(--stamp-green)",
};

/** Status/state mark — the typographic replacement for icon badges. */
export function Badge({ tone = "neutral", children }) {
  return (
    <span
      style={{
        font: "var(--type-mono-label)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: colors[tone],
      }}
    >
      {children}
    </span>
  );
}
