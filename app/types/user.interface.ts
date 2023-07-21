import { ISong } from "./music/song.interface";

export interface IUser {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;

  email: string;
  name: string;
  hashedPassword: string;

  isAdmin: boolean;
  avatarPath?: string;
  favorites: ISong[] | null;
}
