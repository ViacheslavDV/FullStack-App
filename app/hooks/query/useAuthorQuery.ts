import { AuthorService } from "@/app/services/author/author.service";
import { AuthorDataType } from "@/app/types/author/author-data.type";
import { useQuery } from "react-query";
import { useState } from "react";

export const useAuthorQuery = () => {
  const [stateAuthorDataType, setStateAuthorDataType] =
    useState<AuthorDataType>("all");

  const { data, status } = useQuery({
    queryKey: ["author"],
    queryFn: async () => AuthorService.getAuthors(stateAuthorDataType),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    status,
    stateAuthorDataType,
    setStateAuthorDataType,
  };
};
