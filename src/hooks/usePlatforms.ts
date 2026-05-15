import { useQuery } from "@tanstack/react-query";
import ApiClient, { type FetchResponse } from "../services/api-client";
import type { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
