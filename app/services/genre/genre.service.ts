import { IGenre } from "@/app/types/genre.interface";
import { instance } from "@/app/utils/api/api.interceptor";

export const GenreService = {
  async getGenres() {
    const response = await instance<IGenre[]>({
      url: `/genre/all`,
      method: "GET",
    });
    return response.data;
  },

  async getSongsByGenre(tag: string) {
    const response = await instance({
      url: `/genre/${tag}`,
      method: "GET",
    });
    return response.data;
  },
};
