import { useAuth } from "@/app/hooks/auth/useAuth";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UserMenu from "./UserMenu/UserMenu";
import styles from "./AuthIcon.module.scss";

const AuthIcon = () => {
  const { user } = useAuth();

  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
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
            <span className={styles.name}>{user.name}</span>
            <MdOutlineKeyboardArrowDown className={styles.icon} />
          </div>
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
