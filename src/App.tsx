import { Stack, VStack } from "@chakra-ui/react";
import Home from "./screens/Home";
import PokeContextProvider from "./context/pokeContext";

function App() {
  return (
    <Stack
      display="flex"
      w="99vw"
      h="max-content"
      alignItems="center"
      bg="teal.700"
    >
      <VStack display="flex" w="60vw">
        <PokeContextProvider>
          <Home />
        </PokeContextProvider>
      </VStack>
    </Stack>
  );
}

export default App;
