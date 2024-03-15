import styles from "./tools.module.css";
export default function Tools() {
  const skills = {
    "SpringBoot/Redis/Kafka": "85%",
    "Github/Git": "80%",
    Agile: "75%",
    scrum: "60%",
    "BitBucket/SDLC": "60%",
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
