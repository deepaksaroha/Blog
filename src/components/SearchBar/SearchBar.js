import styles from "./SearchBar.module.css";
import Icon from "../Icon/Icon";

const SearchBar = () => {
  return (
    <form role="search" aria-label="blog search" className={`${styles["search-bar"]}`}>
      <input
        aria-label="search text"
        name="search"
        className={styles.input}
        type="text"
        placeholder="Search blogs..."
      />
      <button
        aria-label="Search"
        type="submit"
        onClick={(e) => e.preventDefault()}
        className={styles.button}
      >
        <Icon name="search" fillColor="#fff" height="24" width="24" />
      </button>
    </form>
  );
};

export default SearchBar;
