import styles from "./css/Checkbox.module.css";

/** Square checkbox with its label to the right. */
export default function Checkbox({ label, className = "", ...props }) {
  return (
    <label className={`text-1 ${styles.checkbox} ${className}`}>
      <input type="checkbox" className={styles.input} {...props} />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
