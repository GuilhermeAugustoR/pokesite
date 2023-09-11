import { useEffect, useState } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import Loading from "../../components/Loading";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Primeira solicitação para obter o número total de Pokémon
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const { count } = response.data;

        // Calcular o número de páginas (cada página contém 20 Pokémon)
        const pageCount = Math.ceil(count / 20);

        // Array para armazenar todos os Pokémon com suas imagens
        let allPokemonWithImages: any = [];

        // Fazer solicitações para cada página de resultados
        for (let i = 1; i <= pageCount; i++) {
          const pageResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/?offset=${(i - 1) * 20}&limit=20`
          );
          const pageResults = pageResponse.data.results;

          // Fazer solicitação para cada Pokémon individual para obter a imagem
          const pokemonDataPromises = pageResults.map(async (pokemon: any) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemonResponse.data.name,
              imageUrl: pokemonResponse.data.sprites.front_default,
            };
          });

          // Aguardar todas as solicitações para os Pokémon individuais
          const pokemonData = await Promise.all(pokemonDataPromises);

          // Adicionar os Pokémon com imagens ao array
          allPokemonWithImages = [...allPokemonWithImages, ...pokemonData];
        }

        // Configurar o estado com a lista completa de Pokémon com imagens
        setPokemonList(allPokemonWithImages);
      } catch (error) {
        console.error("Erro ao buscar lista de Pokémon com imagens:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack
      display="grid"
      gridTemplateColumns="repeat(4, 400px)"
      w="100%"
      h="max-content"
      bg="blackAlpha.400"
      p={5}
    >
      {pokemonList.map((pokemon: any, index) => (
        <Box
          key={index}
          w="180px"
          h="280px"
          border="1px solid"
          borderRadius={6}
        >
          <Image
            src={pokemon.imageUrl}
            alt={pokemon.name}
            boxSize="200px"
            objectFit="cover"
          />
          <Text
            color="white"
            textAlign="center"
            fontSize={20}
            fontWeight="semibold"
          >
            {pokemon.name}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

export default Home;
