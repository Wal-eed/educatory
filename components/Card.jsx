import React from 'react';
import { chakra, Box, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import RippleButton from './RippleButton';

const Ma = ({ card, text = "a" }) => {
	const { title, image, isRecommended, lessonType } = card;

	return (
		<Flex
			maxW="md"
			mx="auto"
			bg={useColorModeValue('white', 'gray.800')}
			shadow="lg"
			rounded="lg"
			overflow="hidden"
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
					{title}
				</chakra.h1>

				<chakra.p mt={2} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
					{text}
				</chakra.p>

				<Flex mt={3} alignItems="center" justifyContent="space-between">
					<chakra.h1 color="black" fontWeight="bold" fontSize="md">
						Recommended
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
						<RippleButton text="Start"></RippleButton>
					</chakra.button>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Ma;
