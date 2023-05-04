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
      <div>Genres</div>
      <div>Artists</div>
      <div>Users</div>
    </div>
  );
};

export default Navigation;
