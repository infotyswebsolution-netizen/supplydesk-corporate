import Link from "next/link";

const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
};

const sizeClass = {
  md: "",
  sm: "btn-sm",
};

/**
 * Primary action element. Renders the shared .btn/.btn-{variant}/.btn-{size}
 * classes from globals.css, so section-scoped overrides (e.g. .footer-cta
 * .btn-primary) apply correctly — never style this via an inline background.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  style,
  type,
  ...rest
}) {
  const classes = ["btn", variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} style={style} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type || "button"} className={classes} style={style} {...rest}>
      {children}
    </button>
  );
}
