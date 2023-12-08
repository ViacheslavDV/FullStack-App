import Link from "next/link";
import styles from "./UserMenu.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useLogout } from "@/hooks/auth/useLogout";

const UserMenu: React.FC = () => {
  const { logoutFn } = useLogout();

  return (
    <main className={styles.main}>
      <Link href="/user/profile" className={styles.option}>
        <AiOutlineUser className={styles.icon} />
        <span className={styles.text}>My Profile</span>
      </Link>
      <div className={styles.option}>
        <IoSettingsOutline className={styles.icon} />
        <span className={styles.text}>Update</span>
      </div>
      <div onClick={() => logoutFn()} className={styles.option}>
        <MdOutlineLogout className={styles.icon} />
        <span className={styles.text}>Log out</span>
      </div>
    </main>
  );
};

export default UserMenu;