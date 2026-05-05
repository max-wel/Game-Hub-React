import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchedGames {
  id: number;
  name: string;
  cover?: { id: number; image_id: string };
  platforms: Platform[];
  rating: number;
}

export interface Platform {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  imageUrl?: string;
  platforms: Platform[];
  rating: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getImageUrl = (imageId: string) =>
    `https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`;

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .post<FetchedGames[]>(
        "/games",
        "fields name, rating, first_release_date, cover.image_id, platforms.name; where platforms = (6,48,49,130,167,169); limit 10;",
        { signal: controller.signal },
      )
      .then((res) => {
        const transformed = res.data.map((game) => ({
          ...game,
          imageUrl: game.cover?.image_id
            ? getImageUrl(game.cover.image_id)
            : undefined,
        }));

        setGames(transformed);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
