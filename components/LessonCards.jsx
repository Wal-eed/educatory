import React from 'react';
import LessonCard from './LessonCard';
import { Grid, Box } from '@chakra-ui/react';
import Card from './Card';

const LessonCards = ({ cards, text="b" }) => {
	return (
		<div>
			<Grid templateColumns="repeat(3, 1fr)" gap={6}>
				{cards &&
					cards.map((card) => (
						<Box>
							{/* <LessonCard card={card} /> */}
							<Card card={card} text={card.text}/>
						</Box>
					))}
			</Grid>
		</div>
	);
};

export default LessonCards;
