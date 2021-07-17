import React from 'react';
import { Flex, Icon, Tab, TabList, TabPanels, TabPanel, Tabs, Link } from '@chakra-ui/react';
import { MdAudiotrack, MdRemoveRedEye, MdLibraryBooks } from 'react-icons/md';

const SwitchView = ({ style }) => {
	return (
		<div style={style}>
			<Link href="/audio_page">
				<Icon w={10} h={10} as={MdAudiotrack} />
			</Link>
			<Link href="/viz">
				<Icon w={10} h={10} as={MdRemoveRedEye} />
			</Link>
			<Link href="/text_page">
				<Icon w={10} h={10} as={MdLibraryBooks} />
			</Link>
		</div>
	);
};

export default SwitchView;
