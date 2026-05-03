import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    score && (
      <Badge size="md" colorPalette={color}>
        {score}
      </Badge>
    )
  );
};

export default CriticScore;
