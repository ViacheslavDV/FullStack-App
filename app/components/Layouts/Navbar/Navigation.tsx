import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <Link className={styles.category} href="/music/popular">
        Popular
      </Link>
      <Link className={styles.category} href="/music/new">
        New
      </Link>
      <Link className={styles.category} href="/music/new">
        Genres
      </Link>
      <Link className={styles.category} href="/author/all">
        Artists
      </Link>
      <Link className={styles.category} href="/music/new">
        Users
      </Link>
    </div>
  );
};

export default Navigation;
