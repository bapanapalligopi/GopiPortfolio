import styles from "./backend.module.css";
export default function BackendProgress() {
  const skills = {
    Java: "85%",
    Python: "90%",
    C: "85%",
    CPP: "60%",
    "C#": "60%",
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
