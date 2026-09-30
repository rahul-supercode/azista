import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div role="status" aria-live="polite" className={styles.loading}>
      <span aria-hidden="true" className={styles.spinner} />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
