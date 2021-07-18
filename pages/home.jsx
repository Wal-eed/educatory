import React, { useEffect } from 'react';
import Footer from 'components/Footer';
import LessonSection from 'components/LessonSection';
import StatsHeader from 'components/StatsHeader';
import { Container } from '@chakra-ui/react';
import RippleButton from 'components/RippleButton';
import SexierNavbar from 'components/SexierNavbar';
import styles from './Home.module.scss';

const home = (props) => {
	return (
		<div
			className={styles.container}
			style={{
				height: '100%',
				background:
					'linear-gradient(90deg, rgba(198, 199, 255, 1) 0%, rgba(124, 173, 253, 1) 100%)',
			}}
		>
			<SexierNavbar />
			<StatsHeader />
			<LessonSection></LessonSection>
		</div>
	);
};

export default home;
