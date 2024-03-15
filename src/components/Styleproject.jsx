import styles from "./projects.module.css";

export default function Styleproject() {
  return (
    <div className={styles.stylingprojects}>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
      <div className={styles.projectmessage}>Projects</div>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
    </div>
  );
}
