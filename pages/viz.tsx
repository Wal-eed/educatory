import {
	Box,
	SimpleGrid,
	Spacer,
	Heading,
	Button,
	Flex,
	Image,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/dist/client/router';
import React, { Suspense } from 'react';
import Model from '../components/Tree';
import SexierNavbar from 'components/SexierNavbar';
import SwitchView from 'components/SwitchView';

const Viz: React.FC = () => {
	const router = useRouter();

	return (
		<>
			<SexierNavbar />
			<SimpleGrid columns={2} spacing={0} height="90vh">
				<Button
					margin="1rem"
					position="fixed"
					zIndex="5000000"
					bg="red.300"
					onClick={(e) => router.push('/')}
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
					padding="3rem"
					margin="1rem"
					border="1px solid gray"
					rounded="0.5rem"
					style={{ position: 'relative' }}
				>
					<SwitchView style={{ position: 'absolute', top: 0, right: 0 }} />
					<Flex flexDir="column" justifyContent="space-between">
						<Box>
							<Heading as="h1" fontSize="4xl">
								Trees (Visual).
							</Heading>
							<br />
							<i>Click and drag on the tree to view from different angles.</i>
							<Spacer />
						</Box>
						<Box rounded="0.5rem" padding="0.5rem" marginTop="1rem" marginBottom="1rem">
							Trees are tall, woody plants and are usually more than 10 feet (3 meters) tall. They
							have roots, a trunk, branches, and leaves.
						</Box>
						<Accordion allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Parts of the tree
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Image src="/images/one.png" alt="Parts of the tree" />
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Tree Leaves
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Image src="/images/two.png" alt="Tree leaves" />
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Tree trunk
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Image src="/images/three.png" alt="Tree trunk" />
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Tree roots
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Image src="/images/four.png" alt="Tree Roots" />
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
						<Spacer />
						<Box>
							<Flex>
								<br />
								<Button bg="green.300" onClick={(e) => router.push('/quiz')}>
									Take the quiz
								</Button>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</SimpleGrid>
		</>
	);
};

export default Viz;
