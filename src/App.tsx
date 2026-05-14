import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Stack hideBelow="lg" mt={3}>
        <GridItem area="aside" paddingX={4}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenreId={(genreId) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          />
        </GridItem>
      </Stack>
      <GridItem area="main" mt={3}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={5} paddingLeft={4} marginBottom={4}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatformId={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSort={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
