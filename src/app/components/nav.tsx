"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import styles from "./nav.module.css";

export default function Nav() {
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
