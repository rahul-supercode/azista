import { useId } from "react";

import styles from "./css/TextField.module.css";

const VARIANT_CLASSES = {
  line: "",
  boxed: styles.boxed,
  stacked: styles.stacked,
};

/**
 * Text input with a floating label. `variant="boxed"`: bordered box (Contact
 * form); `variant="stacked"`: bordered box with the label above it (Build your
 * mission), optionally with a `unit` shown inside the box. `multiline`
 * renders a `<textarea>`.
 */
export default function TextField({
  label,
  required = false,
  variant = "line",
  multiline = false,
  unit,
  className = "",
  ...props
}) {
  const id = useId();
  const Control = multiline ? "textarea" : "input";
  const stacked = variant === "stacked";

  return (
    <div className={`${styles.field} ${VARIANT_CLASSES[variant]} ${className}`}>
      <Control
        id={id}
        required={required}
        placeholder=" "
        className={`text-1 text-1-md ${styles.input}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`text-1 text-1-md ${stacked ? "text-trim-cap" : ""} ${styles.label}`}
      >
        {label}
        {unit && <span className="sr-only"> ({unit})</span>}
        {required && (
          <span aria-hidden="true" className={styles.required}>
            {" "}
            *
          </span>
        )}
      </label>
      {unit && (
        <span aria-hidden="true" className={`text-4 ${styles.unit}`}>
          {unit}
        </span>
      )}
    </div>
  );
}
