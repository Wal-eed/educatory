import React from 'react';
import { Container } from '@chakra-ui/react';
import LessonCards from 'components/LessonCards';
import { Text } from '@chakra-ui/react';
import Beaker from 'components/Beaker';
import {motion} from "framer-motion"

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
				'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			label: 'Visual Recommended',
			isRecommended: true,
			lessonType: 'visual',
			text: 'Trees are tall, woody plants.',
		},
		{
			title: 'Astronomy',
			image:
				'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

			lessonType: 'visual',
			text: 'Celestial objects, space, and the universe',
		},
		{
			title: 'Electricity',
			image:
				'https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
			lessonType: 'audio',
			text: 'Energy that powers the world',
		},
	],
	numeracy: [
		{
			title: 'Arithmetic',
			image:
				'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
			isRecommended: true,
			lessonType: 'visual',
			text: "Addition, subtraction, multiplication and division"
		},
		{
			title: 'Counting',
			image:
				'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
			lessonType: 'visual',
			text: "How many sheeps are there in the farm?"
		},
		{
			title: 'Geometry',
			image:
				'https://images.unsplash.com/photo-1604782206219-3b9576575203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=943&q=80',
			lessonType: 'visual',
			text: "Squares, rectangles, and other cool shapes"
		},
	],
	logic: [
		{
			title: 'Puzzles',
			image:
				'https://images.unsplash.com/photo-1588591795084-1770cb3be374?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
			isRecommended: true,
			lessonType: 'visual',
			text: "Join us in solving jigsaws and rubik's cubes"
		},
		{
			title: 'Riddles',
			image:
				'https://images.unsplash.com/photo-1615368946542-390a84479ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80',
			lessonType: 'text',
			text: "What month of the year has 28 days?"
		},
	],
};

const getLessonCards = (lessonName) => {
	const normalisedName = lessonName.toLowerCase();
	return lessonCards[normalisedName];
};

const LessonSection = () => {
	console.log( lessonCards['Science']);
	return (
		<div style={{ margin: 20 }}>
			{lessons.map((lessonCategory, i) => {
				console.log("lesson=>>>",getLessonCards(lessonCategory.title))
				console.log("lesson1=>>>", getLessonCards(lessonCategory.title).text)
				
				return (
					<motion.div
						key={i}
						initial={{
							opacity: 0,
							y: 30,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
						}}
						style={{
							background: 'white',
							margin: 20,
							// paddingTop: 20,
							paddingLeft: '20px',
							paddingRight: '20px',
							borderRadius: '10px',
							boxShadow:
								'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
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
						<Text fontSize="2xl" style={{ paddingLeft: 20, paddingTop: 20 }}>
							<span style={{ textShadow: 'white 0px 0px 2px' }}>{lessonCategory.title}</span>
						</Text>
						<br />
						<LessonCards cards={getLessonCards(lessonCategory.title)}/>
						<br />
					</motion.div>
				);
			})}
		</div>
	);
};

export default LessonSection;
