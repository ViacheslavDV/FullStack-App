import { PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-page.type";
import dynamic from "next/dynamic";
import { useAuth } from "@/app/hooks/auth/useAuth";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { useRouter } from "next/router";
import { getAccessToken } from "@/app/services/auth/auth.helper";
import Cookies from "js-cookie";

const DynamicCheckRole = dynamic(() => import("./CheckRoleProvider"), {
  ssr: false,
});

const AuthProvider: React.FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isAuthorized },
  children,
}) => {
  const { user } = useAuth();
  const { logout } = useStoreActions();
  const { pathname } = useRouter();

  // useEffect(() => {
  //   const accessToken = getAccessToken();
  //   if (accessToken) {
  //     checkAuth();
  //   }
  // }, []);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);

  return isAuthorized ? (
    <DynamicCheckRole Component={{ isAuthorized }}>{children}</DynamicCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
