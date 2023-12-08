import styles from "./PreNavBar.module.scss";
import AuthIcon from "./AuthIcon/AuthIcon";
import Search from "../../Filters/Search/Search";
import Logo from "./Logo/Logo";
import { useStoreActions } from "@/app/hooks/useStoreActions";

const PreNavBar: React.FC = () => {
  const { clearFilters } = useStoreActions();
  return (
    <main className={styles.main}>
      <h2 onClick={() => clearFilters()}>
        <Logo />
      </h2>
      <div className={styles.rightSpace}>
        <Search />
        <AuthIcon />
      </div>
    </main>
  );
};

export default PreNavBar;
