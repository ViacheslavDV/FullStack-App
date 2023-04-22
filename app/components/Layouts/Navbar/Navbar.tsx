import PreNavBar from "../PreNavbar/PreNavBar";
import Navigation from "./Navigation";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.main}>
      <PreNavBar />
      <Navigation />
    </div>
  );
};

export default Navbar;
