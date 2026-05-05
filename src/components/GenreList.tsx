import { HStack, Icon, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { genreIconMap } from "../services/genreIconMap";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={1}>
          <HStack>
            <Icon as={genreIconMap[genre.id]} size="lg" color="gray.500" />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
