import { EMusicFilters } from "@/app/types/music/song-object.interface";

export interface IFilter {
  sort?: EMusicFilters;
  search?: string;
}
