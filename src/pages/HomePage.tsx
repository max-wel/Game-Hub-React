import { Stack, GridItem, HStack, Grid } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Stack hideBelow="lg" mt={3}>
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main" mt={3}>
        <GameHeading />
        <HStack gap={5} paddingLeft={4} marginBottom={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
