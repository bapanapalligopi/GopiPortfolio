import styles from "./navbar.module.css";
import logo from "../images/namelogo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className={`navbar navbar-expand-lg ${styles.navbarcontainer}`}>
        <div className="container">
          <a className={`navbar-brand ${styles.brand}`} href="#">
            <img src={logo} alt="BG" className={styles.logo} />
            <span> Gopi Bapanapalli</span>
          </a>
          <button
            className={`navbar-toggler outline-0 ${styles.togglebut}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.toggle}`}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav ms-auto ${styles.navitems_ul}`}>
              <Link to="/home" className={styles.navitem_link}>
                <li className={`nav-item ${styles.navitem_li}`}>Home</li>
              </Link>
              <Link to="/about" className={styles.navitem_link}>
                <li className={`nav-item ${styles.navitem_li}`}>About</li>
              </Link>
              <Link to="/projects" className={styles.navitem_link}>
                <li className={`nav-item ${styles.navitem_li}`}>Projects</li>
              </Link>
              <Link to="/skills" className={styles.navitem_link}>
                <li className={`nav-item ${styles.navitem_li}`}>Skills</li>
              </Link>
              <Link to="/contact" className={styles.navitem_link}>
                <li className={`nav-item ${styles.navitem_li}`}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
