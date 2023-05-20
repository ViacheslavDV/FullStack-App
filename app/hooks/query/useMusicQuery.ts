import { MusicService } from "@/app/services/music/music.service";
import { SongDataType } from "@/app/types/music/song-data.type";
import { useState } from "react";
import { QueryClient, useQuery } from "react-query";

export const useMusicQuery = () => {
  const [stateSongDataType, setStateSongDataType] =
    useState<SongDataType>("all");

  const queryClient = new QueryClient();

  const { data, status } = useQuery({
    queryKey: ["music"],
    queryFn: async () => MusicService.getMusic(stateSongDataType),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const fetchMusicManually = () => {
    queryClient.prefetchQuery("music");
  };

  return {
    data,
    status,
    stateSongDataType,
    setStateSongDataType,
    fetchMusicManually,
  };
};
