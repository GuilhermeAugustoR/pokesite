import { createContext, useEffect, useMemo, useState } from "react";
import { IPokeContext, IProps } from "./pokeContext.structure";
import axios from "axios";

export const PokeContext = createContext({} as IPokeContext);

const PokeContextProvider: React.FC<IProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [pokeType, setPokeType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
              type: pokemonResponse.data.types[0].type.name,
            };
          });

          // Aguardar todas as solicitações para os Pokémon individuais
          const pokemonData = await Promise.all(pokemonDataPromises);

          // Adicionar os Pokémon com imagens ao array
          allPokemonWithImages = [...allPokemonWithImages, ...pokemonData];
        }

        // Configurar o estado com a lista completa de Pokémon com imagens
        setPokemonList(allPokemonWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar lista de Pokémon com imagens:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokeContext.Provider
      value={useMemo(
        () => ({
          loading,
          pokeName,
          setPokeName,
          pokeImg,
          setPokeImg,
          pokemonList,
          pokeType,
          setPokeType,
        }),
        [
          loading,
          pokeName,
          setPokeName,
          pokeImg,
          setPokeImg,
          pokemonList,
          pokeType,
          setPokeType,
        ]
      )}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContextProvider;
