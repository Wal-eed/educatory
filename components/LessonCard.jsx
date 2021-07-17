import React from 'react';
import styles from './LessonCard.module.scss';
import { Container } from '@chakra-ui/react';
import RippleButton from './RippleButton';

const LessonCard = ({ card }) => {
	const { title, image, label } = card;

	return (
		<div>
			<div className={styles.wrap}>
				<div
					className={styles.card}
					style={{
						background: `url(${image})`,
						backgroundSize: 'cover',
					}}
				>
					<Container
						style={{
							position: 'absolute',
							background: 'white',
							height: '45px',
							lineHeight: '45px',
						}}
					>
						<h3 style={{}}>
							<strong>{title}</strong>
						</h3>
					</Container>
					<Container
						style={{
							position: 'absolute',
							bottom: '5px',
						}}
					>
						<RippleButton text="Start" />
					</Container>
					{label && (
						<span className={styles.tag}>
							<strong>{label}</strong>
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default LessonCard;
