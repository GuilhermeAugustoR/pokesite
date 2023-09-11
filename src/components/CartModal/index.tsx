import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface ICartModal {
  name: string;
  image: string;
  type: string;
}

const CartModal = ({ name, image }: ICartModal) => {
  return (
    <Box key={name} w="100%" h="200%">
      <HStack justifyContent="space-between" p={2}>
        <Text color="black" fontSize={18} fontWeight="semibold">
          {name}
        </Text>
        <Text
          display="flex"
          alignItems="center"
          color="black"
          fontSize={18}
          fontWeight="semibold"
        >
          <Text color="black" fontSize={11} mt={1}>
            PS
          </Text>
          100
        </Text>
      </HStack>
      <Box>
        <Center w="100%">
          <Image src={image} alt={name} boxSize="280px" objectFit="cover" />
        </Center>
      </Box>
      <VStack w="100%">
        <Center>
          <HStack justifyContent="space-between">
            <Container>Types</Container>
            <Container>Names</Container>
            <Container>Power</Container>
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};

export default CartModal;
