import React from 'react';
import { Container } from '@chakra-ui/react';
import LessonCards from 'components/LessonCards';
import { Text } from '@chakra-ui/react';
import Beaker from 'components/Beaker';

const lessons = [
	{
		title: 'Science',
	},
	{
		title: 'Numeracy',
	},
	{
		title: 'Logic',
	},
];

const lessonCards = {
	science: [
		{
			title: 'Plants',
			image:
				'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
			label: 'Visual Recommended',
		},
		{
			title: 'Astronomy',
			image:
				'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
			label: 'Visual Recommended',
		},
		{
			title: 'Electricity',
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
		{
			title: 'Counting',
			image:
				'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
		},
		{
			title: 'Geometry',
			image:
				'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
		},
	],
	logic: [
		{
			title: 'Puzzles',
			image:
				'https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
		},
		{
			title: 'Riddles',
			image:
				'https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
		},
	],
};

const getLessonCards = (lessonName) => {
	const normalisedName = lessonName.toLowerCase();
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
						// paddingTop: 20,
						borderRadius: '10px',
						boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
						position: 'relative',
						color: 'white',
						background: `url(/images/${lessonCategory.title.toLowerCase()}.png)`,
					}}
				>
					{/* white strip */}
					{/* <div
						className={'whitestrip'}
						style={{
							position: 'absolute',
							width: '100%',
							height: '20px',
							top: 0,
							background: 'white',
						}}
					/> */}
					{lessonCategory.title === 'Science' && <Beaker />}
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
