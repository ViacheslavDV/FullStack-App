import { UserService } from "@/app/services/user/user.service";
import { useQuery } from "react-query";

export const useUserProfileQuery = () => {
  const { data, status } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => UserService.getUserProfile(),
  });

  return {
    data,
    status,
  };
};
