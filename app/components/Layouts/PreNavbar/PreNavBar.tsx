import styles from "./PreNavBar.module.scss";
import AuthIcon from "./AuthIcon/AuthIcon";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";

const PreNavBar: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2>
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
