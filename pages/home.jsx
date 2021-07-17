import React from 'react';
import Footer from 'components/Footer';
import LessonSection from 'components/LessonSection';
import StatsHeader from 'components/StatsHeader';
import { Container } from '@chakra-ui/react';
import RippleButton from 'components/RippleButton';
const home = (props) => {
	return (
		<div
			style={{
				height: '100%',
			}}
		>
			<StatsHeader />
			<LessonSection></LessonSection>
			{/* <Footer /> */}
		</div>
	);
};

export default home;
