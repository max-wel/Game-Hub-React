import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import GameAttributes from "../components/GameAttributes";
import SummarizeText from "../components/SummarizeText";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGameDetail(id!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <SummarizeText maxChars={300}>{game.description_raw}</SummarizeText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
