"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [colorChange, setColorchange] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures we're on the client
    setIsClient(true);
    const changeNavbarColor = () => {
      if (window.scrollY >= 30) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", changeNavbarColor);
    
    // Cleanup function to remove listener
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) {
    return <div style={{ height: '60px' }}></div>; // placeholder to prevent layout shift
  }

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
          width={22}
          height={22}
          alt="Website logo."
        />
      </li>
    </ul>
  );
}