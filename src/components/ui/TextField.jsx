import { useId } from "react";

import styles from "./css/TextField.module.css";

export default function TextField({ label, required = false, ...props }) {
  const id = useId();

  return (
    <div className={styles.field}>
      <input
        id={id}
        required={required}
        placeholder=" "
        className={`text-1 ${styles.input}`}
        {...props}
      />
      <label htmlFor={id} className={`text-1 ${styles.label}`}>
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
