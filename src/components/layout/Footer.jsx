import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import linkedin from "@/assets/icons/linkedin.svg";
import youtube from "@/assets/icons/youtube.svg";
import { headquarters } from "@/config/locations";
import { footerNav, legalNav, socialLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import styles from "./css/Footer.module.css";

const SOCIAL_ICONS = { linkedin, youtube };

/** Figma: Group 1000011438 (2977:11712). */
export default function Footer() {
  return (
    <footer data-bg="dark" className={styles.footer}>
      <Image
        src="/assets/footer-bg-img.jpg"
        alt=""
        width={1363}
        height={420}
        sizes="(min-width: 1280px) 90vw, 100vw"
        className={styles.background}
      />
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/logo.svg"
              alt={`${siteConfig.name} home`}
              width={99}
              height={58}
            />
          </Link>
          <ul className={styles.social}>
            {socialLinks.map(({ label, icon, href }) => {
              const image = (
                <Image src={SOCIAL_ICONS[icon]} alt={href ? label : ""} />
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.main}>
          <address className={styles.address}>
            <h2 className={`text-6 text-trim-cap ${styles.heading}`}>
              Headquarters
            </h2>
            <p className={`text-1 text-trim-cap ${styles.muted}`}>
              {headquarters.addressLines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          </address>

          {footerNav.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className={styles.column}
            >
              <h2 className={`text-6 text-trim-cap ${styles.heading}`}>
                {column.title}
              </h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-1 text-trim-cap ${styles.link}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <nav aria-label="Legal">
            <ul className={styles.legal}>
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-1 text-trim-cap ${styles.link}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={`text-1 text-trim-cap ${styles.muted}`}>
            © Copyright Azistaspace {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
