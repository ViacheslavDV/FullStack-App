import { AuthType } from "@/app/types/auth/auth.type";
import { Dispatch, SetStateAction } from "react";
import styles from "./AuthCheckButton.module.scss";

type CheckAuthType = {
  authType: AuthType;
  setAuthType: Dispatch<SetStateAction<AuthType>>;
  reset: () => void;
};

const AuthCheckButton: React.FC<CheckAuthType> = ({
  authType,
  setAuthType,
  reset,
}) => {
  const onClickHandler = () => {
    if (authType === "login") {
      setAuthType("register");
    } else {
      setAuthType("login");
    }
    reset();
  };

  return (
    <div className={styles.main}>
      <button
        type="button"
        onClick={() => onClickHandler()}
        className={styles.account_check}
      >
        {authType === "login" ? "Create account" : "I already have an account"}
      </button>
    </div>
  );
};

export default AuthCheckButton;
