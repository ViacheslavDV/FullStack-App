import { IGenre } from "../genre.interface";
import { IUser } from "../user.interface";

export interface ISong {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;

  title: string;
  album: string;
  artist: string;
  listeners: number;
  image?: string;
  genre: IGenre;
  filePath: string;
  inFavorites: IUser[] | null;
  author?: IUser | string | null;
  authorId: number;
}
