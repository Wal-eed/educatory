import React from 'react';
import { Container } from '@chakra-ui/react';
import LessonCards from 'components/LessonCards';
import { Text } from '@chakra-ui/react';

const lessons = [
	{
		title: 'Science',
	},
	{
		title: 'Numeracy',
	},
	{
		title: 'Geography',
	},
];

const lessonCards = {
	science: [
		{
			title: 'Trees',
			image:
				'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
			label: 'Visual Recommended',
		},
	],
	numeracy: [
		{
			title: 'Arithmetic',
			image:
				'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
		},
	],
	geography: [
		{
			title: 'Countries',
			image:
				'https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
		},
	],
};

const getLessonCards = (lessonName) => {
	const normalisedName = lessonName.toLowerCase();
	console.log(lessonName);
	console.log(lessonCards.science);
	return lessonCards[normalisedName];
};

const LessonSection = () => {
	console.log(lessonCards['Science']);
	return (
		<div style={{ margin: 20 }}>
			{lessons.map((lessonCategory) => (
				<div
					style={{
						background: 'white',
						margin: 20,
						padding: 10,
						borderRadius: '10px',
						boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
					}}
				>
					<Text fontSize="2xl" style={{ paddingLeft: 10, paddingTop: 10 }}>
						{lessonCategory.title}
					</Text>
					<LessonCards cards={getLessonCards(lessonCategory.title)} />
				</div>
			))}
		</div>
	);
};

export default LessonSection;
