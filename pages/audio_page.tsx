import React from 'react';
import { Heading, Container, Flex } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import SwitchView from 'components/SwitchView';

const Audio_page = () => {
	return (
		<>
			<Flex float="right">
				<SwitchView />
			</Flex>
			<Container>
				<Heading>Audio</Heading>
				<ReactAudioPlayer src="/sound.mp3" controls />
			</Container>
		</>
	);
};

export default Audio_page;
