import { Card, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow={"hidden"}>
      <Image src={game.imageUrl} height="300px" />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <Card.Description></Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
