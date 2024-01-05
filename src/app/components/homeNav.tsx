"use client";

import { usePathname } from "next/navigation";
import NavLink from "./navLink";
import styles from "./nav.module.css";

export default function HomeNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.center}>
      <ul className={styles.navbar}>
        <NavLink href="/about" text="About" />
        <NavLink href="/projects" text="Projects" />
        <NavLink href="/contact" text="Contact" />
      </ul>
    </nav>
  );
}
