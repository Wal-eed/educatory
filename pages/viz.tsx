import {
  Box,
  SimpleGrid,
  Spacer,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/dist/client/router";
import React, { Suspense } from "react";
import Model from "../components/Tree";

const Viz: React.FC = () => {
  const router = useRouter();

  return (
    <SimpleGrid columns={2} spacing={0} height="100vh">
      <Button
        margin="1rem"
        position="fixed"
        zIndex="5000000"
        bg="red.300"
        onClick={(e) => router.push("/")}
      >
        Go back
      </Button>
      <Canvas camera={{ position: [-3, 3, -3], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Box
        bg="white"
        padding="3rem"
        margin="1rem"
        border="1px solid gray"
        rounded="0.5rem"
      >
        <Flex flexDir="column" justifyContent="space-between">
          <Box>
            <Heading as="h1" fontSize="4xl">
              Lorem ipsum dolor sit amet.
            </Heading>
            <br />
            <i>Click and drag on the tree to view from different angles.</i>
            <Spacer />
          </Box>
          <Box
            rounded="0.5rem"
            bgColor="white"
            padding="0.5rem"
            marginTop="1rem"
            marginBottom="1rem"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vel ea aliquid soluta quas molestias cupiditate repellat quasi alias
            officiis repudiandae consequuntur nisi dolores ipsum possimus, a
            tempore atque voluptatibus numquam porro in illo itaque? Et, amet
            eveniet harum ducimus dignissimos explicabo? Recusandae, labore
            ducimus earum aperiam at temporibus cum.
          </Box>
          <Box
            rounded="0.5rem"
            bgColor="white"
            padding="0.5rem"
            marginTop="1rem"
            marginBottom="1rem"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vel ea aliquid soluta quas molestias cupiditate repellat quasi alias
            officiis repudiandae consequuntur nisi dolores ipsum possimus, a
            tempore atque voluptatibus numquam porro in illo itaque? Et, amet
            eveniet harum ducimus dignissimos explicabo? Recusandae, labore
            ducimus earum aperiam at temporibus cum.
          </Box>
          <Box
            rounded="0.5rem"
            bgColor="white"
            padding="0.5rem"
            marginTop="1rem"
            marginBottom="1rem"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vel ea aliquid soluta quas molestias cupiditate repellat quasi alias
            officiis repudiandae consequuntur nisi dolores ipsum possimus, a
            tempore atque voluptatibus numquam porro in illo itaque? Et, amet
            eveniet harum ducimus dignissimos explicabo? Recusandae, labore
            ducimus earum aperiam at temporibus cum.
          </Box>
          <Box
            rounded="0.5rem"
            bgColor="white"
            padding="0.5rem"
            marginTop="1rem"
            marginBottom="1rem"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vel ea aliquid soluta quas molestias cupiditate repellat quasi alias
            officiis repudiandae consequuntur nisi dolores ipsum possimus, a
            tempore atque voluptatibus numquam porro in illo itaque? Et, amet
            eveniet harum ducimus dignissimos explicabo? Recusandae, labore
            ducimus earum aperiam at temporibus cum.
          </Box>
          <Spacer />
          <Box>
            <Flex>
              <Button bg="green.300">Take the quiz</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default Viz;
