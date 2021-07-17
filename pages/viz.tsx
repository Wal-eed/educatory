import {
  Box,
  Text,
  SimpleGrid,
  Spacer,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Environment, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRouter } from "next/dist/client/router";
import React, { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import Model from "../components/Tree";

const Viz: React.FC = () => {
  const router = useRouter();

  return (
    <SimpleGrid columns={2} spacing={0} height="100vh">
      <Canvas camera={{ position: [-3, 3, -3], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Box bg="beige" padding="3rem">
        <Flex flexDir="column" justifyContent="space-between">
          <Box>
            <Button bg="red.300" onClick={(e) => router.push("/")}>
              Go back
            </Button>
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
