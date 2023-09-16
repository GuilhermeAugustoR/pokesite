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
  stats: any;
  abilities: any;
}

const CartModal = ({ name, image, stats, abilities }: ICartModal) => {
  return (
    <Box key={name} w="100%" h="200%">
      <HStack justifyContent="space-between" p={2}>
        <Text color="black" fontSize={18} fontWeight="semibold">
          {name}
        </Text>
        {/* <Text
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
        </Text> */}
      </HStack>
      <Box>
        <Center w="100%">
          <Image src={image} alt={name} boxSize="280px" objectFit="cover" />
        </Center>
      </Box>
      <VStack display="flex">
        <Text w="100%" fontSize={18} fontWeight="semibold" fontFamily="heading">
          Stats
        </Text>
        <HStack w={400} h={90} overflow="auto">
          {stats.map((resp: any, index: number) => (
            <Container key={index} alignSelf="center" justifyContent="center">
              <Text
                w="max-content"
                fontSize={18}
                fontWeight="semibold"
                fontFamily="heading"
              >
                {resp.stat.name}
              </Text>
              <Text
                textAlign="center"
                fontSize={17}
                fontWeight="medium"
                fontFamily="mono"
              >
                {resp.base_stat}
              </Text>
            </Container>
          ))}
        </HStack>
      </VStack>

      <VStack display="flex">
        <Text w="100%" fontSize={18} fontWeight="semibold" fontFamily="heading">
          Abilities
        </Text>
        <HStack w={400} h={50} overflow="auto">
          {abilities.map((resp: any, index: number) => (
            <Container key={index} w="40%">
              <Text
                w="fit-content"
                fontSize={18}
                fontWeight="semibold"
                fontFamily="heading"
              >
                {resp.ability.name}
              </Text>
              {/* <Text
                textAlign="center"
                fontSize={17}
                fontWeight="medium"
                fontFamily="mono"
              >
                {resp.base_stat}
              </Text> */}
            </Container>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default CartModal;
