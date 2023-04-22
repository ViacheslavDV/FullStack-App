import { useAuth } from "@/app/hooks/auth/useAuth";
import Image from "next/image";

const Avatar: React.FC = () => {
  const { user } = useAuth();

  return (
    // Change to default avatar from server later !!!
    <div>
      <Image
        className=""
        // src={user?.avatarPath ? user.avatarPath : "/def_avatar.webp"}
        src="/def_avatar.webp"
        alt="avatar"
        height={250}
        width={250}
      />
    </div>
  );
};

export default Avatar;
