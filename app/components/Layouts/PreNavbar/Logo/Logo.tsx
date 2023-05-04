import Link from "next/link";
import { SiMusicbrainz } from "react-icons/si";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href="/music/all">
      <div className={styles.main}>
        <SiMusicbrainz className={styles.icon} />
        <span className={styles.logo}>Music Brain</span>
      </div>
    </Link>
  );
};

export default Logo;
