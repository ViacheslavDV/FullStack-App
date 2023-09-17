import { ChangeEvent, useEffect, useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import styles from "./Search.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { useRouter } from "next/router";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setFilters, clearFilters } = useStoreActions();
  const debounced = useDebounce(inputValue);
  const { filter } = useTypedSelector((state) => state);
  const router = useRouter();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setFilters({ search: inputValue });
    router.push(`/music?search=${encodeURIComponent(inputValue)}`);
  };

  const clearSearch = () => {
    setInputValue("");
    clearFilters();
  };

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
        onChange={(e) => onInputChange(e)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {inputValue && (
        <span onClick={() => clearSearch()} className={styles.l_icon}>
          <MdClose className={styles.icon} />
        </span>
      )}
    </div>
  );
};

export default Search;
