import { AuthorDataType } from "../../types/author/author-data.type";
import { IAuthor } from "@/app/types/author/author.interface";
import { instance } from "@/app/utils/api/api.interceptor";

export const AuthorService = {
  async getAuthors(authorDataType: AuthorDataType) {
    const response = await instance<IAuthor[]>({
      url: `/author/${authorDataType}`,
      method: "GET",
    });
    return response.data;
  },

  async getUniqueAuthor(id: number) {
    const response = await instance<IAuthor>({
      url: `/author/${id}`,
      method: "GET",
    });
    return response.data;
  },
};
