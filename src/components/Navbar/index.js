import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Button from "../Common/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import Dialog from "../Common/Dialog/Dialog";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/Signup";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLoginModal = () => {
    setShowLogin((prev) => !prev);
    setShowSignup(false);
  };

  const toggleSignupModal = () => {
    setShowSignup((prev) => !prev);
    setShowLogin(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className="navbar-brand">
          Blogs
        </Link>
        <SearchBar />
        <div>
          <Button label="Log In" onClick={toggleLoginModal} />
          <Button
            label="Sign Up"
            onClick={toggleSignupModal}
            variant="secondary"
          />
        </div>
      </nav>
      {showLogin && (
        <Dialog onClose={toggleLoginModal}>
          <Login />
        </Dialog>
      )}
      {showSignup && (
        <Dialog onClose={toggleSignupModal}>
          <Signup />
        </Dialog>
      )}
    </>
  )
};

export default Navbar;
