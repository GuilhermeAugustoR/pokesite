import { Stack } from "@chakra-ui/react";
import Home from "./screens/Home";
import PokeContextProvider from "./context/pokeContext";

function App() {
  return (
    <Stack display="flex" w="100%" h="100%" alignItems="center" bg="teal.700">
      <Stack>
        <PokeContextProvider>
          <Home />
        </PokeContextProvider>
      </Stack>
    </Stack>
  );
}

export default App;
