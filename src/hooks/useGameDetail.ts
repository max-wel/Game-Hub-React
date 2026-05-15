import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import type { Game } from "../entities/Game";

const useGameDetail = (slug: string) => {
  const apiClient = new ApiClient<Game>("/games");
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGameDetail;
