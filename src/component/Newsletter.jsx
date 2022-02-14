import React from "react";
import styles from "../styles/Newsletter.module.css";
import { Send } from "@material-ui/icons";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>
        Get timely updates from your favorite products
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Your email" />
        <button className={styles.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
