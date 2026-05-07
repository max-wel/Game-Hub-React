import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading mb="3" size="xl">
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="full"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize="md"
                fontWeight={genre.id == selectedGenre?.id ? "bolder" : "medium"}
                variant="underline"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
