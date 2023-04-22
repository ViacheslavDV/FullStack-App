import styles from "./Navbar.module.scss";

const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <div>Popular</div>
      <div>Trending</div>
      <div>Genres</div>
      <div>Artists</div>
    </div>
  );
};

export default Navigation;
