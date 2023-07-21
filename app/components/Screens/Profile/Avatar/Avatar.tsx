import Image from "next/image";

type AvatarType = {
  avatarPath: string | undefined | any;
};

const Avatar: React.FC<AvatarType> = ({ avatarPath }) => {
  const myLoader = ({ src }: { src: string }) => {
    return `http://localhost:4200${src}`;
  };

  return (
    <div>
      <Image
        loader={myLoader}
        className=""
        src={!avatarPath ? avatarPath : "/uploads/defAvatar/defAvatar1.jpg"}
        alt="avatar"
        height={250}
        width={250}
      />
    </div>
  );
};

export default Avatar;
