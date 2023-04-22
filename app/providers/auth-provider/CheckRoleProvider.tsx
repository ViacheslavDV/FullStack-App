import { PropsWithChildren } from "react";
import { TypeComponentAuthFields } from "./auth-page.type";
import { useAuth } from "@/app/hooks/auth/useAuth";
import { useRouter } from "next/router";

const CheckRoleProvider: React.FC<
  PropsWithChildren<TypeComponentAuthFields>
> = ({ Component: { isAuthorized }, children }) => {
  const { user } = useAuth();

  const router = useRouter();

  if (user && isAuthorized) return <>{children}</>;

  router.pathname !== "/auth" && router.replace("/auth");
  return null;
};

export default CheckRoleProvider;
