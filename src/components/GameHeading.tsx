import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id == gameQuery.platformId,
  );
  const selectedGenre = genres?.results.find(
    (genre) => genre.id == gameQuery.genreId,
  );
  const heading = `${selectedPlatform?.name ?? ""} ${selectedGenre?.name ?? ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} marginLeft={4} size="3xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
