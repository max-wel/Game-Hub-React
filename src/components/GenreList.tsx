import { HStack, Icon, Link, List, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import { genreIconMap } from "../services/genreIconMap";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={1.5}>
          <HStack>
            <Icon as={genreIconMap[genre.id]} size="lg" color="gray.500" />
            <Link
              fontSize="md"
              fontWeight="medium"
              variant="underline"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
