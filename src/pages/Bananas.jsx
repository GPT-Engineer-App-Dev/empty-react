import { Container, Text, VStack } from "@chakra-ui/react";

const Bananas = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Bananas page!</Text>
      </VStack>
    </Container>
  );
};

export default Bananas;