import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { platform } = usePlatform(selectedPlatformId);
  const { data: genres } = useGenres();

  const selectedGenre = genres?.results.find(
    (genre) => genre.id == selectedGenreId,
  );
  const heading = `${platform?.name ?? ""} ${selectedGenre?.name ?? ""} Games`;
  return (
    <Heading as="h1" marginBottom={5} marginLeft={4} size="3xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
