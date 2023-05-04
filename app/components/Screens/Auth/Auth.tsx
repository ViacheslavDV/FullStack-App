import { useAuth } from "@/app/hooks/auth/useAuth";
import styles from "./Auth.module.scss";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { useState } from "react";
import { AuthType } from "@/app/types/auth/auth.type";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAuthUserData } from "@/app/store/user/user.interface";
import InputField from "./InputField/InputField";
import AuthCheckButton from "./AuthCheckButton/AuthCheckButton";
import { MdOutlineMailOutline, MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { validEmail } from "./valid-email";
import Loading from "@/app/components/Loaders/Loading/Loading";
import { useAuthRedirect } from "@/app/hooks/auth/useAuthRedirect";

const Auth: React.FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();

  const { login, register } = useStoreActions();

  const [authType, setAuthType] = useState<AuthType>("login");

  // create custom hook later !!!
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAuthUserData>();

  const onSubmit: SubmitHandler<IAuthUserData> = (data) => {
    if (authType === "login") login(data);
    else register(data);
    reset();
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.logo}>
        {authType === "login" ? "Login" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading && <Loading />}
        <InputField
          {...formRegister("email", {
            required: "Email is required",
            pattern: {
              value: validEmail,
              message: "Please enter a valid email",
            },
          })}
          type="text"
          label="Email"
          placeholder="email"
          error={errors.email?.message}
          Icon={MdOutlineMailOutline}
        />
        {authType === "register" && (
          <InputField
            {...formRegister("name", {
              required: "Name is required",
            })}
            type="text"
            label="Name"
            placeholder="name"
            error={errors.name?.message}
            Icon={MdPerson}
          />
        )}
        <InputField
          {...formRegister("password", {
            required: "Password is required",
          })}
          type="password"
          label="Password"
          placeholder={
            authType === "register" ? "create a password" : "password"
          }
          error={errors.password?.message}
          Icon={RiLockPasswordFill}
        />
        <button type="submit" className={styles.submit}>
          {authType === "login" ? "Login" : "Sign In"}
        </button>
      </form>
      <AuthCheckButton
        reset={reset}
        authType={authType}
        setAuthType={setAuthType}
      />
    </div>
  );
};

export default Auth;
