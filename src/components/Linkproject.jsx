import { Link } from "react-router-dom";
import styles from "./projects.module.css";

export default function Linkproject({ project }) {
  return (
    <div>
      <Link to={`/project/${project.id}`} className={`${styles.link}`}>
        <div className={`card ${styles.singleprojects}`}>
          <img
            src={project.url}
            className={`card-img-top ${styles.image}`}
            alt={project.title}
          />
          <div className={`card-body ${styles.titleanddesc}`}>
            <h5 className={`card-title ${styles.title}`}>{project.title}</h5>
            <p className={`card-text ${styles.desc}`}>{project.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
