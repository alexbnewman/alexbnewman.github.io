import styles from "./page.module.css";
import HomeNav from "./components/homeNav";

export default function Home() {
  return (
      <main className={styles.main}>
        <div>
          <h1>Alex Newman</h1>
        </div>
        <div className={styles.center}>
          <p>
            Hi, my name is Alex and I'm a software engineer attending the{" "}
            <b>University of Michigan.</b>
          </p>
        </div>
        <HomeNav />
      </main>
  );
}
