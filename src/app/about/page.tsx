import styles from "./page.module.css";
import Image from "next/image";
import Nav from "../components/nav";

export default function About() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>About Me</h1>
        </div>
        <div className={styles.firstRow}>
          <h2 className={styles.intro}>Hi, I'm Alex.</h2>
          <Image
            src="/Alex_Newman_cropped.jpg"
            className={styles.profPic}
            width={365}
            height={426}
            alt="Portrait of Alex."
          />
        </div>
        <div className={styles.container}>
          <Image
            src="/um_logo.png"
            className={styles.img}
            width={350}
            height={350}
            alt="U-M logo."
          />
          <div className={styles.verticalLine}></div>
          <p>
            I am a student at the University of Michigan (graduating in May of
            2025), double majoring in computer science and sociology. I am
            particularly interested in full-stack development, and most recently
            was employed as a web developer for U-M's College of Engineering.
          </p>
        </div>
        <div className={styles.container}>
          <p>
            I am currently working as Lead Developer for a UMich student
            organization called Void Tech. I manage a team of six developers,
            and our organization works to assist and solve issues for the U-M
            student community.
          </p>
          <div className={styles.verticalLine}></div>
          <Image
            src="/void_logo.jpg"
            className={styles.img}
            width={350}
            height={350}
            alt="Void logo."
          />
        </div>
        <div className={styles.container}>
          <Image
            src="/snowboarding.jpg"
            className={styles.img}
            width={350}
            height={350}
            alt="Snowboarding."
          />
          <div className={styles.verticalLine}></div>
          <p>
            I love to rock climb 🧗, snowboard 🏂, read 📚, and discover new
            places (cafés, museums, libraries, etc.!) to camp out with my laptop
            💻.
          </p>
        </div>
      </main>
    </>
  );
}
