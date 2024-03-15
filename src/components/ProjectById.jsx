import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./projectbyid.module.css";
import Allprojects from "./Allprojects";
import { FaCode } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import Imagechange from "./Imagechange";

export default function ProjectById() {
  const { id } = useParams();
  const project = Allprojects.find((project) => project.id == id);

  const [selectedImage, setSelectedImage] = useState(
    project ? project.url : ""
  );
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className={`container ${styles.projectcontainer}`}>
      {project && (
        <div className={styles.aboutproject}>
          <div className={styles.projectimage}>
            <div className={styles.singleimage}>
              <Imagechange url={selectedImage} title={project.title} />
            </div>
            <div className={styles.listofimages}>
              {project.imagesurl.map((image) => (
                <img
                  src={image}
                  alt={project.title}
                  className={styles.groupimage}
                  key={image}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.projecttheory}>
            <div className={styles.theorytitle}>
              Title: <span>{project.title}</span>
            </div>
            <div className={styles.theorydesc}>
              Description: <span>{project.description}</span>
            </div>
            <div className={styles.thoeylang}>
              Built by using: <span>{project.lang}</span>
            </div>
            <div className={styles.source}>
              <div className={styles.viewcode}>
                <a href={project.githuburl} className={styles.codeview}>
                  <FaCode /> View Code
                </a>
              </div>
              <div className={styles.livedemo}>
                <a href={project.view} className={styles.liveview}>
                  <GoEyeClosed /> Live Demo
                </a>
              </div>
              <div className={styles.videodemo}>
                <a href={project.videourl} className={styles.videoview}>
                  <GoEyeClosed /> Video Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
