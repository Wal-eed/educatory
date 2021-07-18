import React from 'react';
import styles from './Beaker.module.scss';

const Beaker = () => {
	return (
		<div
			className={styles.container}
			style={{
				position: 'absolute',
				top: '-60px',
				right: '-150px',
				transform: `scale(0.3) rotate(-20deg)`,
				transformOrigin: '0 0',
			}}
		>
			<div className={styles.beaker}>
				<div className={styles.liquid}>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
					<div className={styles.bubble}></div>
				</div>
			</div>
		</div>
	);
};

export default Beaker;
