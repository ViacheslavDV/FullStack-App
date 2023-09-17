import { GenreService } from "@/app/services/genre/genre.service";
import { ISongObject } from "@/app/types/music/song-object.interface";
import { ISong } from "@/app/types/music/song.interface";
import { useQuery } from "react-query";

export const useGenreQuery = () => {
  const { data, status } = useQuery({
    queryKey: ["genre"],
    queryFn: async () => GenreService.getGenres(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    status,
  };
};

export const useMusicByGenreQuery = (tag: string) => {
  const { data: music, status } = useQuery({
    queryKey: ["genre"],
    queryFn: async (): Promise<ISong[]> => GenreService.getSongsByGenre(tag),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const data = { music, length: music?.length };
  return {
    data,
    status,
  };
};
