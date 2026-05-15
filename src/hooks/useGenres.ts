import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { type FetchResponse } from "../services/api-client";
import type { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { results: genres },
  });

export default useGenres;
