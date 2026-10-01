import Button from "@/components/ui/Button";

import styles from "./page.module.css";

export const metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const colors = [
  { figma: "color-1", value: "#FF0000", tokens: ["primary"] },
  { figma: "color-2", value: "#1A1A1A", tokens: ["foreground", "ring"] },
  {
    figma: "color-3",
    value: "#FFFFFF",
    tokens: ["background", "primary-foreground"],
  },
  { figma: "color-4", value: "#E8E6E6", tokens: ["muted", "border"] },
];

const textStyles = [
  {
    name: "heading-1",
    spec: "Bebas Neue · 100 / 82 · uppercase",
    sample: "Heading 1",
  },
  {
    name: "heading-2",
    spec: "Bebas Neue · 80 / 70 · −1% · uppercase",
    sample: "Heading 2",
  },
  {
    name: "heading-3",
    spec: "Bebas Neue · 50 / 50 · uppercase",
    sample: "Heading 3",
  },
  {
    name: "text-1",
    spec: "Schibsted Grotesk Regular · 17 / 23 · body default",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "text-2",
    spec: "Schibsted Grotesk Regular · 22 / 28",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "text-3",
    spec: "Schibsted Grotesk Regular · 40 / 44 · −3%",
    sample: "The quick brown fox",
  },
  {
    name: "text-4",
    spec: "Schibsted Grotesk Medium · 14 / 17 · 1% · uppercase",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "text-5",
    spec: "Schibsted Grotesk Regular · 12 / 14 · 2% · uppercase",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "text-6",
    spec: "Schibsted Grotesk SemiBold · 18 / 19 · −2%",
    sample: "The quick brown fox jumps over the lazy dog",
  },
];

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className="heading-3">{title}</h2>
      {children}
    </section>
  );
}

function Code({ children }) {
  return <code className={styles.code}>{children}</code>;
}

export default function StyleguidePage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <p className="text-5">Design system</p>
        <h1 className="heading-1">Style guide</h1>
        <p className={`text-2 ${styles.prose}`}>
          Every global token, text style and component defined in{" "}
          <Code>globals.css</Code> and <Code>components/ui</Code>.
        </p>
      </header>

      <Section title="Colors">
        <ul className={styles.swatches}>
          {colors.map((color) => (
            <li key={color.figma} className={styles.swatchItem}>
              <div
                className={styles.swatch}
                style={{ background: `var(--${color.figma})` }}
              />
              <div className={styles.swatchMeta}>
                <span className="text-6">
                  {color.value} · {color.figma}
                </span>
                <span className="text-5">{color.tokens.join(" · ")}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Text styles">
        <ul className={styles.textStyles}>
          {textStyles.map((style) => (
            <li key={style.name} className={styles.textStyle}>
              <div className={styles.swatchMeta}>
                <Code>{style.name}</Code>
                <span className="text-5">{style.spec}</span>
              </div>
              <p className={`${style.name} ${styles.sample}`}>{style.sample}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Buttons">
        <div className={styles.buttons}>
          <div className={styles.buttonDemo}>
            <Code>variant=&quot;primary&quot;</Code>
            <Button>Button-2</Button>
          </div>
          <div className={styles.buttonDemo}>
            <Code>variant=&quot;framed&quot;</Code>
            <Button variant="framed">Button-1</Button>
          </div>
          <div className={styles.buttonDemo}>
            <Code>variant=&quot;link&quot;</Code>
            <Button variant="link">Button-3</Button>
          </div>
        </div>
        <div className={styles.buttonDemo}>
          <p className="text-1">
            As links, by passing <Code>href</Code>:
          </p>
          <div className={styles.buttonRow}>
            <Button href="/">Go home</Button>
            <Button href="/" variant="framed">
              Go home
            </Button>
            <Button href="/" variant="link">
              Go home
            </Button>
          </div>
        </div>
      </Section>

      <Section title="Focus & accessibility">
        <p className={`text-1 ${styles.prose}`}>
          Press <kbd className={styles.kbd}>Tab</kbd> to see the global focus
          outline (<Code>ring</Code>). The first Tab on any page reveals the
          “Skip to main content” link.
        </p>
      </Section>
    </div>
  );
}
