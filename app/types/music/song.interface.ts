import { IUser } from "../user.interface";

export interface ISong {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  releaseDate?: Date | number;
  title: string;
  album?: string;
  artist: string;
  duration: number;
  genre: string[] | string;
  listeners: number;
  file: string;
  image?: string | null;
  author?: IUser | string | null;
  authorId?: number | null;
  reviews?: any | string | null;
}
