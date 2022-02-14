import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { login } from "../redux/apiCall";
import { login } from "../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  // const user = true;
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  console.log("user", user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
    dispatch(login({ username, password }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={handleClick}
            disabled={isFetching}
          >
            Login
          </button>
          {error && <h3>Something went wrong</h3>}
          <a href="/" className={styles.link}>
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a href="/" className={styles.link}>
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
