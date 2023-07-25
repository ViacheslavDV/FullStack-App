import { useAuth } from "@/app/hooks/auth/useAuth";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UserMenu from "./UserMenu/UserMenu";
import styles from "./AuthIcon.module.scss";
import Image from "next/image";

const AuthIcon = () => {
  const { user } = useAuth();

  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  const myLoader = ({ src }: { src: string }) => {
    return `http://localhost:4200${src}`;
  };

  return (
    <>
      {!user && (
        <Link href="/auth">
          <span className={styles.sign_in}>Sign In</span>
        </Link>
      )}
      {user && (
        <div
          onClick={() => setOpenUserMenu((prev) => !prev)}
          className={styles.wrapper}
        >
          <div className={styles.main}>
            {user.avatarPath && (
              <Image
                className={styles.picture}
                loader={myLoader}
                src={user.avatarPath}
                alt="avatar"
                width={44}
                height={44}
              />
            )}
          </div>
          <MdOutlineKeyboardArrowDown className={styles.icon} />
          {openUserMenu && (
            <div className={styles.user_menu}>
              <UserMenu />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AuthIcon;
