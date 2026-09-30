import Image from "next/image";
import Link from "next/link";

import minus from "@/assets/icons/minus.svg";
import plus from "@/assets/icons/plus.svg";

import styles from "./css/NavDropdown.module.css";

const HOVER_QUERY = "(hover: hover) and (min-width: 1280px)";

function isHoverPointer(event) {
  return (
    event.pointerType === "mouse" && window.matchMedia(HOVER_QUERY).matches
  );
}

/**
 * Disclosure menu: expands inline on mobile, fades in as a panel under the
 * header on desktop. Stays mounted so it can animate; `inert` keeps the
 * closed menu out of the tab order and accessibility tree.
 */
export default function NavDropdown({
  id,
  label,
  href,
  items,
  open,
  onOpenChange,
}) {
  return (
    <div
      onPointerEnter={(event) => isHoverPointer(event) && onOpenChange(true)}
      onPointerLeave={(event) => isHoverPointer(event) && onOpenChange(false)}
    >
      <div className={`${styles.trigger} ${open ? styles.open : ""}`}>
        <Link href={href} className={styles.link}>
          {label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => onOpenChange(!open)}
          className={styles.toggle}
        >
          <span className="sr-only">{`${label} menu`}</span>
          <Image
            src={plus}
            alt=""
            width={16}
            height={16}
            className={styles.plus}
          />
          <Image
            src={minus}
            alt=""
            width={16}
            height={16}
            className={styles.minus}
          />
        </button>
      </div>
      <div
        id={id}
        inert={!open}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
      >
        <div className={styles.panelInner}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
