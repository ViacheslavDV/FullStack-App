import { MusicService } from "@/app/services/music/music.service";
import { SongDataType } from "@/app/types/music/song-data.type";
import { useState } from "react";
import { useQuery } from "react-query";

export const useMusicQuery = () => {
  const [stateSongDataType, setStateSongDataType] =
    useState<SongDataType>("all");

  const { data, status } = useQuery({
    queryKey: ["music"],
    queryFn: async () => MusicService.getMusic(stateSongDataType),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    status,
    stateSongDataType,
    setStateSongDataType,
  };
};
