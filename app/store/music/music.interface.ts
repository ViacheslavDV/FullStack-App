import { ISong } from "@/app/types/music/song.interface";

export interface IInitialMusicState {
  song: ISong | null;
  isPlaying: boolean;
}
