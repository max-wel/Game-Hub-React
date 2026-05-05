import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .post<Genre[]>("/genres", "fields id, name; limit 50;", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
