import { ISongObject } from "@/app/types/music/song-object.interface";
import { ISong } from "@/app/types/music/song.interface";
import styles from "./Music.module.scss";
import Image from "next/image";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { useState, useEffect } from "react";
import { Howl } from "howler";

type TypeMusicData = {
  data:
    | { music: ISong[] | undefined; length: number | undefined }
    | ISongObject
    | undefined;
};

const MusicData: React.FC<TypeMusicData> = ({ data }) => {
  const [songDurations, setSongDurations] = useState<number[]>([]);
  const { setActiveSong } = useStoreActions();

  // Function to fetch and calculate song duration
  const fetchSongDuration = async (filePath: string) => {
    return new Promise<number>((resolve) => {
      const sound = new Howl({
        src: [filePath],
        onload: () => {
          const durationInSeconds = sound.duration();
          resolve(durationInSeconds);
        },
      });
    });
  };

  useEffect(() => {
    const calculateDurations = async () => {
      if (data && data.music) {
        const durations: number[] = [];

        for (const song of data?.music as ISong[]) {
          const duration = await fetchSongDuration(song.filePath);
          durations.push(duration);
        }

        setSongDurations(durations);
      }
    };

    calculateDurations();
  }, [data]);

  // set song in player
  const handleActive = (song: ISong) => {
    setActiveSong(song);
    console.log(song);
  };

  const myLoader = ({ src }: { src: string }) => {
    return `http://localhost:4200${src}`;
  };

  return (
    <div className={styles.container}>
      {data &&
        data.music?.map((song, index) => (
          <div
            onClick={() => handleActive(song)}
            key={song.id}
            className={styles.song}
          >
            <p className={styles.order}>{index + 1}</p>
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
            <p className={styles.duration}>
              {songDurations[index]?.toFixed(0)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default MusicData;
