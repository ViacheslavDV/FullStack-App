import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";
import styles from "./Music.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { MdAccessTime } from "react-icons/md";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import MusicData from "./MusicData";

const Music: React.FC = () => {
  const {} = useStoreActions();
  const { filter } = useTypedSelector((state) => state);
  const { data, status } = useMusicQuery(filter);

  {
    status === "loading" && "Loading";
  }
  {
    status === "error" && "Error";
  }

  return (
    <div className={styles.main}>
      <div className={styles.fields}>
        <p className={styles.order}>#</p>
        <p className={styles.avatar}></p>
        <p className={styles.titleTitle}>Title</p>
        <p className={styles.album}>Album</p>
        <p className={styles.add}></p>
        <p className={styles.time}>
          <MdAccessTime className={styles.timeIcon} />
        </p>
      </div>
      <MusicData data={data} />
    </div>
  );
};

export default Music;
