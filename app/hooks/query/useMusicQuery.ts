import { MusicService } from "@/app/services/music/music.service";
import { TypeDataFilters } from "@/app/types/music/song-object.interface";
import { useQuery } from "react-query";

export const useMusicQuery = (queryData?: TypeDataFilters) => {
  const { data, status } = useQuery({
    queryKey: ["music", queryData],
    queryFn: async () => MusicService.getAllMusic(queryData),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    status,
  };
};
