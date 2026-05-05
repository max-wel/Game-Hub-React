import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

type FetchResponse<T> = T[];

const useData = <T>(endpoint: string, body: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .post<FetchResponse<T>>(endpoint, body, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
