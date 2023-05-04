import { instance } from "@/app/api/api.interceptor";
import { SongDataType } from "@/app/types/music/song-data.type";
import { ISong } from "@/app/types/music/song.interface";

export const MusicService = {
  async getMusic(songDataType: SongDataType) {
    const response = await instance<ISong[]>({
      url: `/music/${songDataType}`,
      method: "GET",
    });
    return response.data;
  },
};
