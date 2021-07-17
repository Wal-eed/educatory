import MultiDonut from 'components/MultiDonut';
import React from 'react';
import { Heading, Flex, SimpleGrid } from '@chakra-ui/react';
import HeatMap from 'components/HeatMap';
import Radar from 'components/Radar';
import StatsSideBar from 'components/StatsSideBar';

const Stats = () => {
	const data = [
		{ category: 'January', number: 40 },
		{ category: 'January', number: 69 },
		{ category: 'January', number: 20 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 25 },
		{ category: 'January', number: 80 },
	];
	return (
		<>
			<Flex justifyContent="center">
				<Heading>Progress</Heading>
			</Flex>
			<SimpleGrid columns={2} spacing={10}>
				<MultiDonut data={data} />
				<Radar data={data} />
			</SimpleGrid>
			<Flex justifyContent="center">
				<Heading>Daily commitment</Heading>
			</Flex>
			<HeatMap />
		</>
	);
};

export default Stats;
