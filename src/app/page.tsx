import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className={styles.snow}>
        <main className={styles.main}>
          <script src="snowfall.ts"></script>
          <div>
            <h1>Alex Newman</h1>
          </div>
          <div className={styles.center}>
            <p>
              Hi, my name is Alex and I'm a software engineer attending the{" "}
              <b>University of Michigan.</b>
            </p>
          </div>
          <Nav />
        </main>
      </div>
    </>
  );
}
