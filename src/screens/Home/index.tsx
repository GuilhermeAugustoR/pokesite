import { useContext, useState } from "react";
import { Center, Stack } from "@chakra-ui/react";
import Loading from "../../components/Loading";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal";
import { PokeContext } from "../../context/pokeContext";
import CartModal from "../../components/CartModal";

const Home = () => {
  const { loading, pokeName, pokeImg, pokemonList, pokeType } =
    useContext(PokeContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <Stack
      display="grid"
      gridTemplateColumns="repeat(4, 300px)"
      w="100%"
      h="max-content"
      p={5}
    >
      <Modal onOpen={showModal} onClose={() => setShowModal(false)}>
        <Stack w="100%" h="100%" justifyContent="center" alignItems="center">
          <CartModal name={pokeName} image={pokeImg} type={pokeType} />
        </Stack>
      </Modal>

      {loading ? (
        <Stack display="flex" w="60vw" h="96vh">
          <Center w="100%" h="100%">
            <Loading />
          </Center>
        </Stack>
      ) : (
        pokemonList.map((pokemon: any) => (
          <Cart
            name={pokemon.name}
            image={pokemon.imageUrl}
            type={pokemon?.type}
            onClick={() => setShowModal(true)}
          />
        ))
      )}
    </Stack>
  );
};

export default Home;
