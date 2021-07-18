import React from 'react';
import { Heading, Text, Container, Flex, Button, Image } from '@chakra-ui/react';
import SwitchView from 'components/SwitchView';
import SexierNavbar from 'components/SexierNavbar';
import { useRouter } from 'next/dist/client/router';

const Text_page = () => {
	const router = useRouter();
	return (
		<>
			<SexierNavbar />
			<Flex float="right">
				<SwitchView />
			</Flex>
			<Container maxW="container.lg">
				<br />
				<Heading>Text</Heading>
				<Text>
					Trees are tall, woody plants. They usually have a stem called a trunk. Trees are the
					largest and oldest living things on Earth. Some trees live for hundreds or even thousands
					of years. There are more than 80,000 species, or types, of tree. Well-known trees include
					birches, firs, maples, palms, and pines. Trees are usually more than 10 feet (3 meters)
					tall. They have roots, a trunk, branches, and leaves. The trunk and branches are made of
					fibers called wood.
				</Text>
				<Container
					style={{
						margin: '0 auto',
						marginTop: 20,
						marginBottom: 20,
					}}
				>
					<Image
						src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						style={{
							boxShadow:
								'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
						}}
					></Image>
				</Container>
				<Text>
					The leaves are usually what we see as the green part of a tree! They make food for the
					tree through a process called photosynthesis The roots of the tree are the part that is
					the under the soil, and is carries all the nutrients that a tree needs to live from the
					soil up to the tree!
				</Text>
				<br />
				<Container style={{ textAlign: 'center' }}>
					<Button bg="green.300" onClick={() => router.push('/quiz')}>
						Take the quiz
					</Button>
				</Container>
			</Container>
		</>
	);
};

export default Text_page;
