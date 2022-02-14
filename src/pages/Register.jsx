import styles from "../styles/Register.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const user = true;
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>REGISTER</h1>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name" />
          <input type="text" className={styles.input} placeholder="Last Name" />
          <input type="text" className={styles.input} placeholder="User Name" />
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <input
            type="text"
            className={styles.input}
            placeholder="Confirm Password"
          />
          <span className={styles.agreement}>
            By Creating an account. I Consent to the processing of my personal
            of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={styles.button}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
