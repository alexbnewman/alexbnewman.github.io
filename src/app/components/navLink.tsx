import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";

interface NavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: NavLinkProps) {
  return (
    <li>
      <Link className={styles.card} href={href}>
        <Image
          src="/cloud.png"
          className={styles.cloud}
          width={325}
          height={325}
          alt="Cloud."
        />
        <h2>
          {text} <span>-&gt;</span>
        </h2>
      </Link>
    </li>
  );
}
