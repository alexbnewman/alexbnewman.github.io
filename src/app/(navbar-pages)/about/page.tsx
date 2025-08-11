"use client"

import styles from "./page.module.css";
import Image from "next/image";
import AboutMe from '../../components/AboutMe'

export default function About() {
  const handleButtonClick = () => {
    const infoElement = document.getElementById("info");
    if (infoElement) {
      const offsetVh = 15; // Adjust as needed
      const targetPosition =
        infoElement.offsetTop - window.innerHeight * (offsetVh / 100);

      window.scroll({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <main className={styles.main}>
        <div className={styles.firstRow}>
          <div className={styles.leftCol}>
            <h1>About</h1>
            <h2>Hi, I'm Alex.</h2>
            <h2>
              I'm studying computer science and sociology at the University of
              Michigan.
            </h2>
            <button onClick={handleButtonClick}>
              <Image
                src="/down_arrow.png"
                className={styles.downArrow}
                width={80}
                height={80}
                alt="Scroll down for more."
              />
            </button>
          </div>
          <Image
            src="/Alex_Newman_cropped.jpg"
            className={styles.profPic}
            width={365}
            height={426}
            alt="Portrait of Alex."
          />
        </div>
        <AboutMe />
        {/* <div className={styles.infoCards}>
          <div id="info" className={styles.container}>
            <Image
              src="/um_logo.png"
              className={styles.img}
              width={350}
              height={350}
              alt="U-M logo."
            />
            <div className={styles.verticalLine}></div>
            <p>
              I am a student at the University of Michigan (graduating in 2025),
               double majoring in computer science and sociology. I am
              particularly interested in full-stack development, and was most
              recently employed as a web developer for U-M's College of
              Engineering.
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
          </div> */}
        {/* </div> */}
      </main>
    </>
  );
}
