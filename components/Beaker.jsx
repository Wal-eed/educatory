import React from 'react';
import styles from './Beaker.module.scss';

const Beaker = () => {
	return (
		<div className={styles.container}>
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
