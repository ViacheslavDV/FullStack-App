import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";
import styles from "./Music.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { ISong } from "@/app/types/music/song.interface";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdAccessTime,
} from "react-icons/md";

const Music: React.FC = () => {
  const { data, status, setStateSongDataType } = useMusicQuery();
  const [songDuration, setSongDuration] = useState<number>(0);
  const { setActiveSong } = useStoreActions();
  const soundRef = useRef<Howl>();
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

  // get songs length
  // useEffect(() => {
  //   soundRef.current = new Howl({
  //     src: data && (data[0]?.file as any),
  //     onload: () => {
  //       setSongDuration(soundRef.current?.duration() || 0);
  //     },
  //   });
  // }, [data]);

  // load images from server
  const myLoader = ({ src }: { src: string }) => {
    return `http://localhost:4200${src}`;
  };

  console.log(data);

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
      <div className={styles.container}>
        {data &&
          data.map((song) => (
            <div
              onClick={() => handleActive(song)}
              key={song.id}
              className={styles.song}
            >
              <p className={styles.order}>{song.id}</p>
              {song.image && (
                <div className={styles.avatar}>
                  <Image
                    loader={myLoader}
                    className={styles.image}
                    src={song.image}
                    alt={song.title}
                    width={50}
                    height={50}
                  />
                </div>
              )}
              <div className={styles.name}>
                <p className={styles.title}>{song.title}</p>
                <p className={styles.artist}>{song.artist}</p>
              </div>
              <p className={styles.album}>{song.album}</p>
              <button className={styles.add}>
                <MdOutlineFavoriteBorder className={styles.addUnHovered} />
                <MdOutlineFavorite className={styles.addHovered} />
              </button>
              <p className={styles.duration}>{songDuration.toFixed(0)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Music;
