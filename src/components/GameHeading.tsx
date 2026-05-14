import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform } = usePlatform(gameQuery.platformId);
  const { data: genres } = useGenres();

  const selectedGenre = genres?.results.find(
    (genre) => genre.id == gameQuery.genreId,
  );
  const heading = `${platform?.name ?? ""} ${selectedGenre?.name ?? ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} marginLeft={4} size="3xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
