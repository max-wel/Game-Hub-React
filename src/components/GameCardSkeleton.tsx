import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
