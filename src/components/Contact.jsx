import styles from "./contact.module.css";
import phone from "../images/phone.png";
import email from "../images/mail.png";
import insta from "../images/insta.png";
import git from "../images/github.png";
import linkedin from "../images/linkedin.png";
import { useState } from "react";

export default function Contact() {
  const [submitstatus, setStatus] = useState(false);
  const [errors, setErrors] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  // Function to handle changes in the Subject input field
  const handleSubject = (event) => {
    console.log(event.target.value);
    setSubject(event.target.value);
  };

  // Function to handle changes in the Message input field
  const handleMessage = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  // Function to handle changes in the Email input field
  const handleEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const submitrequest = async () => {
    console.log("submited");
    if (
      name !== null &&
      email !== null &&
      subject !== null &&
      message != null
    ) {
      setStatus(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus(false);
    } else {
      setErrors(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setErrors(false);
    }
  };
  return (
    <div className={`container ${styles.contactcontainer}`}>
      <div className={styles.contact}>
        <div className={styles.contactmetext}>Contact Me</div>
        <div className={`${styles.form}`}>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name..."
              className={styles.inputs}
              onChange={handleName}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email..."
              className={styles.inputs}
              onChange={handleEmail}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Subject..."
              className={styles.inputs}
              onChange={handleSubject}
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="5"
              className={styles.inputtextarea}
              placeholder="Enter your Message here...."
              onChange={handleMessage}
            ></textarea>
          </div>
          <div>
            <button className={styles.submit} onClick={submitrequest}>
              Submit
            </button>
          </div>
          {errors && (
            <div className={styles.response}>please enter all fields...</div>
          )}
          {submitstatus == true && (
            <div className={styles.response}>
              Your request has been submitted.
            </div>
          )}
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.connectwithme}>Connect With Me</div>
        <div className={styles.social}>
          <p>Phone: 7672005018</p>
          <p>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              className={styles.mail}
            >
              bapanapalligopi7@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
