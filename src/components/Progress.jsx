import styles from "./skills.module.css";

export default function Progress() {
  const skills = {
    "HTML/CSS": "85%",
    JavaScript: "90%",
    "React.js": "85%",
    bootstrap: "60%",
    Jquery: "60%",
  };
  return (
    <div>
      {Object.entries(skills).map(([skill, percentage]) => (
        <div key={skill} className={styles.skillwithprogress}>
          <div className={styles.skill}>{skill}</div>
          <div
            className={`progress ${styles.progresses}`}
            role="progressbar"
            aria-label={skill}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className={`progress-bar  ${styles.progresswidth}`}
              style={{ width: `${percentage}` }}
            ></div>
          </div>
          <div className={styles.percentage}>{percentage}</div>
        </div>
      ))}
    </div>
  );
}
