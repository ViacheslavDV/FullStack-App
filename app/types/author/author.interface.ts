import { ISong } from "../music/song.interface";

export interface IAuthor {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  image?: string;
  listeners: number;
  songs?: ISong[];
}
