import { useGenreQuery } from "@/app/hooks/query/useGenreQuery";
import styles from "./Genres.module.scss";
import Link from "next/link";

const Genres = () => {
  const { data, status } = useGenreQuery();

  return (
    <div className={styles.main}>
      {data &&
        data.map((genre) => (
          <Link href="/genre/[tag]" as={`/genre/${genre.tag}`}>
            <div key={genre.id}>{genre.tag}</div>
          </Link>
        ))}
    </div>
  );
};

export default Genres;
