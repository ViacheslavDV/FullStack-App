import { ISong } from "./song.interface";

export enum EMusicFilters {
  MOST_POPULAR = "most-popular",
  LESS_POPULAR = "less-popular",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export type TypeDataFilters = {
  sort?: EMusicFilters;
  search?: string;
  page?: string | number;
  perPage?: string | number;
};

export interface ISongObject {
  music: ISong[];
  length: string;
}
