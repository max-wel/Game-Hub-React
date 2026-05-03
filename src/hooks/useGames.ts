import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchedGames {
  id: number;
  name: string;
  cover?: { id: number; image_id: string };
}

export interface Game {
  id: number;
  name: string;
  imageUrl?: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const getImageUrl = (imageId: string) =>
    `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .post<FetchedGames[]>(
        "/games",
        "fields name, rating, cover.image_id; limit 10;",
        { signal: controller.signal },
      )
      .then((res) => {
        const transformed = res.data.map((game) => ({
          id: game.id,
          name: game.name,
          imageUrl: game.cover?.image_id
            ? getImageUrl(game.cover.image_id)
            : undefined,
        }));

        setGames(transformed);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
