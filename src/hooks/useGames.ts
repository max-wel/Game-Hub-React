import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient, { type FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store/gameQueryStore";
import type { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
