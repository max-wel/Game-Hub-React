import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  if (status == "error") return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={games.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={isFetchingNextPage ? <Text>Loading...</Text> : null}
      endMessage={<Text>Nothing to see again</Text>}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={5} gap={5}>
        {status == "pending"
          ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
