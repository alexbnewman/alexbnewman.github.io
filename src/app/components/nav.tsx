"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.center}>
      <ul className={styles.navbar}>
        <li className={styles.card}>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            <h2>About</h2>
          </Link>
        </li>
        <li className={styles.card}>
          <Link
            className={`link ${pathname === "/projects" ? "active" : ""}`}
            href="/projects"
          >
            <h2>Projects</h2>
          </Link>
        </li>
        <li className={styles.card}>
          <Link
            className={`link ${pathname === "/contact" ? "active" : ""}`}
            href="/"
          >
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
