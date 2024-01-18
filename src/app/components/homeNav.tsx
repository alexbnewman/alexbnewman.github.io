import NavLink from "./navLink";
import styles from "./homeNav.module.css";

export default function HomeNav() {
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
