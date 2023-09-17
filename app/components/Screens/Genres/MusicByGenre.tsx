import { useMusicByGenreQuery } from "@/app/hooks/query/useGenreQuery";
import { useRouter } from "next/router";
import styles from "./Genres.module.scss";
import MusicData from "../Music/MusicData";

const MusicByGenre = () => {
  const router = useRouter();
  const tag = router.asPath.slice(7);
  const genre = router.query.tag;
  //   console.log(router.query.tag);

  //   console.log(tag);

  const { data, status } = useMusicByGenreQuery(tag);

  return (
    <div className={styles.main}>
      {data.length !== 0 && <div>Music by genre: {genre}</div>}
      {data.length === 0 && <div>Nothing was found</div>}
      {data && <MusicData data={data} />}
    </div>
  );
};

export default MusicByGenre;
