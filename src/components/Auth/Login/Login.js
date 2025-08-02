import { useState } from "react";
import styles from "../Auth.module.css";
import Button from "../../Common/Button/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.loginForm}>
      <h2>Welcome Back</h2>
      <h3 className={styles.subhead}>Please enter your details</h3>
      <div className={styles.inputField}>
        <label htmlFor="email">E-Mail Address</label>
        <br />
        <input
          id="email"
          className={styles.input}
          type="email"
          placeholder="Enter your email..."
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="pass">Password</label>
        <br />
        <div className={styles.passwordField}>
          <input
            id="pass"
            className={styles.input}
            type={showPassword ? "text": "password"}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={(_) => setShowPassword((show) => !show)}
            className={styles.show}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      </div>
      <Button label="Sign In" onClick={(e) => {e.preventDefault()}} className={styles.signin} variant="secondary" />
    </form>
  );
};

export default Login;
