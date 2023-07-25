import Image from "next/image";
import styles from "./Avatar.module.scss";

type AvatarType = {
  avatarPath: string | undefined;
};

const Avatar: React.FC<AvatarType> = ({ avatarPath }) => {
  const myLoader = ({ src }: { src: string }) => {
    return `http://localhost:4200${src}`;
  };

  return (
    <Image
      loader={myLoader}
      className={styles.image}
      src={avatarPath ? avatarPath : "/uploads/defAvatar/defAvatar1.jpg"}
      alt="avatar"
      height={250}
      width={250}
    />
  );
};

export default Avatar;
