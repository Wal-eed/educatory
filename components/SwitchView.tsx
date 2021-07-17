import React from 'react';
import { Flex, Icon, Tab, TabList, TabPanels, TabPanel, Tabs, Link } from '@chakra-ui/react';
import { MdAudiotrack, MdRemoveRedEye, MdLibraryBooks } from 'react-icons/md';

const SwitchView = () => {
	return (
		<>
			<Link href="/audio_page">
				<Icon w={10} h={10} as={MdAudiotrack} />
			</Link>
			<Icon w={10} h={10} as={MdRemoveRedEye} />
			<Link href="/text_page">
				<Icon w={10} h={10} as={MdLibraryBooks} />
			</Link>
			{/* //{' '}
			<Flex justifyContent="center">
				// <Icon w={20} h={20} as={MdAudiotrack} />
				// <Icon w={20} h={20} as={MdRemoveRedEye} />
				// <Icon w={20} h={20} as={MdLibraryBooks} />
				//{' '}
			</Flex> */}
		</>
	);
};

export default SwitchView;
