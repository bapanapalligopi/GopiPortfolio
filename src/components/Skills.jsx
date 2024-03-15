import { Link } from "react-router-dom";
import styles from "./skills.module.css";
import Progress from "./Progress";
import BackendProgress from "./BackendProgress";
import Tools from "./Tools";
export default function Skills() {
  return (
    <div className={`container ${styles.skillscontainer}`}>
      <div className={styles.skillandroles}>
        <div className={styles.myskillmessage}>My Skills</div>
        <div className={styles.roles}>
          <div className={styles.reactdeveloperrole}>
            <div className={styles.title}>React Developer</div>
            <div className={styles.objective}>
              Enthusiastic React developer with a keen eye for design and a
              strong technical background in front-end development. Eager to
              join a forward-thinking company where I can utilize my skills in
              React.js, React Router,and UI/UX principles to drive innovation,
              collaborate with talented teams, and deliver cutting-edge
              solutions to clients.
            </div>
            <div>
              <Link to="/projects">
                <button className={styles.viewprojects}>View Projects</button>
              </Link>
            </div>
          </div>
          <div className={styles.backenddeveleoperrole}>
            <div className={styles.title}>Back-End Developer</div>
            <div className={styles.objective}>
              Dynamic backend developer with hands-on experience in Spring Boot,
              Java, and RESTful API design. Proficient in implementing caching
              strategies using Redis to improve application performance and
              scalability. Seeking a challenging position where I can leverage
              my expertise in Kafka for building scalable.
            </div>
            <div>
              <Link to="/projects">
                <button className={styles.viewprojects}>View Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.technicalskills}>
        <div className={styles.techskillsmessage}> technical skills</div>

        <div className={styles.skillslist}>
          <div className={styles.frondendskills}>
            <div className={styles.frontendmessage}>Front-End Skills</div>
            <Progress />
          </div>

          <div className={styles.backendskills}>
            <div className={styles.backendmessage}>Programming Skills</div>
            <BackendProgress />
          </div>
          <div className={styles.tools}>
            <div className={styles.toolsmessage}>Tools And Frameworks</div>
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
