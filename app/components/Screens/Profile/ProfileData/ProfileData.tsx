import styles from "./ProfileData.module.scss";

type ProfileDataType = {
  userName: string | undefined;
  userMail: string | undefined;
  memberSince: Date | string | undefined;
};

const ProfileData: React.FC<ProfileDataType> = ({ userName, memberSince }) => {
  const member =
    typeof memberSince === "string"
      ? memberSince
      : memberSince?.toLocaleString();

  return (
    <section className={styles.main}>
      <span className={styles.name}>{userName}</span>
      <p className={styles.member}>
        <span>Member Since : </span>
        <span>{member?.slice(0, 10)}</span>
      </p>
    </section>
  );
};

export default ProfileData;
