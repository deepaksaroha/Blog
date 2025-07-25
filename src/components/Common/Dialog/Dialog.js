import styles from './Dialog.module.css';

const Dialog = ({ heading, children }) => {
  return (
    <div className={styles.backdrop}>
      <div role="dialog" aria-labelledby={heading} className={styles.dialog}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;