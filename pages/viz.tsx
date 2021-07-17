import { Box, Container, Progress, SimpleGrid } from "@chakra-ui/react";
import { Environment, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import Model from "../components/Tree";

const Viz: React.FC = () => {
  const { progress } = useProgress();

  return (
    <SimpleGrid columns={2} spacing={0} height="100vh">
      <Canvas camera={{ position: [-25, 10, -25], fov: 90 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Box bg="tomato" />
    </SimpleGrid>
  );
};

export default Viz;
