"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [colorChange, setColorchange] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 30) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <ul className={`${styles.navbar} ${colorChange ? styles.scrolled : ""}`}>
      <li className={styles.linkContainer}>
        <Link className={styles.link} href="/">
          <h3>Home</h3>
        </Link>
      </li>
      <li className={styles.linkContainer}>
        <Link
          className={`${styles.link} ${
            pathname === "/about" ? styles.active : ""
          }`}
          href="/about"
        >
          <h3>About</h3>
        </Link>
      </li>
      <li className={styles.linkContainer}>
        <Link
          className={`${styles.link} ${
            pathname === "/projects" ? styles.active : ""
          }`}
          href="/projects"
        >
          <h3>Projects</h3>
        </Link>
      </li>
      <li className={styles.linkContainer}>
        <Link
          className={`${styles.link} ${
            pathname === "/contact" ? styles.active : ""
          }`}
          href="/contact"
        >
          <h3>Contact</h3>
        </Link>
      </li>
      <li className={styles.logo}>
        <Image
          src="/icon.png"
          className={styles.img}
          width={25}
          height={25}
          alt="Website logo."
        />
      </li>
    </ul>
  );
}
