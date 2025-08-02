import styles from "./Button.module.css";

const Button = ({ label, onClick, className, variant }) => {
  const buttonClass =
    variant === "secondary" ? styles.btnSecondary : styles.btnPrimary;
  return (
    <button
      className={`${styles.btn} ${buttonClass} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
