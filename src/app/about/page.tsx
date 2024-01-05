import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        <p>
          I am a student at the University of Michigan, double majoring in
          computer science and sociology. I am particularly interested in
          full-stack development, and most recently was employed as a web
          developer for U-M's College of Engineering.
        </p>
        <p>
          I am currently working as Lead Developer for a UMich student
          organization called Void Tech. I manage a team of six developers, and
          our organization works to assist and solve issues for the U-M student
          community.
        </p>
        <p>
          I love to rock climb, snowboard, read, and discover new places to camp
          out with my laptop.
        </p>
      </div>
    </main>
  );
}
