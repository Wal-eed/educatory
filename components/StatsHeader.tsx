import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Donut from './Donut';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import styles from './StatsHeader.module.scss';
import Image from 'next/image';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface FeatureProps {
	title: string;
	text: string;
	icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack>
			<Donut height={200} label={title} />
		</Stack>
	);
};

export default function SimpleThreeColumns() {
	return (
		<Flex justifyContent="center" style={{ margin: '2rem 0' }}>
			<Box
				p={4}
				className={styles.outer_box}
				style={{ position: 'relative', borderRadius: '10px' }}
			>
				<Heading>Hey Alex 👋</Heading>
				<Text>Here's what we'll be doing today</Text>
				<SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
					<Feature
						icon={<Icon as={FcAssistant} w={10} h={10} />}
						title={'Numeracy'}
						text={
							'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
						}
					/>
					<Feature
						icon={<Icon as={FcDonate} w={10} h={10} />}
						title={'Science'}
						text={
							'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
						}
					/>
					<Feature
						icon={<Icon as={FcInTransit} w={10} h={10} />}
						title={'Geography'}
						text={
							'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
						}
					/>
				</SimpleGrid>

				<Link href="stats" passHref>
					<Flex>
						<ChevronRightIcon w={6} h={6} />
						<Text style={{}}>
							<u>See More</u>
						</Text>
					</Flex>
				</Link>

				<img
					src="/Study_art.png"
					alt="study image"
					style={{
						position: 'absolute',
						top: -68,
						right: -98,
						height: '150%',
					}}
				/>
			</Box>
		</Flex>
	);
}
