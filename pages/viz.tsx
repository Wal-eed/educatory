import { Container } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

const Box = (props) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (mesh.current && !active)
      mesh.current.rotation.x = mesh.current.rotation.y += 0.02;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const Viz: React.FC = () => {
  return (
    <Container backgroundColor={"blue"} width={"300px"} height={"300px"}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </Container>
  );
};

export default Viz;
