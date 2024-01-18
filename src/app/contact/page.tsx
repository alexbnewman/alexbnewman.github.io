import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.pageTitle}>Contact Information</h1>
          <h2>I'd love to hear from you!</h2>
        </div>
        <div className={styles.logoBox}>
          <div className={styles.container}>
            <h3>email me ↘</h3>
            <Link className={styles.logo} href="mailto:alex02new@outlook.com">
              <Image
                src="/email.png"
                width={300}
                height={300}
                alt="Email logo."
              />
            </Link>
          </div>
          <div className={styles.container}>
            <h3>linkedin ↘</h3>
            <Link
              className={styles.logo}
              href="https://www.linkedin.com/in/alessandranewman/"
            >
              <Image
                src="/linkedin_logo.png"
                width={300}
                height={300}
                alt="LinkedIn logo."
              />
            </Link>
          </div>
          <div className={styles.container}>
            <h3>github ↘</h3>
            <Link className={styles.logo} href="https://github.com/alexbnewman">
              <Image
                src="/github.png"
                width={300}
                height={300}
                alt="Github logo."
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
