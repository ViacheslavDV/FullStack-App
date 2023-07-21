import { getContentType } from "@/app/utils/api/api.helper";
import {
  IAuthResponse,
  IAuthUserData,
  IEmailPassword,
} from "@/app/store/user/user.interface";
import axios from "axios";
import Cookies from "js-cookie";
import { saveToStorage } from "./auth.helper";
import { instance } from "@/app/utils/api/api.interceptor";
import { AuthType } from "@/app/types/auth/auth.type";

export const AuthService = {
  async main(authType: AuthType, data: IAuthUserData | IEmailPassword) {
    const response = await instance<IAuthResponse>({
      url: `/auth/${authType}`,
      method: "POST",
      data,
    });

    if (response.data.accessToken) saveToStorage(response.data);

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + "/auth/login/refresh_token",
      { refreshToken },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response.data;
  },
};
