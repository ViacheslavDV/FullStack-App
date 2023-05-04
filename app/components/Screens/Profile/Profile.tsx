import { useAuth } from "@/app/hooks/auth/useAuth";
import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileData from "./ProfileData/ProfileData";
import Favorites from "./Favorites/Favorites";

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <main className={styles.main}>
      <section className="flex justify-around w-full px-12">
        <div>
          <Avatar />
        </div>
        <div>
          <ProfileData />
        </div>
      </section>
      <section>
        <Favorites />
      </section>
    </main>
  );
};

export default Profile;
