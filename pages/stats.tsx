import MultiDonut from 'components/MultiDonut';
import React from 'react';
import { Heading, Flex, SimpleGrid, Container, Button } from '@chakra-ui/react';
import HeatMap from 'components/HeatMap';
import Radar from 'components/Radar';
// import StatsSideBar from 'components/StatsSideBar';
import LineChart from 'components/LineChart';
import SexierNavbar from 'components/SexierNavbar';
import Paper from 'components/Paper';
import { useRouter } from 'next/dist/client/router';

import data from '../components/StatsData';

const Stats = () => {
	const router = useRouter();

	const data_today = [
		{ category: 'science', number: data.science[data.science.length - 1].number },
		{ category: 'numeracy', number: data.numeracy[data.science.length - 1].number },
		{ category: 'logic', number: data.logic[data.science.length - 1].number },
	];

	return (
		<>
			<SexierNavbar />
			<Button
				margin="1rem"
				position="fixed"
				zIndex="5000000"
				bg="red.300"
				onClick={(e) => router.push('/')}
			>
				Go back
			</Button>
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
						<Radar />
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
