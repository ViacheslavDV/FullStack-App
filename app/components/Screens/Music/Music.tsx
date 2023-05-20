import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";
import styles from "./Music.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { ISong } from "@/app/types/music/song.interface";

const Music: React.FC = () => {
  const { data, status, setStateSongDataType } = useMusicQuery();
  const { setActiveSong } = useStoreActions();
  {
    status === "loading" && "Loading";
  }
  {
    status === "error" && "Error";
  }

  // set song in player
  const handleActive = (song: ISong) => {
    setActiveSong(song);
    console.log(song);
  };

  return (
    <div className={styles.main}>
      {data?.map((song) => (
        <div onClick={() => handleActive(song)} key={song.id}>
          <p>{song.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Music;
