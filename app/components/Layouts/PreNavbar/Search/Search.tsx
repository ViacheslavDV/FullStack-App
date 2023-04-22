import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.main}>
      <span className={styles.r_icon}>
        <MdSearch className={styles.icon} />
      </span>
      <input
        className={styles.input_field}
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && (
        <span onClick={() => setInputValue("")} className={styles.l_icon}>
          <MdClose className={styles.icon} />
        </span>
      )}
    </div>
  );
};

export default Search;
