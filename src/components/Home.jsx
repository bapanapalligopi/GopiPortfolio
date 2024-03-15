import styles from "./home.module.css";
import photo from "../images/photo.jpg";
import resume from "../images/resume.pdf";
export default function Home() {
  function downloadResume(resume) {
    const link = document.createElement("a");
    link.href = resume; // Assuming 'resume' is the URL of the resume
    link.download = "resume.pdf"; // Specify the filename here
    link.click();
  }

  return (
    <div className={`container ${styles.homecontainer}`}>
      <div className={`${styles.dataphoto}`}>
        <div className={`${styles.data}`}>
          <p className={styles.hi}>Hi,</p>
          <p className={styles.name}>
            I am <span> Gopi Bapanapalli</span>
          </p>
          <p className={`${styles.objective}`}>
            I am a proficient developer skilled in React for crafting dynamic
            frontend experiences and Java Spring Boot for building resilient
            backend systems. With expertise in both, I engineer comprehensive
            solutions seamlessly integrating frontend and backend
            functionalities. My mastery spans the development spectrum,
            delivering robust, scalable, and innovative solutions tailored to
            meet demanding project needs.
          </p>
        </div>
        <div className={`${styles.photo}`}>
          <img src={photo} alt="Gopi Image" className={styles.myphoto} />
        </div>
      </div>
      <div className={styles.resumedownload}>
        <button
          type="button"
          className={styles.resume}
          onClick={() => downloadResume(resume)}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
