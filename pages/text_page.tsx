import React from 'react';
import { Heading, Text, Container, Flex } from '@chakra-ui/react';
import SwitchView from 'components/SwitchView';

const Text_page = () => {
	return (
		<>
			<Flex float="right">
				<SwitchView />
			</Flex>
			<Container maxW="container.lg">
				<Heading>Text</Heading>
				<Text>
					Trees are tall, woody plants. They usually have a stem called a trunk. Trees are the
					largest and oldest living things on Earth. Some trees live for hundreds or even thousands
					of years. There are more than 80,000 species, or types, of tree. Well-known trees include
					birches, firs, maples, palms, and pines. Trees are usually more than 10 feet (3 meters)
					tall. They have roots, a trunk, branches, and leaves. The trunk and branches are made of
					fibers called wood. The leaves are usually what we see as the green part of a tree! They
					make food for the tree through a process called photosynthesis The roots of the tree are
					the part that is the under the soil, and is carries all the nutrients that a tree needs to
					live from the soil up to the tree!
				</Text>
			</Container>
		</>
	);
};

export default Text_page;
