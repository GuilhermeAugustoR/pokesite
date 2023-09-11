import { Box, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PokeContext } from "../../context/pokeContext";

interface ICart {
  name: string;
  image: string;
  type: string;
  onClick: () => void;
}

const Cart = ({ name, image, type, onClick }: ICart) => {
  const { setPokeName, setPokeImg, setPokeType } = useContext(PokeContext);

  return (
    <Box
      key={name}
      w="180px"
      h="280px"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      cursor="pointer"
      onClick={() => {
        onClick();
        setPokeName(name);
        setPokeImg(image);
        setPokeType(type);
      }}
    >
      <Image src={image} alt={name} boxSize="200px" objectFit="cover" />
      <Text
        color="white"
        textAlign="center"
        fontSize={20}
        fontWeight="semibold"
      >
        {name}
      </Text>
      <Text
        color="white"
        textAlign="center"
        fontSize={15}
        fontWeight="semibold"
      >
        {type}
      </Text>
    </Box>
  );
};

export default Cart;
