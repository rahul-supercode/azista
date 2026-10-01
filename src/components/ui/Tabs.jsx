"use client";

import { useId, useRef, useState } from "react";

import styles from "./css/Tabs.module.css";

const STEP = { ArrowRight: 1, ArrowLeft: -1 };

/**
 * `tabs`: `[{ id, label, panel }]`. Pass `activeId` + `onChange` to control
 * the selection from outside (e.g. prev/next buttons).
 * `variant="compact"`: tighter row of fixed-width tabs, for use inside a card.
 * `variant="pill"`: filled white box marks the selected tab, for dark sections.
 */
export default function Tabs({
  label,
  tabs,
  defaultId,
  activeId: controlledId,
  onChange,
  variant = "default",
  className = "",
}) {
  const baseId = useId();
  const [uncontrolledId, setUncontrolledId] = useState(defaultId ?? tabs[0].id);
  const activeId = controlledId ?? uncontrolledId;
  const tabRefs = useRef({});

  function setActiveId(id) {
    setUncontrolledId(id);
    onChange?.(id);
  }

  function select(index) {
    const tab = tabs[(index + tabs.length) % tabs.length];
    setActiveId(tab.id);
    tabRefs.current[tab.id]?.focus();
  }

  function onKeyDown(event) {
    const index = tabs.findIndex((tab) => tab.id === activeId);
    if (event.key in STEP) select(index + STEP[event.key]);
    else if (event.key === "Home") select(0);
    else if (event.key === "End") select(tabs.length - 1);
    else return;
    event.preventDefault();
  }

  return (
    <div className={`${styles[variant] ?? ""} ${className}`}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className={styles.list}
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              className={`${variant === "pill" ? "text-6" : "text-1"} text-trim-cap ${styles.tab}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== activeId}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
