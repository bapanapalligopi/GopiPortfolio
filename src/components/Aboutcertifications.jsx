import styles from "./about.module.css";

export default function Aboutcertifications() {
  return (
    <div className={styles.certifications}>
      <div className={styles.certificationsmessage}>Certifications</div>
      <div className={styles.allcertifications}>
        <ul className={styles.all}>
          <li className={styles.single}>
            <span>
              {" "}
              National Program on Technology Enhanced Learning (NPTEL) - The Joy
              of Computing using Python:
            </span>{" "}
            This certification provided me with a comprehensive understanding of
            Python programming language fundamentals and its application in
            various computing scenarios.
          </li>
          <li className={styles.single}>
            <span>Web Development Course on Udemy:</span> successfully completed
            a web development course on Udemy, which equipped me with practical
            skills in front-end and back-end web development technologies,
            including HTML, CSS, JavaScript, and server-side scripting
            languages.
          </li>
          <li className={styles.single}>
            <span>
              Software Development Processes and Methodologies and Agile
              Software Development (Coursera):
            </span>
            Through these courses, I gained insights into software development
            methodologies and practices, including Agile methodologies. I
            learned how to effectively manage software development projects and
            collaborate within Agile teams to deliver high-quality software
            products.
          </li>
          <li className={styles.single}>
            <span> Java Certification on Infosys Springboard:</span> This
            certification program provided me with advanced knowledge and
            proficiency in Java programming language, covering topics such as
            object-oriented programming, data structures, algorithms, and
            application development using Java technologies.
          </li>
          <li className={styles.single}>
            <span>
              Introduction to Redis Data Structures from Redis University:
            </span>
            This course introduced me to Redis, a powerful in-memory data store,
            and provided hands-on experience in working with Redis data
            structures, such as strings, lists, sets, and hashes.
          </li>
        </ul>
      </div>
    </div>
  );
}
