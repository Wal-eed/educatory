import React from 'react';
import LessonCard from './LessonCard';
import { Grid, Box } from '@chakra-ui/react';

const LessonCards = ({ cards }) => {
	return (
		<div>
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{cards &&
					cards.map((card) => (
						<Box>
							<LessonCard card={card} />
						</Box>
					))}
			</Grid>
		</div>
	);
};

export default LessonCards;
