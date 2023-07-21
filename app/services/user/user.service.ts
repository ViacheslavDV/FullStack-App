import { ISong } from "@/app/types/music/song.interface";
import { instance } from "../../utils/api/api.interceptor";
import { IUser } from "../../types/user.interface";
import { TypeData } from "./data.type";

export const UserService = {
  async getAll() {
    return instance<IUser[]>({
      url: `/user`,
      method: "GET",
    });
  },

  async getUserById(id: number | string) {
    return instance<IUser>({
      url: `/user/${id}`,
      method: "GET",
    });
  },

  async getUserProfile() {
    return instance<IUser>({
      url: `/user/profile`,
      method: "GET",
    });
  },

  async updateUserProfile(data: TypeData) {
    return instance<IUser>({
      url: `/user/profile`,
      method: "PUT",
    });
  },

  async changeFavorites(songId: string | number) {
    return instance<ISong | IUser>({
      url: `/user/profile/${songId}`,
      method: "PATCH",
    });
  },
};
