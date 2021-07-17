import React from 'react';
import LessonCard from './LessonCard';
import { Grid, Box } from '@chakra-ui/react';
import Card from './Card';
import { Stack, HStack, VStack } from '@chakra-ui/react';

const LessonCards = ({ cards }) => {
	return (
		<div>
			<HStack spacing="24px">
				{cards &&
					cards.map((card) => (
						<Box>
							{/* <LessonCard card={card} /> */}
							<Card card={card} />
						</Box>
					))}
			</HStack>
		</div>
	);
};

export default LessonCards;
