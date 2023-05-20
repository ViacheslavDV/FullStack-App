import { useMusicQuery } from "@/app/hooks/query/useMusicQuery";
import styles from "./Player.module.scss";
import { Howl } from "howler";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import { useEffect, useState, useRef } from "react";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const Player: React.FC = () => {
  const { data } = useMusicQuery();
  const [currentDuration, setCurrentDuration] = useState(0);
  const [duration, setDuration] = useState(0);
  const { music } = useTypedSelector((state) => state);

  let sound: Howl | undefined;
  const soundRef = useRef<Howl>();

  useEffect(() => {
    if (music.song) {
      soundRef.current = new Howl({
        src: music.song.file,
        html5: true,
        onload: () => {
          setDuration(soundRef.current?.duration() || 0);
        },
      });
    }
  }, [music]);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.pause();
        soundRef.current.unload();
      }
    };
  }, []);

  const handleProgressBar = (event: React.MouseEvent<HTMLElement>) => {
    const progressBarWidth = event.currentTarget.offsetWidth;
    const clickPositionX = event.nativeEvent.offsetX;
    const newPosition = (clickPositionX / progressBarWidth) * duration;
    console.log("progressBarWidth:", progressBarWidth);
    console.log("clickPositionX:", clickPositionX);
    console.log("newPosition:", newPosition);
    soundRef.current?.seek(newPosition);
    setCurrentDuration(newPosition);
  };

  console.log("currentDuration:", currentDuration);
  console.log("duration:", duration);

  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.control}>
          <button onClick={play}>
            <TbPlayerPlay className={styles.icon} />
          </button>
          <button onClick={pause}>
            <TbPlayerPause className={styles.icon} />
          </button>
        </div>
        <div className={styles.progress}>
          <span>{music.song.title}</span>
          <span
            className={styles.progressBar}
            style={{ width: `${(currentDuration / duration) * 100}%` }}
            onClick={handleProgressBar}
          ></span>
        </div>
        <div>
          <span>{currentDuration}</span>
          <span>{duration}</span>
        </div>
      </main>
    </section>
  );
};

export default Player;
