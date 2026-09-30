import Image from "next/image";
import Link from "next/link";

import { headerCta, mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import styles from "./css/Header.module.css";
import HeaderShell from "./HeaderShell";
import SiteNav from "./SiteNav";

/** Figma: Frame 1410156718 (top of page) / 1410156716 (scrolled). */
export default function Header() {
  return (
    <HeaderShell>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/logo.svg"
          alt={`${siteConfig.name} home`}
          width={86}
          height={50}
          loading="eager"
        />
      </Link>
      <SiteNav items={mainNav} cta={headerCta} />
    </HeaderShell>
  );
}
