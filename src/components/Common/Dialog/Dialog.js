import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

const Dialog = ({ heading, children, onClose }) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const clickOut = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div onClick={clickOut} className={styles.backdrop}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby={heading}
        className={styles.dialog}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
