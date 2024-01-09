import styles from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Contact Me</h1>
      </div>
      <div>
        <Image
          src="/email.png"
          className={styles.img}
          width={350}
          height={350}
          alt="Email logo."
        />
        <Image
          src="/linkedin_logo.png"
          className={styles.img}
          width={350}
          height={350}
          alt="LinkedIn logo."
        />
        <Image
          src="/github.png"
          className={styles.img}
          width={350}
          height={350}
          alt="Github logo."
        />
      </div>
    </main>
  );
}
