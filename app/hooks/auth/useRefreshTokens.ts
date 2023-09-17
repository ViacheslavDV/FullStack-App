import { AuthService } from "@/app/services/auth/auth.service";
import { useQuery } from "react-query";

export const useRefreshTokens = () => {
  const { data } = useQuery({
    queryKey: ["tokens"],
    queryFn: async () => AuthService.getNewTokens(),
  });

  return data;
};
