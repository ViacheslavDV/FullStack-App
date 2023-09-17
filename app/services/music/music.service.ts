import { TypeDataFilters } from "./../../types/music/song-object.interface";
import { instance } from "@/app/utils/api/api.interceptor";
import { ISongObject } from "@/app/types/music/song-object.interface";

export const MusicService = {
  async getAllMusic(queryData?: TypeDataFilters) {
    const response = await instance<ISongObject>({
      url: `/music`,
      method: "GET",
      params: queryData,
    });
    return response.data;
  },
};
