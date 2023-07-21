import { useAuth } from "@/app/hooks/auth/useAuth";

type ProfileDataType = {
  userName: string | undefined;
  userMail: string | undefined;
};

const ProfileData: React.FC<ProfileDataType> = ({ userName, userMail }) => {
  return (
    <section className="flex flex-col justify-around w-[250px] h-[250px]">
      <div className="flex flex-col space-y-2 py-4">
        <span>Profile name:</span>
        <span></span>
      </div>
      <div className="flex flex-col space-y-2 py-4">
        <span>User email:</span>
        <span></span>
      </div>
    </section>
  );
};

export default ProfileData;
