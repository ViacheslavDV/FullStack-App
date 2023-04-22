import { useAuth } from "@/app/hooks/auth/useAuth";
import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileData from "./ProfileData/ProfileData";

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <main className={styles.main}>
      <section className="flex flex-row justify-around">
        <div>
          <Avatar />
        </div>
        <div>
          <ProfileData />
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Profile;
