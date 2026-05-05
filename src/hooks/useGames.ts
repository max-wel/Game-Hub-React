import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const getImageUrl = (imageId: string) =>
    `https://images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`;
  const where: string[] = [
    "platforms = (6,48,49,130,167,169)", // base filter
  ];

  if (gameQuery.genre) {
    where.push(`genres = (${gameQuery.genre.id})`);
  }

  if (gameQuery.platform) {
    where.push(`platforms = (${gameQuery.platform})`);
  }

  const query = `
  fields name, rating, first_release_date, cover.image_id, platforms.name;
  where ${where.join(" & ")};
  limit 10;
`;

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .post<FetchedGames[]>("/games", query, { signal: controller.signal })
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
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [gameQuery]);

  return { games, error, isLoading };
};

export default useGames;
