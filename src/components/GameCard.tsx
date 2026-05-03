import { Card, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow={"hidden"}>
      <Image src={game.imageUrl} height="300px" />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <PlatformIconList platforms={game.platforms} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
