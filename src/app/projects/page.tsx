import Nav from "../components/nav";
import styles from "./page.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1>Projects</h1>
        <Image
          src="/cloud.png"
          className={styles.cloud}
          width={450}
          height={450}
          alt="Cloud."
        />
        <h2>Currently under construction. Check back later for updates!</h2>
      </main>
    </>
  );
}
