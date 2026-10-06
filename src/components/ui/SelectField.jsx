import Image from "next/image";
import { useId } from "react";

import chevron from "@/assets/icons/select-chevron.svg";

import styles from "./css/SelectField.module.css";

/**
 * Boxed `<select>` matching `TextField variant="boxed"`. The label sits inside
 * the box and floats up once an option is chosen. `variant="stacked"` puts the
 * label above the box, like `TextField variant="stacked"`, and shows
 * `placeholder` until an option is chosen. `options`: `[{ value, label }]`.
 */
export default function SelectField({
  label,
  options,
  placeholder = "",
  required = false,
  variant = "boxed",
  className = "",
  ...props
}) {
  const id = useId();
  const stacked = variant === "stacked";

  return (
    <div
      className={`${styles.field} ${stacked ? styles.stacked : ""} ${className}`}
    >
      <div className={styles.box}>
        <select
          id={id}
          required={required}
          defaultValue=""
          className={`text-1 text-1-md ${styles.select}`}
          {...props}
        >
          <option value="" disabled={required}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Image
          src={chevron}
          alt=""
          width={10.566}
          height={5.98951}
          className={styles.chevron}
        />
      </div>
      <label
        htmlFor={id}
        className={`text-1 text-1-md ${stacked ? "text-trim-cap" : ""} ${styles.label}`}
      >
        {label}
        {required && (
          <span aria-hidden="true" className={styles.required}>
            {" "}
            *
          </span>
        )}
      </label>
    </div>
  );
}
