"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

const productLinks = [
  { href: "/product#catalog", label: "Catalog management" },
  { href: "/product#buyers", label: "Buyer management" },
  { href: "/product#orders", label: "Order dashboard" },
  { href: "/product#quickbooks", label: "QuickBooks sync" },
];

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

function isCurrent(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Closes an open disclosure (dropdown/menu) on an outside click or Escape. */
function useDismiss(ref, isOpen, onClose) {
  React.useEffect(() => {
    if (!isOpen) return;
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ref, isOpen, onClose]);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);
  const dropRef = React.useRef(null);

  const closeProduct = React.useCallback(() => setProductOpen(false), []);
  useDismiss(dropRef, productOpen, closeProduct);

  function closeAll() {
    setOpen(false);
    setProductOpen(false);
  }

  // Single delegated handler: any link clicked inside the nav (including
  // dropdown items) closes both the mobile menu and the dropdown.
  function handleNavLinksClick(e) {
    if (e.target.closest("a")) closeAll();
  }

  return (
    <nav className="nav">
      <div className="nav-inner" onClick={handleNavLinksClick}>
        <Link className="nav-logo" href="/">
          <Image src="/logo.svg" width={22} height={22} alt="" />
          SupplyDesk
        </Link>
        <button
          className="nav-burger"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <div className={`nav-links${open ? " open" : ""}`}>
          <Link className="nav-link" href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>

          <div className={`nav-drop${productOpen ? " open" : ""}`} ref={dropRef}>
            <button
              type="button"
              className="nav-drop-trigger"
              aria-expanded={productOpen}
              aria-current={isCurrent(pathname, "/product") ? "page" : undefined}
              onClick={() => setProductOpen((o) => !o)}
            >
              Product
            </button>
            <div className="nav-drop-menu">
              {productLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
              <Link href="/product" className="nav-drop-all">
                All of Product &rarr;
              </Link>
            </div>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              className="nav-link"
              href={l.href}
              aria-current={isCurrent(pathname, l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Button
            size="sm"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Talk to us
          </Button>
        </div>
      </div>
    </nav>
  );
}
