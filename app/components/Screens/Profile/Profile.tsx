import { useAuth } from "@/app/hooks/auth/useAuth";
import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileData from "./ProfileData/ProfileData";
import Favorites from "./Favorites/Favorites";
import { useUserProfileQuery } from "@/app/hooks/query/useUserProfileQuery";

const Profile: React.FC = () => {
  const { data, status } = useUserProfileQuery();

  console.log(data);

  return (
    <main className={styles.main}>
      <section className="flex justify-around w-full px-12">
        <div>
          <Avatar avatarPath={data?.data.avatarPath} />
        </div>
        <div>
          <ProfileData userName={data?.data.name} userMail={data?.data.email} />
        </div>
      </section>
      <section>
        <Favorites favorites={data?.data.favorites} />
      </section>
    </main>
  );
};

export default Profile;
