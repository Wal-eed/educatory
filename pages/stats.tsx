import MultiDonut from 'components/MultiDonut';
import React from 'react';
import { Heading, Flex, SimpleGrid, Container } from '@chakra-ui/react';
import HeatMap from 'components/HeatMap';
import Radar from 'components/Radar';
// import StatsSideBar from 'components/StatsSideBar';
import LineChart from 'components/LineChart';

const Stats = () => {
	const data = [
		{ category: 'Math', number: 40 },
		{ category: 'Math', number: 69 },
		{ category: 'Math', number: 20 },
		{ category: 'Math', number: 100 },
		{ category: 'Math', number: 100 },
		{ category: 'Math', number: 25 },
		{ category: 'Math', number: 80 },
	];
	return (
		<>
			<Container maxW="container.xl">
				<Flex justifyContent="center">
					<Heading>Progress</Heading>
				</Flex>
				<SimpleGrid columns={2} spacing={10}>
					<MultiDonut data={data} />
					<Radar data={data} />
				</SimpleGrid>
				<Flex justifyContent="center">
					<Heading>Progress over time</Heading>
				</Flex>
				<LineChart />
				<Flex justifyContent="center">
					<Heading>Daily commitment</Heading>
				</Flex>
				<HeatMap />
			</Container>
		</>
	);
};

export default Stats;
