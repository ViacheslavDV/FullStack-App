"use client";
import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "@/app/hooks/auth/useAuth";
import { useStoreActions } from "@/app/hooks/useStoreActions";
import { getAccessToken } from "@/app/services/auth/auth.helper";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/app/utils/constants";

const AuthProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { logout, checkAuth } = useStoreActions();
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken && user) {
      logout();
    }
  }, [pathname]);

  const router = useRouter();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  if (!isProtectedRoute) return <>{children}</>;
  if (isProtectedRoute && user) return <>{children}</>;

  pathname !== "/auth" && router.replace("/auth");
  return null;
};

export default AuthProvider;
