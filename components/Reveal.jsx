"use client";

import React from "react";

const OBSERVER_OPTIONS = { threshold: 0.12 };

/**
 * The site's one motion rule: content fades in and rises 8px once on
 * scroll-into-view, 240ms ease-out. Nothing loops, nothing counts.
 * Respects prefers-reduced-motion.
 */
export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(prefers-reduced-motion: no-preference)").matches ||
      !("IntersectionObserver" in window)
    ) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      OBSERVER_OPTIONS
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
