import styles from "./Player.module.scss";
import { Howl } from "howler";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import { MdVolumeUp } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";

const Player: React.FC = () => {
  const { music } = useTypedSelector((state) => state);
  const [currentDuration, setCurrentDuration] = useState<number>(0);
  const [songDuration, setSongDuration] = useState<number>(0);
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);
  const [volume, setVolume] = useState(1);
  const soundRef = useRef<Howl>();
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (music.song) {
      soundRef.current = new Howl({
        src: music.song.file,
        html5: true,
        volume: volume,
        onload: () => {
          setSongDuration(soundRef.current?.duration() || 0);
        },
        onplay: () => {
          intervalRef.current = setInterval(updateSongProgress, 1000);
        },
        onpause: () => {
          clearInterval(intervalRef.current);
        },
      });
    }
  }, [music]);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();

  // get current song progress
  const updateSongProgress = () => {
    setCurrentDuration(soundRef.current?.seek() || 0);
  };

  // handle song progress
  const handleProgressBar = (event: React.MouseEvent<HTMLElement>) => {
    const progressBarWidth = event.currentTarget.offsetWidth;
    const clickPositionX = event.nativeEvent.offsetX;
    const newPosition = (clickPositionX / progressBarWidth) * songDuration;
    soundRef.current?.seek(newPosition);
    setCurrentDuration(newPosition);
  };

  // update progress bar
  useEffect(() => {
    setProgressBarWidth((currentDuration * 100) / songDuration);
  }, [currentDuration]);

  // handle volume
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, [volume]);

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
        <section className={styles.center}>
          <span className={styles.duration}>{currentDuration.toFixed(0)}</span>
          <div className={styles.progress}>
            {music.song && (
              <span className={styles.title}>{music.song.title}</span>
            )}
            <div className={styles.progressBar} onClick={handleProgressBar}>
              <span
                style={{ width: `${progressBarWidth}%` }}
                className={styles.songProgress}
              ></span>
            </div>
          </div>
          <span className={styles.duration}>{songDuration.toFixed(0)}</span>
        </section>
        <div className={styles.volume}>
          <MdVolumeUp className={styles.volumeIcon} />
          <input
            className={styles.volumeSlider}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </main>
    </section>
  );
};

export default Player;
