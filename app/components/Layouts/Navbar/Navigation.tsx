import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { EMusicFilters } from "@/app/types/music/song-object.interface";
import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";

const Navigation: React.FC = () => {
  const { setFilters } = useStoreActions();
  const { data, status } = useMusicQuery();
  return (
    <div className={styles.navigation}>
      <Link
        className={styles.category}
        href="/music"
        onClick={() => setFilters({ sort: EMusicFilters.MOST_POPULAR })}
      >
        Popular
      </Link>
      <Link
        className={styles.category}
        href="/music"
        onClick={() => setFilters({ sort: EMusicFilters.NEWEST })}
      >
        New
      </Link>
      <Link className={styles.category} href="/genre">
        Genres
      </Link>
      <Link className={styles.category} href="/author/all">
        Artists
      </Link>
      <Link className={styles.category} href="/music">
        Users
      </Link>
    </div>
  );
};

export default Navigation;
