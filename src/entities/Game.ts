import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
