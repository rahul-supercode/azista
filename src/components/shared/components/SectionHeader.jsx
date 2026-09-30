import styles from "../css/SectionHeader.module.css";

/** Section heading with a short intro on the right. */
export default function SectionHeader({ id, title, children }) {
  return (
    <div className={`container ${styles.header}`}>
      <h2 id={id} className="heading-2 text-trim-cap">
        {title}
      </h2>
      <p className={`text-1 ${styles.intro}`}>{children}</p>
    </div>
  );
}
