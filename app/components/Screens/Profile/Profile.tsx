import { useAuth } from "@/app/hooks/auth/useAuth";
import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileData from "./ProfileData/ProfileData";
import Favorites from "./Favorites/Favorites";
import { useUserProfileQuery } from "@/app/hooks/query/useUserProfileQuery";

const Profile: React.FC = () => {
  const { data, status } = useUserProfileQuery();

  return (
    <main className={styles.main}>
      <section className="flex justify-around w-full px-12">
        <div>
          <ProfileData
            userName={data?.data.name}
            userMail={data?.data.email}
            memberSince={data?.data.createdAt}
          />
        </div>
        <div>
          <Avatar avatarPath={data?.data.avatarPath} />
        </div>
      </section>
      <section>
        <Favorites favorites={data?.data.favorites} />
      </section>
    </main>
  );
};

export default Profile;
