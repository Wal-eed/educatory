import React from 'react';
import { Button, chakra, Box, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import RippleButton from './RippleButton';
import RouterLink from 'next/link';
import { MdAudiotrack, MdRemoveRedEye, MdLibraryBooks } from 'react-icons/md';
import styles from './Card.module.scss';

const modeToLink = {
	audio: 'audio_page',
	text: 'text_page',
	visual: 'viz',
};

const modeToIcon = {
	audio: <MdAudiotrack />,
	text: <MdLibraryBooks />,
	visual: <MdRemoveRedEye />,
};

const Ma = ({ card }) => {
	const { title, image, isRecommended, lessonType } = card;

	return (
		<Flex
			maxW="md"
			mx="auto"
			bg={useColorModeValue('white', 'gray.800')}
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			className={styles.card}
		>
			<Box
				w={'50%'}
				bgSize="cover"
				style={{
					backgroundImage: `url('${image}')`,
				}}
			></Box>

			<Box w={'50%'} p={{ base: 4, md: 4 }}>
				<chakra.h1 fontSize="2xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
					<span style={{ textShadow: 'white 0px 0px 10px' }}>{title}</span>
				</chakra.h1>

				<chakra.p mt={2} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
				</chakra.p>

				<Flex mt={3} alignItems="center" justifyContent="space-between">
					<chakra.h1 color="black" fontWeight="bold" fontSize="xs">
						<span>{isRecommended && <>Recommended!</>}</span>
						<span className={styles.icon}>{modeToIcon[lessonType]}</span>
					</chakra.h1>

					<chakra.button
						px={2}
						py={1}
						bg="white"
						fontSize="xs"
						color="gray.900"
						fontWeight="bold"
						rounded="lg"
						textTransform="uppercase"
						_hover={{
							bg: 'gray.200',
						}}
						_focus={{
							bg: 'gray.400',
						}}
					>
						<RouterLink href={`/${modeToLink[lessonType]}`}>
							<Button colorScheme="blue">Start</Button>
						</RouterLink>
					</chakra.button>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Ma;
