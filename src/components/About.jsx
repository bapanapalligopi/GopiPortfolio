import Aboutcertifications from "./Aboutcertifications";
import Aboutsection from "./Aboutsection";
import styles from "./about.module.css";
export default function About() {
  return (
    <div className={`container ${styles.aboutcontainer}`}>
      <div className={styles.about}>
        <div className={styles.aboutmessage}>About Me</div>
        <Aboutsection />
        <Aboutcertifications />
      </div>
    </div>
  );
}
