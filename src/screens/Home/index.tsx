import { useContext, useState } from "react";
import { Center, Grid, Stack } from "@chakra-ui/react";
import Loading from "../../components/Loading";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal";
import { PokeContext } from "../../context/pokeContext";
import CartModal from "../../components/CartModal";
import listPokemonService from "../../service/Pokemon/listPokemonService";

interface IPokeMap {
  name: string;
  imageUrl: string;
  type: any;
}

const Home = () => {
  const { loading, pokeName, pokeImg, pokemonList } = useContext(PokeContext);
  const [showModal, setShowModal] = useState(false);
  const [loadingSpecific, setLoadingSpecific] = useState(false);
  const [data, setData] = useState([]);
  const [dataAttack, setDataAttack] = useState([]);

  const handlePokemonType = async (name: string) => {
    setLoadingSpecific(true);
    try {
      const response = await listPokemonService.getPokemonSpecific({
        name,
      });

      if (!response) {
        console.log("!response", response);
        setLoadingSpecific(false);
        return;
      }

      setLoadingSpecific(false);
      setData(response.stats);
      setDataAttack(response.abilities);
    } catch (error) {
      console.log(error);
      setLoadingSpecific(false);
    }
  };

  return (
    <Stack display="flex" w={"100%"} h="100%" p={2}>
      <Modal onOpen={showModal} onClose={() => setShowModal(false)}>
        <Stack w="100%" h="100%" justifyContent="center" alignItems="center">
          {loadingSpecific ? (
            <Loading />
          ) : (
            <CartModal
              name={pokeName}
              image={pokeImg}
              stats={data}
              abilities={dataAttack}
            />
          )}
        </Stack>
      </Modal>

      {loading ? (
        <Center h="100vh">
          <Loading />
        </Center>
      ) : (
        <Center w="fit-content" display="flex">
          <Grid templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr ", "1fr 1fr 1fr 1fr"]} gap={6}>
            {pokemonList.map(({ name, imageUrl, type }: IPokeMap) => (
              <Cart
                name={name}
                image={imageUrl}
                type={type[0]?.type?.name}
                onClick={() => {
                  handlePokemonType(name);
                  setShowModal(true);
                }}
              />
            ))}
          </Grid>
        </Center>
      )}
    </Stack>
  );
};

export default Home;
