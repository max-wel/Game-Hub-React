import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  cover?: { id: number; image_id: string };
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .post<Game[]>(
        "/games",
        "fields name, rating, cover.image_id; limit 10;",
        { signal: controller.signal },
      )
      .then((res) => {
        setGames(res.data);
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
