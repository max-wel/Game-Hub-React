import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenreId: number | undefined;
  onSelectGenreId: (genreId: number) => void;
}

const GenreList = ({ onSelectGenreId, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading mb="3" size="xl">
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="full"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize="md"
                fontWeight={genre.id == selectedGenreId ? "bolder" : "medium"}
                variant="underline"
                onClick={() => onSelectGenreId(genre.id)}
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
