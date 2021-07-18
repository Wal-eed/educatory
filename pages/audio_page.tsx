import React from 'react';
import { Heading, Container, Flex, Button } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import SwitchView from 'components/SwitchView';
import Navbar from 'components/Navbar';
import SexierNavbar from 'components/SexierNavbar';
import styles from './Audio.module.scss';
import { useRouter } from 'next/dist/client/router';

const Audio_page = () => {
	const router = useRouter();
	return (
		<>
			{/* <Navbar /> */}
			<SexierNavbar />
			<Flex float="right">
				<SwitchView />
			</Flex>
			<br />
			<Container
				style={{
					textAlign: 'center',
				}}
			>
				<Heading>Audio</Heading>
				<div className={styles.audioPlayer}>
					<ReactAudioPlayer src="/sound.mp3" controls />
				</div>
				<br />
				<Button bg="green.300" onClick={() => router.push('/quiz')}>
					Take the quiz
				</Button>
			</Container>
		</>
	);
};

export default Audio_page;
