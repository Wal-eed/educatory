import MultiDonut from 'components/MultiDonut';
import React from 'react';
import { Heading, Flex, SimpleGrid, Container } from '@chakra-ui/react';
import HeatMap from 'components/HeatMap';
import Radar from 'components/Radar';
// import StatsSideBar from 'components/StatsSideBar';
import LineChart from 'components/LineChart';
import Navbar from 'components/Navbar';
import Paper from 'components/Paper';

const Stats = () => {
	const data = {
		// math:
		science: [
			{ date: '12 Jul', number: 25 },
			{ date: '13 Jul', number: 20 },
			{ date: '14 Jul', number: 50 },
			{ date: '15 Jul', number: 80 },
			{ date: '16 Jul', number: 70 },
			{ date: '17 Jul', number: 80 },
			{ date: '18 Jul', number: 80 },
		],
		numeracy: [
			{ date: '12 Jul', number: 25 },
			{ date: '13 Jul', number: 30 },
			{ date: '14 Jul', number: 42 },
			{ date: '15 Jul', number: 21 },
			{ date: '16 Jul', number: 60 },
			{ date: '17 Jul', number: 70 },
			{ date: '18 Jul', number: 85 },
		],
		geography: [
			{ date: '12 Jul', number: 10 },
			{ date: '13 Jul', number: 20 },
			{ date: '14 Jul', number: 30 },
			{ date: '15 Jul', number: 40 },
			{ date: '16 Jul', number: 50 },
			{ date: '17 Jul', number: 60 },
			{ date: '18 Jul', number: 70 },
		],
	};

	const data_today = [
		{ category: 'science', number: data.science[data.science.length - 1].number },
		{ category: 'numeracy', number: data.numeracy[data.science.length - 1].number },
		{ category: 'geography', number: data.geography[data.science.length - 1].number },
	];

	return (
		<>
			<Navbar />
			<Container maxW="container.xl">
				<Paper>
					<Flex justifyContent="center">
						<Heading>Progress over time</Heading>
					</Flex>
					<LineChart data={data} />
				</Paper>
				<SimpleGrid columns={2} spacing={10}>
					<Paper>
						<Flex justifyContent="center">
							<Heading>Progress</Heading>
						</Flex>
						<MultiDonut data={data_today} />
					</Paper>
					<Paper>
						<Flex justifyContent="center">
							<Heading>Core Competencies</Heading>
						</Flex>
						<Radar data={data_today} />
					</Paper>
				</SimpleGrid>
				<Paper>
					<Flex justifyContent="center">
						<Heading>Daily commitment</Heading>
					</Flex>
					<HeatMap />
				</Paper>
			</Container>
		</>
	);
};

export default Stats;
