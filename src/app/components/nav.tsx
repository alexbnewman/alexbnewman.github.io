"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.center}>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.card} href="/about">
            <h2>
              About <span>-&gt;</span>
            </h2>
          </Link>
        </li>
        <li>
          <Link className={styles.card} href="/projects">
            <h2>
              Projects <span>-&gt;</span>
            </h2>
          </Link>
        </li>
        <li>
          <Link className={styles.card} href="/contact">
            <h2>
              Contact <span>-&gt;</span>
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
