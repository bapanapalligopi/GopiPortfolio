import styles from "./about.module.css";
export default function Aboutsection() {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.theory}>
        <p>
          I am eager to secure an entry-level position within the IT industry,
          where I can apply my technical expertise to drive organizational
          success. With a Bachelor of Technology (B.Tech) in Information
          Technology from KKR & KSR Institute of Technology & Sciences, I
          graduated with a commendable CGPA of 7.91 in 2023.
        </p>
      </div>
      <div className={styles.theory}>
        <p>
          I have actively participated in several noteworthy projects that have
          honed my skills and expanded my knowledge. One such project is the
          development of a Student Exam Results Portal, where I led the creation
          of a user-friendly front-end application.Additionally developed
          projects like TODO APP, Recipe Maker, Find Weather by city, Movie
          review Projects using React Js and other front-end Technologies.{" "}
        </p>
      </div>
      <div className={styles.theory}>
        <p>
          As a Full-stack developer proficient in both Front-end and Back-end
          technologies, I am capable of delivering end-to-end solutions with
          versatility. I am committed to leveraging my skills, adaptability, and
          enthusiasm to contribute effectively to any IT project or
          organization. Ready to embark on a dynamic career journey in IT, I am
          eager to tackle new challenges and make meaningful contributions to
          the field.
        </p>
      </div>
    </div>
  );
}
