import styles from "./projects.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projectone from "./Projectsone";
import Projecttwo from "./Projecttwo";
import Linkproject from "./Linkproject";
import Styleproject from "./Styleproject";
export default function Projects() {
  return (
    <div className={`container ${styles.projectscontainer}`}>
      <Styleproject />
      <div className={styles.threeprojects}>
        {Projectone.map((project) => (
          <Linkproject key={project.title} project={project} />
        ))}
      </div>
      <div className={styles.sixprojects}>
        {Projecttwo.map((project) => (
          <Linkproject key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
