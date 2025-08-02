import { useState } from "react";
import styles from "../Auth.module.css";
import Button from "../../Common/Button/Button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className={styles.loginForm}>
      <h2>Welcome</h2>
      <h3 className={styles.subhead}>Please enter your details</h3>
      <div className={styles.inputField}>
        <label htmlFor="email">Full Name</label>
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
      <div className={styles.inputField}>
        <label htmlFor="pass">Confirm Password</label>
        <br />
        <div className={styles.passwordField}>
          <input
            id="pass"
            className={styles.input}
            type={showConfirmPassword ? "text": "password"}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={(_) => setShowConfirmPassword((show) => !show)}
            className={styles.show}
          >
            {showConfirmPassword ? "hide" : "show"}
          </button>
        </div>
      </div>
      <Button label="Sign up" onClick={(e) => {e.preventDefault()}} className={styles.signin} variant="secondary" />
    </form>
  );
};

export default Signup;
