import styles from './Login.module.css';

const Login = () => {
  return <form className={styles.loginForm}>
    <h2>Welcome Back</h2>
    <h3>Please enter your details</h3>
    <label>Email Address</label>
    <input type="email" placeholder="Enter your email..." required />
    <label>Password</label>
    <input type="password" placeholder="Enter your password" required />
  </form>
};

export default Login;