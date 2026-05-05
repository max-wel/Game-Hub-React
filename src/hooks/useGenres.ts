import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres", "fields id, name; limit 50;");

export default useGenres;
