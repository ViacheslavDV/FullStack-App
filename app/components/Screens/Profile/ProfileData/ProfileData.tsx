import { useAuth } from "@/app/hooks/auth/useAuth";

const ProfileData: React.FC = () => {
  const { user } = useAuth();
  return (
    <section className="flex flex-col justify-around w-[250px] h-[250px]">
      <div className="flex flex-col space-y-2 py-4">
        <span>Profile name:</span>
        <span>{user?.name}</span>
      </div>
      <div className="flex flex-col space-y-2 py-4">
        <span>User email:</span>
        <span>{user?.email}</span>
      </div>
    </section>
  );
};

export default ProfileData;
