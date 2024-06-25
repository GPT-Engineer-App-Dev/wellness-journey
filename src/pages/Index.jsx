import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated!</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Running" icon={<FaRunning />} size="lg" />
          <IconButton aria-label="Weightlifting" icon={<FaDumbbell />} size="lg" />
          <IconButton aria-label="Heartbeat" icon={<FaHeartbeat />} size="lg" />
        </HStack>
        <Box>
          <Button colorScheme="teal" size="lg" mt={4}>Get Started</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;