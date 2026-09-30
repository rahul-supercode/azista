"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import Button from "@/components/ui/Button";

import styles from "./css/SiteNav.module.css";
import NavDropdown from "./NavDropdown";

/**
 * One nav for every breakpoint: inline from desktop, a toggleable panel below it.
 */
export default function SiteNav({ items, cta }) {
  const id = useId();
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const anyOpen = menuOpen || openDropdown !== null;

  function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    if (!anyOpen) return;

    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) closeAll();
    }
    function onKeyDown(event) {
      if (event.key === "Escape") closeAll();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [anyOpen]);

  // Close everything once a link is followed.
  function onNavClick(event) {
    if (event.target.closest("a")) closeAll();
  }

  const navId = `${id}-nav`;

  return (
    <div ref={rootRef} data-menu-open={menuOpen || undefined}>
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-controls={navId}
        onClick={() => setMenuOpen((open) => !open)}
        className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className={styles.lineTop} />
        <span aria-hidden="true" className={styles.lineMiddle} />
        <span aria-hidden="true" className={styles.lineBottom} />
      </button>

      <nav
        id={navId}
        aria-label="Main"
        onClick={onNavClick}
        className={`text-4 ${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
      >
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={item.label} className={styles.item}>
              {item.items ? (
                <NavDropdown
                  id={`${id}-menu-${index}`}
                  label={item.label}
                  href={item.href}
                  items={item.items}
                  open={openDropdown === item.label}
                  onOpenChange={(open) =>
                    setOpenDropdown((current) =>
                      open
                        ? item.label
                        : current === item.label
                          ? null
                          : current,
                    )
                  }
                />
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Button variant="framed-light" href={cta.href} className={styles.cta}>
          {cta.label}
        </Button>
      </nav>
    </div>
  );
}
