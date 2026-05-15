import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  selectGenre: (genreId: number) => void;
  selectPlatform: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText?: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  selectGenre: (genreId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId },
    })),
  selectPlatform: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder },
    })),
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
}));

export default useGameQueryStore;
