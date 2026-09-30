import styles from "../css/StatusMessage.module.css";

/** Centered message block for the error and 404 pages. */
export default function StatusMessage({
  as: Tag = "section",
  eyebrow,
  title,
  titleClassName = "heading-3",
  children,
  ...props
}) {
  return (
    <Tag className={styles.status} {...props}>
      {eyebrow ? <p className="text-5">{eyebrow}</p> : null}
      <h1 className={titleClassName}>{title}</h1>
      {children}
    </Tag>
  );
}

export function StatusDigest({ children }) {
  return <p className={styles.digest}>{children}</p>;
}
